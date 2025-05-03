import arrowLeft from "../assets/icons/arrow_left.svg";
import arrowRight from "../assets/icons/arrow_right.svg";

function Pagenation({ totalPages, currentPage, onPageChange }) {
  const movePage = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  const range = 5;
  const currentBlock = Math.ceil(currentPage / range);
  let startPage = (currentBlock - 1) * range + 1;
  let endPage = Math.min(startPage + range - 1, totalPages);

  return (
    <ul className="flex justify-center items-center gap-4 text-lg text-gray500 font-semibold">
      <div className="flex justify-center items-center border border-gray200 rounded-full size-40">
        <img
          className="size-16 cursor-pointer"
          src={arrowLeft}
          onClick={() => movePage(currentPage - 1)}
        />
      </div>
      {[...Array(endPage - startPage + 1)].map((value, index) => {
        const page = startPage + index;
        return (
          <li
            key={index}
            className={`${page === currentPage ? "bg-[#2f80ed] text-gray100" : ""} flex justify-center items-center border border-gray200 rounded-full size-40 cursor-pointer`}
            onClick={() => movePage(page)}
          >
            {page}
          </li>
        );
      })}
      <div className="flex justify-center items-center border border-gray200 rounded-full size-40">
        <img
          className="size-16 cursor-pointer"
          src={arrowRight}
          onClick={() => movePage(currentPage + 1)}
        />
      </div>
    </ul>
  );
}

export default Pagenation;
