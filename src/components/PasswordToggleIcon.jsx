import eyeClosed from '@/assets/images/close_eye.svg';
import eyeOpen from '@/assets/images/open_eye.svg';

function PasswordToggleIcon({ isVisible, onToggle }) {
  return (
    <img
      src={isVisible ? eyeOpen : eyeClosed}
      alt={isVisible ? '비밀번호 숨기기' : '비밀번호 보기'}
      onClick={onToggle}
    />
  );
}

export default PasswordToggleIcon;
