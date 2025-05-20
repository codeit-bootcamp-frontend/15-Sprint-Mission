import { useEffect, useMemo, useState } from "react";
import useItems from "../hooks/useItems";
import ItemCreateButton from "./ItemCreateButton";
import SearchInput from "./SearchInput";
import EmptyItems from "../img/emptyItems.svg";

const AllItems = () => {
  const sizeSetting = useMemo(() => [4, 6, 10], []); //useMemo로 sizes 고정
  const { items } = useItems({
    orderBy: "recent",
    sizes: sizeSetting,
  });

  const [searchText, setSearchText] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const lowerSearch = searchText.toLowerCase();
    setFilteredItems(
      items.filter((item) => item.name.toLowerCase().includes(lowerSearch))
    );
  }, [searchText, items]);

  return (
    <div className="px-16 pt-24 w-376 tablet:w-744 pc:w-1200 mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-secondary-900">전체 상품</h1>
        <ItemCreateButton />
      </div>

      <div className="flex items-center justify-between mt-8">
        <SearchInput
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div>드롭다운추가</div>
      </div>

      <div
        className="
          grid
          grid-cols-2
          grid-rows-2
          tablet:grid-cols-3
          pc:grid-cols-5
          gap-y-32 tablet:gap-y-40 
          gap-x-8 tablet:gap-x-16 pc:gap-x-24
          justify-items-center
          mt-16
        "
      >
        {filteredItems.map((item) => (
          <div key={item.id} className="flex flex-col gap-6">
            <img
              src={item.images?.[0] || EmptyItems}
              alt={item.name}
              className="size-168 tablet:size-221 object-cover rounded-xl mb-10"
            />
            <h2 className="text-md font-medium text-secondary-800">
              {item.name}
            </h2>
            <p className="text-lg font-bold text-secondary-800">
              {item.price.toLocaleString()}원
            </p>
            <p className="text-xs font-medium text-secondary-600">
              ♡ {item.favoriteCount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
