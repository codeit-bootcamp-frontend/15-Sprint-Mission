import styles from './styles/AuthFormItem.module.css';
import { useState } from 'react';
import eyeOff from '/images/common/ic_eye_off.svg';
import eyeOn from '/images/common/ic_eye_on.svg';

const AuthFormItem = ({
  id,
  type,
  placeholder,
  labelText,
  emptyMessage,
  formatMessage,
  value,
  onChange,
  showPasswordToggle,
  onValidStateChange,
  compareValue,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [validState, setValidState] = useState(null);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const updateValidState = (newState) => {
    setValidState(newState);
    onValidStateChange?.(id, newState);
  };

  const onFocusOutValidation = () => {
    if (id === 'email') {
      if (value === '') {
        updateValidState('emptyIssue');
      } else if (!emailRegex.test(value)) {
        updateValidState('formatIssue');
      } else {
        updateValidState('isValid');
      }
    } else if (id === 'password') {
      if (value === '') {
        updateValidState('emptyIssue');
      } else if (value.length < 8) {
        updateValidState('formatIssue');
      } else {
        updateValidState('isValid');
      }
    } else if (id === 'passwordCheck') {
      if (value === '') {
        updateValidState('emptyIssue');
      } else if (value !== compareValue) {
        updateValidState('formatIssue');
      } else {
        updateValidState('isValid');
      }
    } else {
      if (value === '') {
        updateValidState('emptyIssue');
      } else {
        updateValidState('isValid');
      }
    }
  };
  return (
    <li className={`${styles.authFormItem} ${validState ? styles[validState] : ''}`}>
      <label htmlFor={id}>{labelText}</label>
      <input
        type={showPassword ? 'text' : type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onFocusOutValidation}
      />
      {showPasswordToggle && (
        <button onClick={togglePassword} type='button' className={styles.togglePassword}>
          <img src={showPassword ? eyeOn : eyeOff} alt='비밀번호 보기' />
        </button>
      )}
      <p id='errorMessage' className={styles.errorMessage}>
        {validState === 'formatIssue' && formatMessage && formatMessage}
        {validState === 'emptyIssue' && emptyMessage && emptyMessage}
      </p>
    </li>
  );
};

export default AuthFormItem;
