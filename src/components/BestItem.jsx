import { useMemo } from "react";
import useItems from "../hooks/useItems";
import EmptyItems from "../img/emptyItems.svg";

const BestItem = () => {
  const sizeSetting = useMemo(() => [1, 2, 4], []); // ✅ useMemo로 sizes 고정
  const { items } = useItems({
    orderBy: "favorite",
    sizes: sizeSetting,
  });

  return (
    <div className="px-16 pt-87 w-376 tablet:w-744 pc:w-1200 mx-auto">
      <h1 className="text-xl font-bold text-secondary-900">베스트 상품</h1>
      <div
        className="
          grid
          grid-cols-1
          tablet:grid-cols-2
          pc:grid-cols-4
          gap-10
          mt-16
          justify-items-center
        "
      >
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-6">
            <img
              src={item.images?.[0] || EmptyItems}
              alt={item.name}
              className="size-344 pc:size-282 object-cover rounded-xl mb-10"
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

export default BestItem;
