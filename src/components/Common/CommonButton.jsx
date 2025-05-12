import styles from './styles/CommonButton.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

const CommonButton = ({buttonType, path="", disabled=false}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const isItems = currentPath === "/items" ? styles.isItems : "";
  return (
    <button
      type={buttonType.buttonType}
      className={`${styles.commonButton} ${styles[buttonType.buttonStyle]} ${isItems}`}
      onClick={() => path && navigate(path)}
      disabled={disabled}
    >
      {buttonType.buttonText}
    </button>
  );
};

export default CommonButton;
