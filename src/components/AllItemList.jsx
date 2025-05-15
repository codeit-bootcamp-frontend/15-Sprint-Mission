import ItemCard from "./ItemCard";

const AllItemList = ({ allItemList }) => {
  return (
    <ul className="pc:grid-cols-5 tablet:grid-cols-3 grid grid-cols-2 gap-x-8 gap-y-32">
      {allItemList.map((item) => (
        <li key={item.id}>
          <ItemCard item={item} />
        </li>
      ))}
    </ul>
  );
};
export default AllItemList;
