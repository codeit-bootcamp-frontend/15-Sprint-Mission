import { useState, useRef, useEffect } from "react";
import kebabIcon from "/ic_kebab.svg";
import styles from "./styles/KebabMenu.module.css";

export default function KebabMenu({ onEdit, onDelete }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.kebabMenu} ref={menuRef}>
      <button
        onClick={toggleMenu}
        style={{ background: "none", border: "none" }}
      >
        <img src={kebabIcon} alt="옵션 메뉴 열기" />
      </button>

      {open && (
        <div className={styles.menu}>
          <button onClick={onEdit} className={styles.btn}>
            수정하기
          </button>
          <button onClick={onDelete} className={styles.btn}>
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
}
