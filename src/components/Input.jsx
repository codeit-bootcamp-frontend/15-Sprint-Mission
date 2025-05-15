const Input = ({ placeholder, className, value, onChange }) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      className={`font-regular focus:outline-primary-100 text-secondary-800 placeholder:text-secondary-400 bg-secondary-100 rounded-[12px] px-24 py-15 text-lg ${className}`}
      onChange={onChange}
    />
  );
};
export default Input;
