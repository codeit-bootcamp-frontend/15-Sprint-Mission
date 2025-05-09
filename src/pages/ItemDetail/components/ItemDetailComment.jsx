import styles from '../styles/ItemDetailComment.module.css';
import { useProductComment } from '@/hooks/useProductComment';
import { relativeTime } from '@/utils/relativeTimeUtils';
import ItemDetailProfile from './ItemDetailProfile';
import { useState } from 'react';

export default function ItemDetailComment({ productId }) {
  const { productComments, loading, error } = useProductComment(productId, 3, null);
  const [openMenuId, setOpenMenuId] = useState(null);
  
  if (loading) return <div>로딩 중...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!productComments?.list?.length) return <div className={styles.noComments}>아직 댓글이 없습니다.</div>;

  const onClickMenu = (commentId) => {
    setOpenMenuId(openMenuId === commentId ? null : commentId);
  };

  return (
    <ul className={styles.itemDetailComment}>
      {productComments.list.map((comment) => (
        <li key={comment.id} className={styles.commentItem}>
          <div className={styles.commentItemDesc}>
            <p className={styles.commentContent}>{comment.content}</p>
            <CommentItemMenu 
              isOpen={openMenuId === comment.id}
              onClick={() => onClickMenu(comment.id)}
            />
          </div>
          {/* <p className={styles.commentDate}>{new Date(comment.createdAt).toLocaleDateString()}</p> */}
          <ItemDetailProfile
            profileImage={comment.writer.image}
            profileNickname={comment.writer.nickname}
            profileUpdate={relativeTime(comment.updatedAt)}
            isComment
          />
        </li>
      ))}
    </ul>
  );
}

const CommentItemMenu = ({ isOpen, onClick }) => {
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