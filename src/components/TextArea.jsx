const TextArea = ({ placeholder, className }) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`font-regular focus:outline-primary-100 text-secondary-800 placeholder:text-secondary-400 bg-secondary-100 resize-none rounded-[12px] px-24 py-15 text-lg ${className}`}
    />
  );
};
export default TextArea;
