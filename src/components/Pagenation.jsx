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
    <ul>
      {[...Array(endPage - startPage + 1)].map((value, index) => {
        const page = startPage + index;
        return (
          <li
            key={index}
            className="cursor-pointer"
            onClick={() => movePage(page)}
          >
            {page}
          </li>
        );
      })}
    </ul>
  );
}

export default Pagenation;
