function Button({ children, type, onClick, disabled }) {
  const buttonStyles = {
    additem:
      "py-8 px-24 rounded-lg bg-blue100 text-lg text-white font-semibold",
    upload:
      "w-74 h-42 rounded-lg bg-blue100 text-lg text-white font-semibold disabled:bg-gray400",
  };

  return (
    <button
      className={`${buttonStyles[type]} cursor-pointer`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
