// 컴포넌트화 할지 말지 고민중이라 일단 보관

import styles from './RemoveIcon.module.scss';

const RemoveIcon = ({
  onClick,
  size = 24,
  position = 'absolute',
  top = -10,
  right = -10,
  className = '',
  ariaLabel = '삭제',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${styles.removeIcon} ${className}`}
      style={{
        position,
        width: `${size}px`,
        height: `${size}px`,
        top: position === 'absolute' ? `${top}px` : undefined,
        right: position === 'absolute' ? `${right}px` : undefined,
      }}
    />
  );
};

export default RemoveIcon;
