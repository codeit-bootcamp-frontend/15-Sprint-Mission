import { useEffect, useMemo, useState } from "react";
import useItems from "../hooks/useItems";
import ItemCreateButton from "./ItemCreateButton";
import SearchInput from "./SearchInput";
import Dropdown from "./Dropdown";
import Pagination from "./Pagination";
import EmptyItems from "../img/emptyItems.svg";

const AllItems = () => {
  const sizeSetting = useMemo(() => [4, 6, 10], []); //useMemo로 sizes 고정
  const [page, setpage] = useState(1); //페이지 상태 관리
  const [orderBy, setOrderBy] = useState("recent"); //정렬 기준 상태 관리

  const { items, pageSize, totalCount } = useItems({
    orderBy,
    sizes: sizeSetting,
    initialPage: page,
  });

  const totalPages = Math.ceil(totalCount / pageSize); //총 페이지 수 계산

  const [searchText, setSearchText] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const lowerSearch = searchText.toLowerCase();
    setFilteredItems(
      items.filter((item) => item.name.toLowerCase().includes(lowerSearch))
    );
  }, [searchText, items]);

  return (
    <>
      <div className="px-16 pt-24 w-376 tablet:w-744 pc:w-1200 mx-auto">
        <div className="flex items-center justify-between gap-4 ">
          <div className="tablet:hidden w-full">
            <div className="flex items-center justify-between w-full">
              <h1 className="text-xl font-bold text-secondary-900">
                전체 상품
              </h1>
              <ItemCreateButton />
            </div>
            {/* 모바일에서 보여지는 부분 */}
            <div className="flex items-center justify-between w-full mt-8">
              <SearchInput
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Dropdown onChange={setOrderBy} />
            </div>
          </div>
          {/* 테블릿 이상에서 보여지는 부분 */}
          <div className="hidden tablet:flex items-center justify-between w-full">
            <h1 className="text-xl font-bold text-secondary-900">전체 상품</h1>
            <div className="flex items-center gap-12">
              <SearchInput
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <ItemCreateButton />
              <Dropdown onChange={setOrderBy} />
            </div>
          </div>
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
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        onPageChange={setpage}
      />
    </>
  );
};

export default AllItems;
