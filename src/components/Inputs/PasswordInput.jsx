// components/common/PasswordInput.jsx
import { useState } from "react";
import hideIcon from "@/assets/icons/hide_password.png";
import showIcon from "@/assets/icons/show_password.png";
import {
  inputGroup,
  passwordWrapper,
  passwordInput,
  toggleIcon,
  message,
} from "./PasswordInput.styles";

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
    <div css={inputGroup}>
      <label htmlFor={id}>{label}</label>
      <div css={passwordWrapper}>
        <input
          id={id}
          css={passwordInput}
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
          css={toggleIcon}
          onClick={toggleVisibility}
        />
      </div>
      {errorMessage && <p css={message}>{errorMessage}</p>}
    </div>
  );
}
