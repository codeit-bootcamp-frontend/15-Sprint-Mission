import styles from '/src/styles/CommonButton.module.css';

const CommonButton = ({buttonType}) => {
  return <button type={buttonType.buttonType} className={`${styles.commonButton} ${styles[buttonType.buttonStyle]}`}>{buttonType.buttonText}</button>;
};

export default CommonButton;


