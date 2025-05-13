import { useState } from "react";
import "./Dropdown.css";
import dropdown from "../assets/dropdown.png";
import mobileFilter from "../assets/mobileFilter.png";

// pc/tablet 과 mobile 버튼을 눌렀을 때, dropdown가 오픈/닫히게 하는 함수
const Dropdown = ({ value, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = options.find((opt) => opt.value === value)?.label || "";

  const isMobile = window.innerWidth <= 767;

  return (
    <div className="dropdown">
      <button className="dropdown__toggle" onClick={() => setIsOpen(!isOpen)}>
        {isMobile ? (
          <img src={mobileFilter} alt="모바일 필터" className="dropdown__arrow" />
        ) : (
          <>
            {selectedLabel}
            <img src={dropdown} alt="Dropdown" className="dropdown__arrow" />
          </>
        )}
      </button>
      {isOpen && (
        <ul className="dropdown__menu">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onSelect(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
