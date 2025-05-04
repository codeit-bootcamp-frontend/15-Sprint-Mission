import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, totalCount, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={num === currentPage ? styles.active : ''}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
