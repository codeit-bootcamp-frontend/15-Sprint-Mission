const Button = ({ children, className, onClick, isDisable }) => {
  const status = isDisable
    ? "bg-secondary-400 cursor-not-allowed"
    : "bg-primary-100 hover:bg-primary-200 active:bg-primary-300 cursor-pointer";
  return (
    <button
      className={`text-secondary-100 rounded-[8px] px-23 py-8 text-lg font-semibold ${status} ${className}`}
      onClick={onClick}
      disabled={isDisable}
    >
      {children}
    </button>
  );
};
export default Button;
