import { useState, useEffect } from "react";
import arrow_left from "../../../../assets/images/arrow_left.svg";
import arrow_right from "../../../../assets/images/arrow_right.svg";
import "./Pagination.css";

const Pagination = ({ currentPage, setCurrentPage, totalCount, pageSize }) => {
  const [groupStart, setGroupStart] = useState(1); // 페이지를 5개씩 보여줄 때, 가장 첫 페이지 번호
  const totalPages = Math.ceil(totalCount / pageSize);
  const pageNumArr = new Array(totalPages).fill(0).map((_, index) => index + 1);
  const currentGroup = pageNumArr.slice(groupStart - 1, groupStart + 4);

  // 정렬 변경시 1페이지로 돌아가지 않는 경우 대비
  useEffect(() => {
    const newGroupStart = Math.floor((currentPage - 1) / 5) * 5 + 1;
    setGroupStart(newGroupStart);
  }, [currentPage]);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const goToPrevGroup = () => {
    if (groupStart === 1) return;
    const start = groupStart - 5;
    setCurrentPage(start);
    setGroupStart(start);
  };

  const goToNextGroup = () => {
    if (groupStart + 5 > totalPages) return;
    const start = groupStart + 5;
    setCurrentPage(start);
    setGroupStart(start);
  };

  return (
    <>
      <div className="Pagination">
        <button disabled={currentPage <= 5} onClick={goToPrevGroup}>
          <img src={arrow_left} alt="이전 5페이지" />
        </button>
        {currentGroup.map((num) => (
          <button
            key={num}
            className={num === currentPage ? "active" : ""}
            onClick={() => changePage(num)}
          >
            {num}
          </button>
        ))}
        <button
          disabled={currentPage >= totalPages - 4}
          onClick={goToNextGroup}
        >
          <img src={arrow_right} alt="다음 5페이지 " />
        </button>
      </div>
    </>
  );
};

export default Pagination;
