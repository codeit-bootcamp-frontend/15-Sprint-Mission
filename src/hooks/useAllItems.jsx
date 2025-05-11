import { useEffect, useState } from "react";
import { getItems } from "../api/items";

const displayConfig = {
  mobile: { itemCount: 4 },
  tablet: { itemCount: 6 },
  pc: { itemCount: 10 },
};

const useAllItems = ({ page, display, orderBy }) => {
  const [allItemList, setAllItemList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const currentDisplay = displayConfig[display];
  useEffect(() => {
    const getAllitems = async () => {
      const data = await getItems({
        page,
        pageSize: currentDisplay["itemCount"],
        orderBy,
      });
      setAllItemList(data.list);
      setTotalCount(data.totalCount);
    };
    getAllitems();
  }, [page, currentDisplay, orderBy]);
  return { allItemList, totalCount };
};
export default useAllItems;
