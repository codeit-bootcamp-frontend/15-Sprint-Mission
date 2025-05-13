import { useState } from "react";
import "./SearchInput.css";

/**
 *  사용자가 입력한 검색어를 상위 컴포넌트로 전달하는 컴포넌트
 *  onChange 이벤트 방식으로 실시간으로 동작
 */
const SearchInput = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(keyword.trim());
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);

    onSearch(value.trim()); // 공백 제거 후 상위 컴포넌트로 전달
  };

  return (
    <input
      type="text"
      value={keyword}
      placeholder="🔎  검색할 상품을 입력해주세요."
      onChange={handleChange}
      className="search__input"
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchInput;
