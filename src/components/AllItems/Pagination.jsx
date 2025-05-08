import styles from "./AllItems.module.scss";

export default function Pagination({ pages, page, setPage }) {
  const start = pages[0];
  const end = pages[1];
  const arr = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return arr.map((pageNum) => (
    <button
      onClick={() => setPage(pageNum)}
      className={`${pageNum === page ? styles.isCurrentPage : ""}`}
    >
      {pageNum}
    </button>
  ));
}
