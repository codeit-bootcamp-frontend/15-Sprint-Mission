import styles from './styles/CommonButton.module.css';
import { useNavigate } from 'react-router-dom';

const CommonButton = ({buttonType}) => {
  const navigate = useNavigate();
  return <button type={buttonType.buttonType} className={`${styles.commonButton} ${styles[buttonType.buttonStyle]}`}>{buttonType.buttonText}</button>;
};

export default CommonButton;


