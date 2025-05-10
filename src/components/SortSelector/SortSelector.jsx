import { useState, useRef, useEffect } from "react";
import arrowDownIcon from "../../assets/icon/arrow-down-icon.svg";
import sortIcon from "../../assets/icon/sort-icon.svg";
import styles from "./SortSelector.module.css";

const sortMap = {
  recent: "최신순",
  favorite: "좋아요순",
};

const SortSelector = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (e) => {
    const selectedKey = e.target.value;
    setIsOpen(false);
    onChange(selectedKey);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div ref={dropdownRef} className={styles.sortWrapper}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.dropdownButton}
      >
        <span className={styles.selectedText}>{sortMap[value]}</span>
        <img src={arrowDownIcon} alt="다운 버튼" className={styles.downIcon} />
        <img src={sortIcon} alt="모바일 정렬" className={styles.sortIcon} />
      </button>

      {isOpen && (
        <ul className={styles.dropdownList}>
          <li className={styles.recent}>
            <button type="button" value={"recent"} onClick={handleSelect}>
              최신순
            </button>
          </li>
          <li className={styles.favorite}>
            <button type="button" value={"favorite"} onClick={handleSelect}>
              좋아요순
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortSelector;
