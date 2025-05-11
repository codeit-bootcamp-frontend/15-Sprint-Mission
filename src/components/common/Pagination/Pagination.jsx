import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, totalCount, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const groupSize = 5;
  const currentGroup = Math.floor((currentPage - 1) / groupSize);
  const startPage = currentGroup * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <div className={styles.pagination}>
      <button
        value={currentPage - 1}
        onClick={onPageChange}
        className={`${styles.arrow} ${styles.prev}`}
        disabled={currentPage === 1}
        aria-label="Previous page"
      />

      {pageNumbers.map((page) => (
        <button
          key={page}
          value={page}
          onClick={onPageChange}
          className={`${styles.page} ${
            currentPage === page ? styles.active : ''
          }`}
          aria-label={`Go to page ${page}`}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      <button
        value={currentPage + 1}
        onClick={onPageChange}
        disabled={currentPage === totalPages}
        className={`${styles.arrow} ${styles.next}`}
        aria-label="Next page"
      />
    </div>
  );
};

export default Pagination;
