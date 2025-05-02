import styles from './styles/CommonButton.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

const CommonButton = ({buttonType}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
  const isItems = currentPath === "/items" ? styles.isItems : "";
  return (
    <button
      type={buttonType.buttonType}
      className={`${styles.commonButton} ${styles[buttonType.buttonStyle]} ${isItems}`}>
      {buttonType.buttonText}
    </button>
  );
};

export default CommonButton;
