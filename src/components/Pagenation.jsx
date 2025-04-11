import styles from '/src/styles/Pagenation.module.css';
import { useState } from 'react';
const Pagenation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [pageRange, setPageRange] = useState(5);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(5);
  return (
    <div className={styles.pagenation}>
      <button className={styles.arrow}>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path
            d='M9.5 4.66602L6 8.16602L9.5 11.666'
            stroke='#9CA3AF'
            strokeWidth='1.8'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      {Array.from({ length: pageRange }, (_, i) => startPage + i).map((page) => (
        <button key={page} className={currentPage === page ? styles.active : ''} onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
      <button className={styles.arrow}>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path
            d='M6 4.66602L9.5 8.16602L6 11.666'
            stroke='#9CA3AF'
            strokeWidth='1.8'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagenation;
