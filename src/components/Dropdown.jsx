import { useState } from "react";
import DropdownImg from "../img/dropdown.svg";
import DropdownDown from "../img/dropdown-down.svg";

const Dropdown = ({ onChange }) => {
  const [selected, setSelected] = useState("latest");
  const [open, setOpen] = useState(false);

  // 모바일/테블릿 구분 (tailwind 기준, 필요시 수정)
  const isTablet = window.matchMedia("(min-width: 768px)").matches;

  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false);
    if (onChange) onChange(value);
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* 모바일 */}
      {!isTablet && (
        <img
          src={DropdownImg}
          alt="dropdown"
          onClick={() => setOpen((o) => !o)}
          className="size-42 p-9 cursor-pointer border-1 border-gray-200 rounded-xl"
        />
      )}
      {/* 테블릿 */}
      {isTablet && (
        <div
          className="gap-24 cursor-pointer flex align-center border-1 border-gray-200 rounded-xl px-20 py-12"
          onClick={() => setOpen((o) => !o)}
        >
          <span>{selected === "latest" ? "최신 순" : "좋아요 순"}</span>
          <img src={DropdownDown} alt="dropdown" className="size-24" />
        </div>
      )}
      {/* 드롭다운 메뉴 */}
      {open && (
        <div
          className="absolute w-130 h-84 border-gray-200 rounded-xl"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: 4,
            zIndex: 10,
            minWidth: 100,
          }}
        >
          <div
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              background: selected === "latest" ? "#f0f0f0" : "#fff",
            }}
            onClick={() => handleSelect("latest")}
          >
            최신 순
          </div>
          <div
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              background: selected === "likes" ? "#f0f0f0" : "#fff",
            }}
            onClick={() => handleSelect("likes")}
          >
            좋아요 순
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
