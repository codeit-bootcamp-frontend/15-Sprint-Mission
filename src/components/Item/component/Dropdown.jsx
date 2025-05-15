import { useState, useRef, useEffect } from "react";
import arrow_down from "/arrow_down.svg";
import mobile_sort from "/ic_sort.svg";
import "./Dropdown.css";

const options = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

export default function Dropdown({ sort, setSort }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (value) => {
    setSort(value);
    setIsOpen(false);
  };

  const selectedLabel = options.find((opt) => opt.value === sort)?.label;

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="dropdown-label">{selectedLabel}</span>{" "}
        <img src={arrow_down} className="arrow-icon" />
        <img src={mobile_sort} className="dropdown-mobile-icon" />
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.value} className="dropdown-item">
              <button
                type="button"
                value={option.value}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
