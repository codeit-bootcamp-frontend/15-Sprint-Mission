import LeftArrow from "../img/left.svg";
import RightArrow from "../img/right.svg";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageGroupSize = 5;
  const currentGroup = Math.floor((currentPage - 1) / pageGroupSize);
  const startPage = currentGroup * pageGroupSize + 1;
  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange?.(page);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 pt-40 pb-35">
      {/* ← 이전 그룹 */}
      <button
        onClick={() => goToPage(startPage - 1)}
        className="size-40 flex items-center justify-center rounded-full border border-gray-200 bg-white disabled:opacity-50"
        disabled={startPage === 1}
      >
        <img src={LeftArrow} alt="이전" className="size-16" />
      </button>

      {/* 페이지 번호 */}
      {Array.from({ length: endPage - startPage + 1 }).map((_, index) => {
        const page = startPage + index;
        const isActive = currentPage === page;
        return (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`size-40 p-12.5 rounded-full flex flex-col justify-center items-center ${
              isActive
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-500 outline-1 outline-offset-[-1px] outline-gray-200"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* → 다음 그룹 */}
      <button
        onClick={() => goToPage(endPage + 1)}
        className="size-40 flex items-center justify-center rounded-full border border-gray-200 bg-white disabled:opacity-50"
        disabled={endPage === totalPages}
      >
        <img src={RightArrow} alt="다음" className="size-16" />
      </button>
    </div>
  );
};

export default Pagination;
