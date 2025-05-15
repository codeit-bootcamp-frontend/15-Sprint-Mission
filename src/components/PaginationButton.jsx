const PaginationButton = ({ children, onClick, isCurrentPage, isActive }) => {
  const current = isCurrentPage
    ? "bg-[#2F80ED] text-secondary-100"
    : "bg-white text-secondary-500";
  const active = isActive ? "cursor-pointer" : "";

  return (
    <button
      className={`border-secondary-200 flex size-40 items-center justify-center rounded-full border text-lg font-semibold ${current} ${active}`}
      onClick={onClick}
      disabled={!isActive}
    >
      {children}
    </button>
  );
};
export default PaginationButton;
