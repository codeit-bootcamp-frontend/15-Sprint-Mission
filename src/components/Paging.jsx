import styles from '/src/styles/Paging.module.css';
export default function Paging({ totalPage, currentPage, setCurrentPage }) {
  const pageArr = new Array(totalPage).fill(0).map((_, i) => i + 1);

  let currentIdx = Math.floor((currentPage - 1) / 5);
  let currentPages = pageArr.slice(currentIdx * 5, currentIdx * 5 + 5);

  return (
    <div className={`${styles.Paging} ${totalPage <= 5 ? styles.hideArrow : ''}`}>
      <button className={styles.arrow} onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}>
        <PagingIconArrow reverse />
      </button>
      {currentPages.map((page) => (
        <button key={page} className={currentPage === page ? styles.active : ''} onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
      <button className={styles.arrow} onClick={() => currentPage < totalPage && setCurrentPage(currentPage + 1)}>
        <PagingIconArrow />
      </button>
    </div>
  );
}

function PagingIconArrow({ reverse = false }) {
  return (
    <svg
      className={`${styles.arrow} ${reverse ? styles.reverse : ''}`}
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'>
      <path
        d='M6 4.66602L9.5 8.16602L6 11.666'
        stroke='#9CA3AF'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
