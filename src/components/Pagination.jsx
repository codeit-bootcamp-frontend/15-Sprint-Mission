import PaginationButton from "./PaginationButton";
import ArrowLeftActive from "../assets/icons/icon-arrow-left-active.png";
import ArrowLeftInactive from "../assets/icons/icon-arrow-left-inactive.png";
import ArrowRightActive from "../assets/icons/icon-arrow-right-active.png";
import ArrowRightInactive from "../assets/icons/icon-arrow-right-inactive.png";

const displayConfig = {
  mobile: { itemCount: 4 },
  tablet: { itemCount: 6 },
  pc: { itemCount: 10 },
};

const Pagination = ({ page: currentPage, setPage, totalCount, display }) => {
  const currentDisplay = displayConfig[display];
  const lastPage = Math.ceil(totalCount / currentDisplay["itemCount"]);
  const startIndex = Math.floor((currentPage - 1) / 5) * 5 + 1;
  const lastIndex = Math.min(startIndex + 4, lastPage);
  const pageList = [];
  for (let i = startIndex; i <= lastIndex; i++) {
    pageList.push(i);
  }
  return (
    <ul className="flex gap-4">
      <li>
        <PaginationButton
          onClick={() => setPage(lastIndex - 5)}
          isActive={currentPage > 5}
        >
          <img
            src={currentPage <= 5 ? ArrowLeftInactive : ArrowLeftActive}
            alt="왼쪽 화살표"
            className="size-16"
          />
        </PaginationButton>
      </li>
      {pageList.map((page) => (
        <li key={page}>
          <PaginationButton
            onClick={() => setPage(page)}
            isCurrentPage={currentPage === page}
            isActive={true}
          >
            {page}
          </PaginationButton>
        </li>
      ))}
      <li>
        <PaginationButton
          onClick={() => setPage(startIndex + 5)}
          isActive={lastIndex !== lastPage}
        >
          <img
            src={lastIndex === lastPage ? ArrowRightInactive : ArrowRightActive}
            alt="오른쪽 화살표"
            className="size-16"
          />
        </PaginationButton>
      </li>
    </ul>
  );
};
export default Pagination;
