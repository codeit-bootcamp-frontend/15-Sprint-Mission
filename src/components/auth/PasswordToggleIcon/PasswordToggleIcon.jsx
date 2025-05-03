import styles from './PasswordToggleIcon.module.scss';

const PasswordToggleIcon = ({ isVisible, onToggle }) => (
  <button
    type="button"
    className={`${styles.passwordToggleIcon} ${isVisible ? styles.eyeOpen : styles.eyeClosed}`}
    aria-label={isVisible ? '비밀번호 숨기기' : '비밀번호 보기'}
    onClick={onToggle}
  />
);

export default PasswordToggleIcon;
