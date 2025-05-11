import { useEffect, useState } from "react";
import { getItems } from "../api/items";

const displayConfig = {
  mobile: { itemCount: 4 },
  tablet: { itemCount: 6 },
  pc: { itemCount: 10 },
};

const useAllItems = ({ page, display, orderBy }) => {
  const [allItems, setAllItems] = useState([]);
  const currentDisplay = displayConfig[display];
  useEffect(() => {
    const getAllitems = async () => {
      const data = await getItems({
        page,
        pageSize: currentDisplay["itemCount"],
        orderBy,
      });
      setAllItems(data.list);
    };
    getAllitems();
  }, [page, currentDisplay, orderBy]);
  return allItems;
};
export default useAllItems;
