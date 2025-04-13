import styles from "../../styles/components/AuthInput.module.scss";

function AuthInput({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
}) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={styles.authInput}
        type={type}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <p className={styles.message}>{errorMessage}</p>
    </div>
  );
}

export default AuthInput;
