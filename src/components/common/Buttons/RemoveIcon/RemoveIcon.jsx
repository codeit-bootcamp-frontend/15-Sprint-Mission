import styles from './RemoveIcon.module.scss';

const RemoveIcon = ({ onClick, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.removeIcon} ${styles[className] || ''}`}
      aria-label="삭제"
    />
  );
};

export default RemoveIcon;
