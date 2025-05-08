import styles from "./AllItems.module.scss";
import { useEffect, useState, useMemo } from "react";
import getItems from "../../API/getItems";
import Item from "../Item/Item";
import Pagination from "./Pagination";
import AllItemsHeader from "../AllItemsHeader/AllItemsHeader";
import getDeviceType from "./getDeviceType";

export default function AllItems() {
  const [allItems, setAllItems] = useState([]);
  const [sort, setSort] = useState("recent");
  const [page, setPage] = useState(1);
  const [itemTotalCount, setItemTotalCount] = useState();
  const [pages, setPages] = useState([1, 5]); //페이지네이션 페이지 숫자 범위
  const [newpages, setNewpages] = useState(1);
  const [showItems, setShowItems] = useState([]);
  const [length, setLength] = useState(0);
  const deviceType = getDeviceType();

  const totalPages = //끝페이지 숫자
    deviceType === "desktop"
      ? Math.ceil(itemTotalCount / 10)
      : deviceType === "tablet"
      ? Math.ceil(itemTotalCount / 6)
      : Math.ceil(itemTotalCount / 4);

  useEffect(() => {
    async function fetchItems() {
      try {
        const safePage = Math.max(newpages, 1);
        const items = await getItems(safePage, 60, sort);
        setAllItems(items.list);
        setItemTotalCount(items.totalCount);
      } catch (error) {
        console.error("전체 아이템 불러오기 실패:", error);
      }
    }
    fetchItems();
  }, [sort, newpages]);

  const pageSize = useMemo(() => {
    return deviceType === "desktop" ? 10 : deviceType === "tablet" ? 6 : 4;
  }, [deviceType]);

  const pagesPerRequest = Math.floor(60 / pageSize); // 데스크탑일 경우 6페이지 단위

  useEffect(() => {
    const currentBatch = Math.floor((page - 1) / pagesPerRequest); // 이번 구간
    const fetchPage = currentBatch + 1;
    if (fetchPage !== newpages) {
      setNewpages(fetchPage);
      return;
    }

    const indexInBatch = (page - 1) % pagesPerRequest; // 이번 구간에서 몇 번째 페이지인지 -> slice용 offset, limit 계산
    const offset = indexInBatch * pageSize;
    const limit = offset + pageSize;

    setShowItems(allItems.slice(offset, limit)); // 새로운 아이템 설정
  }, [page, allItems, pageSize, pagesPerRequest]);

  useEffect(() => {
    const onResize = () => {
      checkPages();
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [totalPages]);

  function checkPages() {
    //화면 리사이즈에 따른, 페이지 수 재설정
    //작은화면에서 끝 페이지로 갔을때, 에러있음.. 개선하기
    if (pages[1] > totalPages) {
      setPages([1, 5]);
      setPage(1);
    }
    if (length < 5) {
      setPages((prev) => [prev[0], prev[0] + 4]);
    }
  }

  function pagesUpdate(prev, direction) {
    if (
      (direction === "left" && prev[0] === 1) ||
      (direction === "right" && prev[1] === totalPages)
    ) {
      return prev;
    } else if (direction === "left") {
      const newEnd = prev[0] - 1;
      const newStart = Math.max(newEnd - 4, 1);
      return [newStart, newEnd];
    } else if (direction === "right") {
      const newStart = prev[0] + 5;
      const newEnd = Math.min(newStart + 4, totalPages);
      return [newStart, newEnd];
    }
  }

  return (
    <div className={styles.allItems}>
      <AllItemsHeader sort={sort} setSort={setSort} setPage={setPage} />

      <div className={styles.items}>
        {showItems.map((item) => (
          <Item item={item} listType="all" key={item.id} />
        ))}
      </div>

      <div className={styles.pages}>
        <button
          className={styles.leftArrow}
          onClick={() => setPages((prev) => pagesUpdate(prev, "left"))}
        />
        <Pagination
          pages={pages}
          page={page}
          setPage={setPage}
          setLength={setLength}
        />
        <button
          className={styles.rightArrow}
          onClick={() => setPages((prev) => pagesUpdate(prev, "right"))}
        />
      </div>
    </div>
  );
}
