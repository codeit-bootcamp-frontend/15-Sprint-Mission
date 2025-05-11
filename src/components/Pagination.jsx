import PaginationButton from "./PaginationButton";
import arrowLeftActive from "../assets/icons/icon-arrow-left-active.png";
import arrowLeftInactive from "../assets/icons/icon-arrow-left-inactive.png";
import arrowRightActive from "../assets/icons/icon-arrow-right-active.png";
import arrowRightInactive from "../assets/icons/icon-arrow-right-inactive.png";

const Pagination = () => {
  const pageList = [1, 2, 3, 4, 5];
  return (
    <ul className="flex gap-4">
      <li>
        <PaginationButton>
          <img src={arrowLeftActive} alt="왼쪽 화살표" className="size-16" />
        </PaginationButton>
      </li>
      {pageList.map((page) => (
        <li key={page}>
          <PaginationButton>{page}</PaginationButton>
        </li>
      ))}
      <li>
        <PaginationButton>
          <img src={arrowRightActive} alt="오른쪽 화살표" className="size-16" />
        </PaginationButton>
      </li>
    </ul>
  );
};
export default Pagination;
