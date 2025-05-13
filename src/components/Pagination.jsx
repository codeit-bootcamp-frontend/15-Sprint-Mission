import "./Pagination.css";

/**
 * 페이징 처리를 하는 컴포넌트입니다.
 * 현재 페이지를 기준으로 그룹화 시켜 한 그룹당 5개의 페이지를 보여줍니다.
 * 선택된 페이지를 클릭 시 페이지 번호를 상위 컴포넌트로 전달합니다.
 * 파라미터 (currentPage: 현재 페이지 / totalPage: 전체 페이지 수 / onPageChange: 페이지 클릭 시 실행하는 함수)
 */
const Pagination = ({ currentPage, totalPage, onPageChange }) => {
  const pageGroupSize = 5;
  const currentGroup = Math.floor((currentPage - 1) / pageGroupSize);
  const startPage = currentGroup * pageGroupSize + 1;
  const endPage = Math.min(startPage + pageGroupSize - 1, totalPage);

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(Math.max(1, startPage - pageGroupSize))} className="pagination__button">
        &lt;
      </button>
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
        <button
          key={startPage + index}
          onClick={() => onPageChange(startPage + index)}
          className={`pagination__button ${currentPage === startPage + index ? "active" : ""}`}
        >
          {startPage + index}
        </button>
      ))}
      {endPage < totalPage && (
        <button onClick={() => onPageChange(endPage + 1)} className="pagination__button">
          &gt;
        </button>
      )}
    </div>
  );
};

export default Pagination;
