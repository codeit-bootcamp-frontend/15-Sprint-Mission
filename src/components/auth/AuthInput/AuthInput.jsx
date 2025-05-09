import { PasswordToggleIcon } from '@/components/auth/PasswordToggleIcon';
import styles from './AuthInput.module.scss';

const AuthInput = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  isVisible,
  onToggle,
}) => {
  const isPassword = type === 'password';

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <div className={isPassword ? styles.passwordInput : ''}>
        <input
          id={id}
          type={isPassword && isVisible ? 'text' : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder || `${label}을/를 입력해주세요`}
          className={`${styles.input} ${error ? styles.errorInput : ''}`}
        />
        {isPassword && (
          <PasswordToggleIcon isVisible={isVisible} onToggle={onToggle} />
        )}
      </div>
      <div
        className={`${styles.validationErrorMessage} ${
          error ? styles.active : ''
        }`}
      >
        {error}
      </div>
    </div>
  );
};

export default AuthInput;
