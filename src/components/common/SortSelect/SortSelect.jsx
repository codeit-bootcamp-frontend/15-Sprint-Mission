import { useState, useRef, useEffect } from 'react';
import sortIcon from '@/assets/icons/sort.svg';
import styles from './SortSelect.module.scss';

const SortSelect = ({ value, onChange, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef();

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper} ref={ref}>
      {isMobile ? (
        <button
          type="button"
          className={styles.sortIcon}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="open sort options"
        >
          <img src={sortIcon} alt="select button" />
        </button>
      ) : (
        <button
          type="button"
          className={styles.selectButton}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="open sort options"
        >
          {selectedOption?.label}
          <span className={styles.arrow} />
        </button>
      )}
      {isOpen && (
        <ul className={styles.optionList}>
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className={styles.option}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortSelect;
