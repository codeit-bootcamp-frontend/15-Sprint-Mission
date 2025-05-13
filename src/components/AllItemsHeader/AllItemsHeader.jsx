import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./AllItemsHeader.module.scss";

export default function AllItemsHeader({ sort, setSort, setPage }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  //정렬 방식이 바뀌면, 1번 페이지로 돌아감
  function sortClick(sortIn) {
    if (sortIn === "recent" && sort !== "recent") {
      setSort("recent");
      setPage(1);
    } else if (sortIn === "favorite" && sort !== "favorite") {
      setSort("favorite");
      setPage(1);
    }
  }
  return (
    <>
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
                onClick={() => sortClick("recent")}
              >
                최신순
              </li>
              <li
                className={styles["dropdown__favorite"]}
                onClick={() => sortClick("favorite")}
              >
                좋아요순
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
