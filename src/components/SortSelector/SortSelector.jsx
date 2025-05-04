import { useState, useRef, useEffect } from "react";
import arrowDownIcon from "../../assets/icon/arrow-down-icon.svg";
import styles from "./SortSelector.module.css";

const SortSelector = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("최신순");
  const dropdownRef = useRef(null);

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
    onChange(value);
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
    <div ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.dropdownButton}
      >
        {selected}
        <img src={arrowDownIcon} alt="다운 버튼" className={styles.downIcon} />
      </button>
      {isOpen && (
        <ul className={styles.dropdownList}>
          <li onClick={() => handleSelect("최신순")} className={styles.recent}>
            최신순
          </li>
          <li
            onClick={() => handleSelect("좋아요순")}
            className={styles.favorite}
          >
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortSelector;
