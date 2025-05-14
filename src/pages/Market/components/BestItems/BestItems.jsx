import { useState, useEffect } from "react";
import { getProducts } from "../../../../api/getProducts";
import "./BestItems.css";
import Item from "../Item/Item";

const BestItems = ({ deviceType }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  function getSkeletonCount(deviceType) {
    if (deviceType === "mobile") return 1;
    if (deviceType === "tablet") return 2;
    return 4;
  }

  const getItemSize = () => {
    if (deviceType === "mobile") return "best-one";
    if (deviceType === "tablet") return "best-two";
    return "best-four";
  };

  useEffect(() => {
    async function getBestItems() {
      let pageSize = 4;
      if (deviceType === "tablet") pageSize = 2;
      if (deviceType === "mobile") pageSize = 1;

      const data = await getProducts({
        pageSize,
        orderBy: "favorite",
      });
      setItems(data.list);
      setLoading(false);
    }

    getBestItems();
  }, [deviceType]);

  return (
    <>
      <div className="BestItems">
        <p className="title">베스트 상품</p>
        <div className={`item-list ${getItemSize()}`}>
          {loading
            ? Array.from({ length: getSkeletonCount(deviceType) }).map(
                (_, idx) => <Item key={idx} isLoading={true} />
              )
            : items.map((item) => <Item key={item.id} item={item} />)}
        </div>
      </div>
    </>
  );
};

export default BestItems;
