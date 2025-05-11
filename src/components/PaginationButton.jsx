const PaginationButton = ({ children }) => {
  return (
    <button className="text-secondary-500 border-secondary-200 flex size-40 items-center justify-center rounded-full border bg-white text-lg font-semibold">
      {children}
    </button>
  );
};
export default PaginationButton;
