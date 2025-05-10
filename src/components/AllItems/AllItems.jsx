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
  const [itemTotalCount, setItemTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([1, 5]);
  const [deviceType, setDeviceType] = useState(getDeviceType());

  const pageSize = useMemo(() => {
    return deviceType === "desktop" ? 10 : deviceType === "tablet" ? 6 : 4;
  }, [deviceType]);

  const totalPages = useMemo(() => {
    return Math.ceil(itemTotalCount / pageSize);
  }, [itemTotalCount, pageSize]);
  useEffect(() => {
    const onResize = () => {
      const currentDevice = getDeviceType();
      if (currentDevice !== deviceType) {
        setDeviceType(currentDevice);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [deviceType]);

  useEffect(() => {
    const newStart = Math.floor((page - 1) / 5) * 5 + 1;
    const newEnd = Math.min(newStart + 4, totalPages);
    setPages([newStart, newEnd]);
  }, [deviceType, totalPages]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const items = await getItems(page, pageSize, sort);
        const newTotal = items.totalCount;
        const newTotalPages = Math.ceil(newTotal / pageSize);
        const currentDevice = getDeviceType();

        if (page > newTotalPages) {
          const lastPage = newTotalPages;
          const newStart = Math.max(lastPage - 4, 1);
          setPages([newStart, lastPage]);
          setPage(lastPage);
          return;
        }

        setAllItems(items.list);
        setItemTotalCount(newTotal);
      } catch (error) {
        console.error("전체 아이템 불러오기 실패:", error);
      }
    }

    fetchItems();
  }, [sort, pageSize, page]);

  return (
    <div className={styles.allItems}>
      <AllItemsHeader sort={sort} setSort={setSort} setPage={setPage} />

      <div className={styles.items}>
        {allItems.map((item) => (
          <Item item={item} listType="all" key={item.id} />
        ))}
      </div>

      <Pagination
        pages={pages}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        setPages={setPages}
      />
    </div>
  );
}
