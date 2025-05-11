import Input from "./Input";

const Search = ({ className }) => {
  return (
    <Input
      placeholder="검색할 상품을 입력해주세요"
      className={`h-42 bg-[url(./assets/icons/icon-search.png)] bg-size-[24px_24px] bg-position-[16px] bg-no-repeat pl-44 ${className}`}
    />
  );
};
export default Search;
