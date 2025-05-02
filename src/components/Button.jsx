function Button({ children, onClick }) {
  return (
    <button
      className="py-8 px-24 bg-blue100 text-white text-lg font-semibold rounded-lg cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
