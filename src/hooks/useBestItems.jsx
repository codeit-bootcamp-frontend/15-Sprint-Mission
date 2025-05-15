import { useEffect, useState } from "react";
import { getItems } from "./../api/items";

const useBestItems = () => {
  const [bestItemList, setBestItemList] = useState([]);
  useEffect(() => {
    const getBestItems = async () => {
      const data = await getItems({ pageSize: 4, orderBy: "favorite" });
      setBestItemList(data.list);
    };
    getBestItems();
  }, []);
  return bestItemList;
};
export default useBestItems;
