import styles from './styles/Paging.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
export default function Paging({ totalPage, currentPage, setCurrentPage }) {
  const pageArr = new Array(totalPage).fill(0).map((_, i) => i + 1);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    searchParams.set('page', page);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  let currentIdx = Math.floor((currentPage - 1) / 5);
  let currentPages = pageArr.slice(currentIdx * 5, currentIdx * 5 + 5);

  return (
    <div className={`${styles.Paging} ${totalPage <= 5 ? styles.hideArrow : ''}`}>
      <button 
        className={`${styles.arrow} ${currentPage === 1 ? styles.disabled : ''}`} 
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <PagingIconArrow reverse />
      </button>
      {currentPages.map((page) => (
        <button key={page} className={currentPage === page ? styles.active : ''} onClick={() => handlePageChange(page)}>
          {page}
        </button>
      ))}
      <button 
        className={`${styles.arrow} ${currentPage === totalPage ? styles.disabled : ''}`} 
        onClick={() => currentPage < totalPage && handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
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
