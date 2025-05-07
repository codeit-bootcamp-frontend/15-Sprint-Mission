/** @jsxImportSource @emotion/react */
import { inputGroup, authInput, message } from "./AuthInput.styles";

export function AuthInput({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
}) {
  return (
    <div css={inputGroup}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        css={authInput}
        type={type}
        name={id}
        autoComplete="username"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {errorMessage && <p css={message}>{errorMessage}</p>}
    </div>
  );
}
