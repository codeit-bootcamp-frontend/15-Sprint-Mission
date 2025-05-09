import rightIcon from "../../assets/icon/arrow-right-icon.svg";
import leftIcon from "../../assets/icon/arrow-left-icon.svg";
import styles from "./Pagination.module.css";
import { useEffect, useState } from "react";

const Pagination = ({ currentPage, totalCount, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const groupSize = 5;
  const currentGroup = Math.ceil(currentPage / groupSize);
  const startPage = (currentGroup - 1) * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);

  if (totalPages <= 1) return null;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage === 1}
        onClick={handlePrevPage}
        className={styles.navButton}
      >
        <img src={leftIcon} alt="왼쪽 화살표" className={styles.leftIcon} />
      </button>

      {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
        const page = startPage + i;
        return (
          <button
            key={page}
            className={
              page === currentPage ? styles.activePage : styles.pageButton
            }
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}

      <button
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
        className={styles.navButton}
      >
        <img src={rightIcon} alt="오른쪽 화살표" className={styles.rightIcon} />
      </button>
    </div>
  );
};

export default Pagination;
