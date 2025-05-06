function inputField({ type, placeholder }) {
  if (type === "input") {
    return (
      <input
        className="bg-gray100 .placeholder-text-gray400 text-lg font-regular rounded-xl py-16 px-24"
        placeholder={placeholder}
      />
    );
  } else if (type === "textarea") {
    return (
      <textarea
        className="h-282 bg-gray100 .placeholder-text-gray400 text-lg font-regular rounded-xl py-16 px-24"
        placeholder={placeholder}
      ></textarea>
    );
  }
}

export default inputField;
