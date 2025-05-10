const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-primary-100 hover:bg-primary-200 active:bg-primary-300 text-secondary-100 cursor-pointer rounded-[8px] px-23 py-8 text-lg font-semibold ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
