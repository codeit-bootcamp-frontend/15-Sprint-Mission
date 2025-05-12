import "./PageNation.css";

function PageNation({ totalPage, page, setPage }) {
  const visiblePages = 5;
  const currentBlock = Math.floor((page - 1) / visiblePages);
  let startPage = currentBlock * visiblePages + 1;
  let endPage = Math.min(startPage + visiblePages - 1, totalPage);

  // 마지막 페이지가 totalPage를 넘지 않도록 조정
  if (endPage > totalPage) {
    endPage = totalPage;
    startPage = Math.max(1, endPage - visiblePages + 1);
  }

  const pageArray = [];
  for (let i = startPage; i <= endPage; i++) {
    pageArray.push(i);
  }

  const handlePageClick = (p) => {
    if (p !== page) setPage(p);
  };

  return (
    <div className="pagination">
      <button
        onClick={() => page > 1 && setPage(page - 1)}
        className="page-button"
        disabled={page === 1}
      >
        &lt;
      </button>

      {pageArray.map((p) => (
        <button
          key={p}
          onClick={() => handlePageClick(p)}
          className={`page-button ${p === page ? "active" : ""}`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => page < totalPage && setPage(page + 1)}
        className="page-button"
        disabled={page === totalPage}
      >
        &gt;
      </button>
    </div>
  );
}

export default PageNation;
