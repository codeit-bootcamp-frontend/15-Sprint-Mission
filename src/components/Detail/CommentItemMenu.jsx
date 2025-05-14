import styles from './styles/CommentItemMenu.module.css';

export default function CommentItemMenu({ isOpen, onClick }) {
  return (
    <div className={styles.commentItemMenu}>
      <button type='button' onClick={onClick}>
        <img src='/images/common/ic_kebab.svg' alt='메뉴 열기' />
      </button>
      {isOpen && (
        <ul>
          <li>
            <button type='button'>수정하기</button>
          </li>
          <li>
            <button type='button'>삭제하기</button>
          </li>
        </ul>
      )}
    </div>
  );
};
