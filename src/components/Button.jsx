function Button({ children, type, onClick, disabled }) {
  const buttonStyles = {
    login: "w-128 h-48 rounded-lg bg-blue100 text-lg text-white font-semibold",
    shopping:
      "w-357 h-56 rounded-[40px] bg-blue100 text-2lg tablet:text-xl text-white font-semibold",
    additem:
      "py-8 px-24 rounded-lg bg-blue100 text-lg text-white font-semibold",
    upload:
      "w-74 h-42 rounded-lg bg-blue100 text-lg text-white font-semibold disabled:bg-gray400 disabled:cursor-not-allowed",
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
