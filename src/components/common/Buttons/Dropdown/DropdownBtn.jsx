import { useDropdown } from '@/hooks';
import styles from './DropdownBtn.module.scss';

const DropdownBtn = ({
  mode,
  label = '',
  iconSrc,
  iconAlt,
  options = [],
  buttonClassName = '',
  optionListClassName = '',
  onSelect,
}) => {
  const { isOpen, toggle, close, dropdownRef } = useDropdown();
  const wrapperClass = `${styles.wrapper}  ${styles[`wrapper--${mode}`]}`;

  const textDropdown = () => (
    <button
      type="button"
      className={styles.textMode}
      onClick={toggle}
      aria-label={label}
    >
      {label && <span className={styles.label}>{label}</span>}
      <span className={styles.arrow} />
    </button>
  );

  const iconDropdown = () => (
    <button
      type="button"
      className={`${styles.iconMode} ${buttonClassName}`}
      onClick={toggle}
      aria-label="Open Dropdown"
    >
      <img src={iconSrc} alt={iconAlt} />
    </button>
  );

  return (
    <div className={wrapperClass} ref={dropdownRef}>
      {mode === 'textMode' ? textDropdown() : iconDropdown()}

      {isOpen && (
        <ul className={`${styles.optionList} ${optionListClassName}`}>
          {options.map(({ label, value }) => (
            <li key={value} className={styles.option}>
              <button
                type="button"
                onClick={() => {
                  onSelect(value);
                  close();
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownBtn;
