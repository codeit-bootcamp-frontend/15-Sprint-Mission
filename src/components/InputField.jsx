function inputField({ type, label, value, onChange, onKeyDown, placeholder }) {
  if (type === "input") {
    return (
      <div className="flex flex-col justify-center gap-16">
        <div className="text-2lg font-bold">{label}</div>
        <input
          className="bg-gray100 .placeholder-text-gray400 text-lg font-regular rounded-xl py-16 px-24"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        />
      </div>
    );
  } else if (type === "textarea") {
    return (
      <div className="flex flex-col justify-center gap-16">
        <div className="text-2lg font-bold">{label}</div>
        <textarea
          className="h-282 bg-gray100 .placeholder-text-gray400 text-lg font-regular rounded-xl py-16 px-24"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  }
}

export default inputField;
