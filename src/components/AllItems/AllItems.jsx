import styles from "./AllItems.module.scss";
import { useEffect, useState } from "react";
import getItems from "../../API/getItems";
import Item from "../Item/Item";
import { useNavigate } from "react-router";

export default function AllItems() {
  const [allItems, setAllItems] = useState([]);
  const [sort, setSort] = useState("recent");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchItems() {
      try {
        const items = await getItems(1, 10, sort);
        setAllItems(items.list);
      } catch (error) {
        console.error("전체 아이템 불러오기 실패:", error);
      }
    }
    fetchItems();
  }, []);

  return (
    <div className={styles.bestItems}>
      <div className={styles["allItems__header"]}>
        <h3 className={styles.title}>전체 상품</h3>
        <div className={styles["allItems__controllers"]}>
          <input
            type="text"
            className={styles.search}
            placeholder="검색할 상품을 입력해주세요"
          ></input>
          <button
            className={styles.additem}
            onClick={() => navigate("/additem")}
          >
            상품 등록하기
          </button>
          <div className={styles.dropdown}>
            <button>{sort === "recent" ? "최신순" : "좋아요순"}</button>
            <ul>
              <li className={styles["dropdown__recent"]}>최신순</li>
              <li className={styles["dropdown__favorite"]}>좋아요순</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.items}>
        {allItems.map((item) => (
          <Item item={item} listType="all" key={item.id} />
        ))}
      </div>
    </div>
  );
}
