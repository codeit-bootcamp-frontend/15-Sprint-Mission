import styles from "./BestItem.module.scss";
import { useEffect, useState } from "react";
import getItems from "../../API/getItems";
import Item from "../Item/Item";
import { useNavigate } from "react-router";

export default function BestItems() {
  const [bestItems, setBestItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchItems() {
      try {
        const items = await getItems(1, 4, "favorite");
        setBestItems(items.list);
      } catch (error) {
        console.error("인기 아이템 불러오기 실패:", error);
      }
    }

    fetchItems();
  }, []);

  return (
    <div className={styles.bestItems}>
      <h3 className={styles.title}>베스트 상품</h3>
      <div className={styles.items}>
        {bestItems.map((item) => (
          <Item
            item={item}
            listType="best"
            key={item.id}
            onClick={() => navigate(`/items/${item.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
