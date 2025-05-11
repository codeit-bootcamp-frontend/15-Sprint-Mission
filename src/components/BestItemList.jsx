import ItemCard from "./ItemCard";

const displayConfig = {
  mobile: { className: "grid-cols-1", itemCount: 1 },
  tablet: { className: "grid-cols-2 gap-10", itemCount: 2 },
  pc: { className: "grid-cols-4 gap-24", itemCount: 4 },
};

const BestItemList = ({ bestItemList, display }) => {
  const currentDisplay = displayConfig[display];
  return (
    <ul className={`grid ${currentDisplay["className"]}`}>
      {bestItemList.slice(0, currentDisplay["itemCount"]).map((item) => (
        <li key={item.id}>
          <ItemCard item={item} />
        </li>
      ))}
    </ul>
  );
};
export default BestItemList;
