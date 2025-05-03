import { useState, useRef } from "react";
import sort from "../assets/icons/sort.svg";

function Dropdown({ options, isMobile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0].label);
  const dropdownRef = useRef();

  const handleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const handleOptionClick = (option) => {
    setSelected(option.label);
    setIsOpen(false);
    option.click();
  };
  const handleBlur = (e) => {
    if (!dropdownRef.current.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div tabIndex={-1} onBlur={handleBlur} className="relative">
      <div
        className={`${isMobile ? "" : "w-130"} border border-gray200 rounded-xl p-9 cursor-pointer`}
        onClick={handleDropdown}
        ref={dropdownRef}
      >
        {isMobile ? (
          <img className="size-24" src={sort} />
        ) : (
          <div className="text-center">{selected}</div>
        )}
      </div>

      {isOpen && (
        <ul className="w-130 text-center border border-gray200 rounded-xl absolute right-0 tablet:left-0 top-48 cursor-pointer">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-15 py-6 bg-white hover:bg-gray100 first:rounded-t-xl first:pt-10 last:rounded-b-xl last:pb-10"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
