const TextArea = ({ placeholder, className, value, onChange }) => {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      className={`font-regular focus:outline-primary-100 text-secondary-800 placeholder:text-secondary-400 bg-secondary-100 resize-none rounded-[12px] px-24 py-15 text-lg ${className}`}
      onChange={onChange}
    />
  );
};
export default TextArea;
