import styles from "./AllItems.module.scss";
import { useEffect, useState } from "react";
import getItems from "../../API/getItems";
import Item from "../Item/Item";
import { useNavigate } from "react-router";
import Pagination from "./Pagination";
import handleResize from "./handleResize";

export default function AllItems() {
  //useEffect - fetchItems
  const [allItems, setAllItems] = useState([]);
  const [sort, setSort] = useState("recent");
  const [page, setPage] = useState(1); //fetch parameter
  const [itemTotalCount, setItemTotalCount] = useState();
  //
  // const deviceType = useDeviceType();
  const [showItems, setShowItems] = useState([]);
  //pagination
  const [pages, setPages] = useState([1, 5]); //페이지네이션 페이지 숫자 범위
  const totalPages = Math.ceil(itemTotalCount / 10);
  //etc
  const [open, setOpen] = useState(false); //드롭다운 오픈
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchItems() {
      try {
        const items = await getItems(page, 60, sort);
        setAllItems(items.list);
        handleResize(deviceType, allItems, setShowItems);
        setItemTotalCount(items.totalCount);
      } catch (error) {
        console.error("전체 아이템 불러오기 실패:", error);
      }
    }
    fetchItems();
  }, [sort, page]);

  // //화면 리사이즈..
  // useEffect(() => {
  //   if (deviceType === "tablet") {
  //     setShowItems(allItems.slice(0, 6));
  //     console.log("tablet");
  //   } else if (deviceType === "mobile") {
  //     setShowItems(allItems.slice(0, 4));
  //     console.log("mobile");
  //   } else {
  //     setShowItems(allItems.slice(0, 10));
  //     console.log("desktop");
  //   }
  // }, [deviceType]);
  //
  // 화면 리사이즈 감지
  const deviceType = getDeviceType();

  function getDeviceType() {
    const width = document.documentElement.clientWidth;
    if (width <= 376) return "mobile";
    if (width <= 744) return "tablet";
    return "desktop";
  }

  useEffect(() => {
    const resizeHandler = () => {
      handleResize(deviceType, allItems, setShowItems);
    };

    window.addEventListener("resize", resizeHandler);
    resizeHandler(); // 초기 실행

    return () => window.removeEventListener("resize", resizeHandler);
  }, [deviceType, allItems]);

  //페이지네이션 - 화살표 버튼 클릭 함수
  function pagesUpdate(prev, direction) {
    if (
      (direction === "left" && prev[0] === 1) ||
      (direction === "right" && prev[1] === totalPages)
    ) {
      return prev;
    } else if (direction === "left" && prev[1] === totalPages) {
      return [prev[0] - 5, prev[0] - 1];
    } else if (direction === "left" && prev[0] > 1) {
      return [prev[0] - 5, prev[1] - 5];
    } else if (direction === "right" && prev[1] < totalPages) {
      const nextStartPage = prev[0] + 5;
      const nextEndPage = Math.min(prev[1] + 5, totalPages); // 마지막 페이지 넘지 않게 제한
      return [nextStartPage, nextEndPage];
    }
  }

  return (
    <div className={styles.allItems}>
      <div className={styles["allItems__header"]}>
        <h3 className={styles.title}>전체 상품</h3>
        <div className={styles["allItems__controllers"]}>
          <input
            type="text"
            className={styles.search}
            placeholder="검색할 상품을 입력해주세요"
          />
          <button
            className={styles.additem}
            onClick={() => navigate("/additem")}
          >
            상품 등록하기
          </button>
          <div className={styles.dropdown}>
            <button
              className={`${
                sort === "recent" ? styles.dropRecent : styles.dropFavorite
              }`}
              onClick={() => setOpen((prev) => !prev)}
            ></button>
            <ul style={{ display: open ? "grid" : "none" }}>
              <li
                className={styles["dropdown__recent"]}
                onClick={() => setSort("recent")}
              >
                최신순
              </li>
              <li
                className={styles["dropdown__favorite"]}
                onClick={() => setSort("favorite")}
              >
                좋아요순
              </li>
            </ul>
          </div>
        </div>
      </div>

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
        <Pagination pages={pages} page={page} setPage={setPage} />
        <button
          className={styles.rightArrow}
          onClick={() => setPages((prev) => pagesUpdate(prev, "right"))}
        />
      </div>
    </div>
  );
}
