import { useEffect } from "react";
import styles from "./AllItems.module.scss";

export default function Pagination({ pages, page, setPage, setLength }) {
  const start = pages[0];
  const end = pages[1];
  const arr = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  useEffect(() => {
    setLength(arr.length);
  }, [pages]);

  return arr.map((pageNum) => (
    <button
      onClick={() => setPage(pageNum)}
      className={`${pageNum === page ? styles.isCurrentPage : ""}`}
    >
      {pageNum}
    </button>
  ));
}
