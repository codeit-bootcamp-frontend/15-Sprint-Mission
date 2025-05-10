import styles from "./SearchBar.module.css";
import searchIcon from "../../assets/icon/search-icon.svg";

const SearchBar = ({ onSearch, keyword }) => {
  const handleInputChange = (e) => {
    const term = e.target.value;
    onSearch(term);
  };

  return (
    <label className={styles.searchBar}>
      <img src={searchIcon} alt="검색 아이콘" className={styles.icon} />
      <input
        type="text"
        className={styles.input}
        value={keyword}
        onChange={handleInputChange}
        placeholder="검색할 상품을 입력해주세요"
        maxLength={20}
      />
    </label>
  );
};

export default SearchBar;
