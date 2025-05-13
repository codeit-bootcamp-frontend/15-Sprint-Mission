import { useEffect, useState } from "react";
import styles from "./AllItems.module.scss";

export default function Pagination({
  pages,
  page,
  setPage,
  totalPages,
  setPages,
}) {
  const [pagesArr, setPagesArr] = useState([]);
  useEffect(() => {
    const start = pages[0];
    const end = pages[1];
    const arr = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    setPagesArr(arr);
  }, [pages]);

  function pagesUpdate(prev, direction) {
    if (
      (direction === "left" && prev[0] === 1) ||
      (direction === "right" && prev[1] === totalPages)
    ) {
      return prev;
    } else if (direction === "left") {
      const newEnd = prev[0] - 1;
      const newStart = Math.max(newEnd - 4, 1);
      return [newStart, newEnd];
    } else if (direction === "right") {
      const newStart = prev[0] + 5;
      const newEnd = Math.min(newStart + 4, totalPages);
      return [newStart, newEnd];
    }
  }

  return (
    <>
      <div className={styles.pages}>
        <button
          className={styles.leftArrow}
          onClick={() => setPages((prev) => pagesUpdate(prev, "left"))}
        />
        {pagesArr.map((pageNum, index) => (
          <button
            key={index}
            onClick={() => setPage(pageNum)}
            className={`${pageNum === page ? styles.isCurrentPage : ""}`}
          >
            {pageNum}
          </button>
        ))}
        <button
          className={styles.rightArrow}
          onClick={() => setPages((prev) => pagesUpdate(prev, "right"))}
        />
      </div>
    </>
  );
}
