import ItemCard from "./ItemCard";

import "./ItemList.css";

function ItemList({ items, className }) {
  return (
    <div className={className}>
      {items?.map((item) => (
        <ItemCard key={item.id} item={item} className={className} />
      ))}
    </div>
  );
}

export default ItemList;
