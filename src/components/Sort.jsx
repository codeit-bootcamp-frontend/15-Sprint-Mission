import { useState } from "react";

const Sort = ({ className, setOrderBy }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`relative ${className}`}>
      <button
        className="tablet:hidden border-secondary-200 size-42 cursor-pointer rounded-[12px] border-1 bg-white bg-[url(./assets/icons/icon-sort.png)] bg-size-[24px_24px] bg-center bg-no-repeat p-9"
        onClick={() => setIsOpen(true)}
      />
      <button
        className="tablet:block font-regular text-secondary-800 border-secondary-200 order-4 hidden w-130 cursor-pointer rounded-[12px] border-1 bg-white bg-[url(./assets/icons/icon-arrow-down.png)] bg-size-[24px_24px] bg-position-[right_20px_center] bg-no-repeat px-20 py-8 text-left text-lg"
        onClick={() => setIsOpen(true)}
      >
        최신순
      </button>
      {isOpen && (
        <>
          <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-1" />
          <div className="border-secondary-200 font-regular text-secondary-800 absolute top-46 right-0 z-2 flex h-84 w-130 flex-col rounded-[12px] border-1 bg-white text-lg">
            <button
              className="border-b-secondary-200 h-full cursor-pointer border-b-1"
              onClick={() => setOrderBy("recent")}
            >
              최신순
            </button>
            <button
              className="h-full cursor-pointer"
              onClick={() => setOrderBy("favorite")}
            >
              좋아요순
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Sort;
