import { useState, useRef, useEffect } from 'react';
import styles from './SortSelect.module.scss';

const SortSelect = ({ value, onChange, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const selectedOption = options.find((opt) => opt.value === value);

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
      <button
        className={styles.select}
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
      >
        {selectedOption?.label}
        <span className={styles.arrow} />
      </button>
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
