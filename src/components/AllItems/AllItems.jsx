import styles from "./AllItems.module.scss";
import { useEffect, useState } from "react";
import getItems from "../../API/getItems";
import Item from "../Item/Item";
import { useNavigate } from "react-router";
import Pagination from "./Pagination";

export default function AllItems() {
  const [allItems, setAllItems] = useState([]);
  const [sort, setSort] = useState("recent");
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1); //fetch parameter
  const [pages, setPages] = useState([1, 5]);
  const [itemTotalCount, setItemTotalCount] = useState();
  const navigate = useNavigate();
  const totalPages = Math.ceil(itemTotalCount / 10);

  useEffect(() => {
    async function fetchItems() {
      try {
        const items = await getItems(page, 10, sort);
        setAllItems(items.list);
        setItemTotalCount(items.totalCount);
      } catch (error) {
        console.error("전체 아이템 불러오기 실패:", error);
      }
    }
    fetchItems();
  }, [sort, page]);

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

  console.log(itemTotalCount);

  return (
    <div className={styles.bestItems}>
      <div className={styles["allItems__header"]}>
        <h3 className={styles.title}>전체 상품</h3>
        <div className={styles["allItems__controllers"]}>
          <input
            type="text"
            className={styles.search}
            placeholder="검색할 상품을 입력해주세요"
            value={searchText}
          />
          <button
            className={styles.additem}
            onClick={() => navigate("/additem")}
          >
            상품 등록하기
          </button>
          <div className={styles.dropdown}>
            <button onClick={() => setOpen((prev) => !prev)}>
              {sort === "recent" ? "최신순" : "좋아요순"}
            </button>
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
        {allItems.map((item) => (
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
