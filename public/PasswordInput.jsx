import PasswordToggleIcon from './PasswordToggleIcon';

const PasswordInput = ({
  id,
  label,
  value,
  onChange,
  isVisible,
  onToggle,
  error,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <div className="password-input">
        <input
          id={id}
          type={isVisible ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={`${label}를 입력해주세요`}
          className={error ? 'error-input' : ''}
        />
        <PasswordToggleIcon isVisible={isVisible} onToggle={onToggle} />
      </div>
      <div className={`validation-error-message ${error ? 'active' : ''}`}>
        {error}
      </div>
    </div>
  );
};

export default PasswordInput;
