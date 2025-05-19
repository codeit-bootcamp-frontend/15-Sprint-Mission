import searchIcon from "../img/search.svg";

function SearchInput({ value, onChange }) {
  return (
    <div className="relative px-16 py-9 bg-secondary-100 rounded-xl text-secondary-400 text-lg">
      <img
        src={searchIcon}
        alt="돋보기그림"
        className="size-24 absolute text-secondary-400 "
      />
      <input
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        value={value}
        onChange={onChange}
        className="focus:outline-none pl-28 "
      />
    </div>
  );
}

export default SearchInput;
