import styles from '/src/styles/SearchInput.module.css';
import CommonButton from './CommonButton';
import { useState } from 'react';

const SearchInput = ({placeholder, buttonType = false}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('최신순');

  const handleSortClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedSort(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.searchInput}>
      <input type='text' placeholder={placeholder} className={styles.searchInput} />
      {buttonType && <CommonButton buttonType={buttonType} />}
      <div className={styles.searchSort}>
        <button onClick={handleSortClick}>{selectedSort}</button>
        {isOpen && (
          <ul>
            <li><button onClick={() => handleOptionClick('최신순')}>최신순</button></li>
            <li><button onClick={() => handleOptionClick('좋아요순')}>좋아요순</button></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
