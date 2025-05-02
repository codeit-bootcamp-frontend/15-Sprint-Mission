function Button({ children }) {
  return (
    <button className="py-8 px-24 bg-blue100 text-white text-lg font-semibold rounded-lg cursor-pointer">
      {children}
    </button>
  );
}

export default Button;
