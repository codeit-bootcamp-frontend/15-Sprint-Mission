import styles from './styles/DetailComment.module.css';
import { useProductComment } from '@/hooks/useProductComment';
import { relativeTime } from '@/utils/relativeTimeUtils';
import DetailProfile from '@/components/Detail/DetailProfile';
import CommentItemMenu from '@/components/Detail/CommentItemMenu';
import { useState } from 'react';

export default function DetailComment({ productId }) {
  const { productComments, loading, error } = useProductComment(productId, 3, null);
  const [openMenuId, setOpenMenuId] = useState(null);
  
  if (loading) return <div>로딩 중...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!productComments?.list?.length) return <div className={styles.noComments}>아직 댓글이 없습니다.</div>;

  const onClickMenu = (commentId) => {
    setOpenMenuId(openMenuId === commentId ? null : commentId);
  };

  return (
    <ul className={styles.detailComment}>
      {productComments.list.map((comment) => (
        <li key={comment.id} className={styles.commentItem}>
          <div className={styles.commentItemDesc}>
            <p className={styles.commentContent}>{comment.content}</p>
            <CommentItemMenu isOpen={openMenuId === comment.id} onClick={() => onClickMenu(comment.id)} />
          </div>
          <DetailProfile
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
