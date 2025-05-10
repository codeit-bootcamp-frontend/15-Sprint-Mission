const Sort = () => {
  return (
    <>
      <button className="tablet:hidden border-secondary-200 size-42 cursor-pointer rounded-[12px] border-1 bg-[url(./assets/icons/icon-sort.png)] bg-size-[24px_24px] bg-center bg-no-repeat p-9" />
      <button className="tablet:block border-secondary-200 order-4 hidden w-130 cursor-pointer rounded-[12px] border-1 bg-[url(./assets/icons/icon-arrow-down.png)] bg-size-[24px_24px] bg-position-[right_20px_center] bg-no-repeat px-20 py-12 text-left">
        최신순
      </button>
    </>
  );
};
export default Sort;
