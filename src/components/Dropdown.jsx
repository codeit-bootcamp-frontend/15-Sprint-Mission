import { useState, useRef, useEffect, useCallback } from "react";
import sort from "../assets/icons/sort.svg";

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0].label);
  const [isMobile, setIsMobile] = useState();
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
  const handleResize = useCallback(() => {
    window.innerWidth > 768 ? setIsMobile(false) : setIsMobile(true);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div tabIndex={-1} onBlur={handleBlur}>
      <div
        className={`${isMobile ? "" : "w-130"} border border-gray200 rounded-xl p-9 cursor-pointer`}
        onClick={handleDropdown}
        ref={dropdownRef}
      >
        {isMobile ? (
          <img className="size-24 relative" src={sort} />
        ) : (
          <div className="text-center">{selected}</div>
        )}
      </div>

      {isOpen && (
        <ul className="w-130 text-center border border-gray200 absolute right-0 top-132 rounded-xl cursor-pointer">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-15 py-6 hover:bg-gray100 first:rounded-t-lg first:pt-10 last:rounded-b-lg last:pb-10"
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
