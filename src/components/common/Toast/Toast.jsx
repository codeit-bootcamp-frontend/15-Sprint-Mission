import styles from './Toast.module.scss';

const Toast = ({ type, message }) => {
  return (
    <div className={`${styles.toast} ${styles[type]}`} role="status">
      <span className={`${styles.iconCircle} ${styles[type]}`}>
        {type === 'success' && '✓'}
        {type === 'error' && '!'}
        {type === 'info' && 'i'}
      </span>
      {message}
    </div>
  );
};

export default Toast;
