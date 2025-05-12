import { useEffect, useState } from 'react';
import { useToast } from '@/contexts';
import { CommentItem } from '@/components/Comment';
import { safeFetch } from '@/utils/api';
import { getCommentErrorMessage } from '@/utils/errorMessage';
import { baseUrl, ENDPOINTS } from '@/constants/urls';
import noCommentsImg from '@/assets/images/no_inquiries.svg';
import commonStyles from '@/styles/helpers/commonHelpers.module.scss';
import styles from './CommentList.module.scss';

const CommentList = ({ productId, refreshKey }) => {
  const { showToast } = useToast();
  const [comments, setComments] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);

  useEffect(() => {
    fetchComments();
  }, [productId, refreshKey]);

  const fetchComments = async (cursor) => {
    const cursorQuery = cursor ? `&cursor=${cursor}` : '';

    try {
      const data = await safeFetch({
        url: `${baseUrl}${ENDPOINTS.PRODUCTS}/${productId}/comments?limit=10${cursorQuery}`,
        options: { method: 'GET' },
      });

      if (cursor) {
        setComments((prev) => [...prev, ...data.list]);
      } else {
        setComments(data.list);
      }

      setNextCursor(data.nextCursor ?? null);
    } catch (error) {
      showToast(getCommentErrorMessage(error.status), 'error');
    }
  };

  return (
    <div className={styles.commentContainer}>
      {comments.length === 0 ? (
        <div className={styles.emptyCommentList}>
          <img src={noCommentsImg} alt="No comments" />
          <p className={styles.noCommentText}>아직 문의가 없어요</p>
        </div>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className={styles.commentList}>
            <CommentItem comment={comment} onUpdated={fetchComments} />
            <div
              className={`${commonStyles.horizontalLine} ${styles.addMargin}`}
            />
          </div>
        ))
      )}

      {/* 페이징 */}
      {/* {nextCursor && (
        <button
          className={styles.loadMoreButton}
          onClick={() => fetchComments(nextCursor)}
        >
          더보기
        </button>
      )} */}
    </div>
  );
};

export default CommentList;
