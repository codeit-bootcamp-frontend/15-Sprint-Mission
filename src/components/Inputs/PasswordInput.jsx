// components/common/PasswordInput.jsx
import { useState } from "react";
import styles from "./PasswordInput.module.scss";
import hideIcon from "@/assets/icons/hide_password.png";
import showIcon from "@/assets/icons/show_password.png";

export function PasswordInput({
  label,
  id,
  placeholder,
  value,
  onChange,
  errorMessage,
}) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.passwordWrapper}>
        <input
          id={id}
          className={styles.passwordInput}
          type={isVisible ? "text" : "password"}
          name={id}
          autoComplete="current-password"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <img
          src={isVisible ? showIcon : hideIcon}
          alt="비밀번호 보기 토글"
          className={styles.toggleIcon}
          onClick={toggleVisibility}
        />
      </div>
      {errorMessage && <p className={styles.message}>{errorMessage}</p>}
    </div>
  );
}
