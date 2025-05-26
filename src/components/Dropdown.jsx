import { useState } from "react";
import DropdownImg from "../img/dropdown.svg";
import DropdownDown from "../img/dropdown-down.svg";

const Dropdown = ({ onChange }) => {
  const [selected, setSelected] = useState("list");
  const [open, setOpen] = useState(false);

  // 모바일/테블릿 구분 (tailwind 기준, 필요시 수정)
  const isTablet = window.matchMedia("(min-width: 768px)").matches;

  const handleSelect = (value) => {
    const apiValue = value === "list" ? "recent" : "favorite";
    setSelected(value);
    setOpen(false);
    onChange?.(apiValue); // ✅ API에 맞게 값 변경 후 전달
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
          className="gap-24 cursor-pointer flex align-center justify-center border-1 border-gray-200 rounded-xl py-12 w-130 h-42 text-lg font-regular"
          onClick={() => setOpen((o) => !o)}
        >
          <span>{selected === "list" ? "최신 순" : "좋아요 순"}</span>
          <img src={DropdownDown} alt="dropdown" className="size-24" />
        </div>
      )}
      {/* 드롭다운 메뉴 */}
      {open && (
        <div className="absolute w-130 h-84 border-gray-200 rounded-xl right-0 top-[100%] bg-none z-10 mt-4 text-lg font-regular tablet:mt-8">
          <div
            className=" border-1 border-gray-200 bg-[#ffffff] flex items-center justify-center cursor-pointer py-8 rounded-t-2xl"
            onClick={() => handleSelect("list")}
          >
            최신 순
          </div>
          <div
            className=" border-1 border-gray-200 bg-[#ffffff] flex items-center justify-center cursor-pointer  py-8 rounded-b-xl"
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
