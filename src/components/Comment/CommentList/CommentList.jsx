import { useEffect, useState } from 'react';
import { useToast } from '@/components/common';
import { safeFetch } from '@/utils/api';
import { baseUrl, ENDPOINTS } from '@/constants/urls';
import { PRODUCT_ERROR_MESSAGES } from '@/constants/messages';
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
    const data = await safeFetch({
      url: `${baseUrl}${ENDPOINTS.PRODUCTS}/${productId}/comments?limit=10${cursorQuery}`,
      options: { method: 'GET' },
      showToast,
      uiErrorMessage: PRODUCT_ERROR_MESSAGES.FETCH_COMMENTS_FAILED,
    });

    if (cursor) {
      setComments((prev) => [...prev, ...data.list]);
    } else {
      setComments(data.list);
    }

    setNextCursor(data.nextCursor ?? null);
  };

  const handleLoadMore = () => {
    if (nextCursor) fetchComments(nextCursor);
  };

  return (
    <div className={styles.commentList}>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.comment}>
          <p>
            <strong>{comment.nickname}</strong>
          </p>
          <p>{comment.content}</p>
          <p className={styles.commentDate}>{comment.updatedAt}</p>
        </div>
      ))}
      {nextCursor && (
        <button className={styles.loadMoreButton} onClick={handleLoadMore}>
          더보기
        </button>
      )}
    </div>
  );
};

export default CommentList;
