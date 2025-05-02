import styles from './styles/SearchInput.module.css';
import CommonButton from './CommonButton';
import { useReducer, useState } from 'react';

const SearchInput = ({placeholder, setOrderBy, setSearchKeyword}) => {
  const [isOpen, toggleOpen] = useReducer((state) => !state, false);
  const [selectedSort, setSelectedSort] = useState('최신순');
  const [search, setSearch] = useState('');

 

  const handleOptionClick = (option, apiValue) => {
    setSelectedSort(option);
    setOrderBy(apiValue);
    toggleOpen();
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      setSearchKeyword(search);
    }
  };

  return (
    <div className={styles.searchInput}>
      <input 
        type='text' 
        placeholder={placeholder} 
        className={styles.searchInput}
        value={search}
        onChange={handleSearch}
        onKeyUp={handleSearchSubmit}
      />
      <CommonButton buttonType={{buttonType: 'button', buttonStyle: 'primary', buttonText: '상품 등록하기'}} />
      <div className={styles.searchSort}>
        <button onClick={toggleOpen}>{selectedSort}</button>
        {isOpen && (
          <ul>
            <li><button onClick={() => handleOptionClick('최신순', 'recent')}>최신순</button></li>
            <li><button onClick={() => handleOptionClick('좋아요순', 'favorite')}>좋아요순</button></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
