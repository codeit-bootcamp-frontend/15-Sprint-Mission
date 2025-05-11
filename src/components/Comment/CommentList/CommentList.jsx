import { useEffect, useState } from 'react';
import { useToast } from '@/components/common';
import { VerticalKebabDrop } from '@/components/common/Buttons';
import { safeFetch } from '@/utils/api';
import { relativeTime } from '@/utils/format';
import { baseUrl, ENDPOINTS } from '@/constants/urls';
import { PRODUCT_ERROR_MESSAGES } from '@/constants/messages';
import defaultProfile from '@/assets/images/default_profile.svg';
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
    const data = await safeFetch({
      url: `${baseUrl}${ENDPOINTS.PRODUCTS}/${productId}/comments?limit=10${cursorQuery}`,
      options: { method: 'GET' },
      showToast,
      uiErrorMessage: PRODUCT_ERROR_MESSAGES.FETCH_COMMENTS_FAILED,
    });

    console.log('댓글 목록', data);

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
    <div className={styles.commentContainer}>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.commentList}>
          <div className={styles.comment}>
            <div className={styles.commentContent}>
              <p>{comment.content}</p>
              <div className={styles.writerInfo}>
                <img
                  src={comment.writer.image || defaultProfile}
                  alt="Comment writer profile image"
                />
                <div className={styles.nicknameAndDate}>
                  <div className={styles.nickname}>
                    {comment.writer.nickname}
                  </div>
                  <div className={styles.date}>
                    {relativeTime(comment.updatedAt)}
                  </div>
                </div>
              </div>
            </div>

            <VerticalKebabDrop />
          </div>
          <div
            className={`${commonStyles.horizontalLine} ${styles.addMargin}`}
          />
        </div>
      ))}
      {/* 
      //TODO: Pagination 으로 구현 예정
      {nextCursor && (
        <button className={styles.loadMoreButton} onClick={handleLoadMore}>
          더보기
        </button>
      )} 
       */}
    </div>
  );
};

export default CommentList;
