const Search = ({ className }) => {
  return (
    <input
      placeholder="검색할 상품을 입력해주세요"
      className={`font-regular bg-secondary-100 rounded-[12px] bg-[url(./assets/icons/icon-search.png)] bg-size-[24px_24px] bg-position-[16px] bg-no-repeat py-9 pr-20 pl-44 text-lg ${className}`}
    />
  );
};
export default Search;
