import { useState } from 'react';
import { useToast } from '@/contexts';
import { VerticalKebabDrop } from '@/components/common/Buttons';
import { safeFetch } from '@/utils/api';
import { relativeTime } from '@/utils/format';
import { baseUrl, ENDPOINTS } from '@/constants/urls';
import { COMMENT_ERROR_MESSAGES } from '@/constants/messages';
import defaultProfile from '@/assets/images/default_profile.svg';
import buttonStyles from '@/styles/helpers/buttonHelpers.module.scss';
import formStyles from '@/styles/helpers/formHelpers.module.scss';
import styles from './CommentItem.module.scss';

const CommentItem = ({ comment, onUpdated }) => {
  const { showToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleSelect = (value) => {
    if (value === 'edit') setIsEditing(true);
    if (value === 'delete') handleDelete();
  };

  const handleUpdate = async () => {
    const result = await safeFetch({
      url: `${baseUrl}${ENDPOINTS.COMMENTS}/${comment.id}`,
      options: {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: editedContent }),
      },
      showToast,
      uiErrorMessage: COMMENT_ERROR_MESSAGES.UPDATE_COMMENT_FAILED,
    });

    if (result) {
      setIsEditing(false);
      onUpdated(); // 부모에 갱신 요청
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm('정말 이 댓글을 삭제하시겠습니까?');
    if (!confirmed) return; //TODO: 모달로 변경

    setIsDeleting(true);
    const result = await safeFetch({
      url: `${baseUrl}${ENDPOINTS.COMMENTS}/${comment.id}`,
      options: {
        method: 'DELETE',
      },
      showToast,
      uiErrorMessage: COMMENT_ERROR_MESSAGES.DELETE_FAILED,
    });
    setIsDeleting(false);

    if (result) {
      onUpdated(); // 목록 갱신
    }
  };

  return (
    <div className={styles.commentItem}>
      <div className={styles.commentContent}>
        {isEditing ? (
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className={formStyles.textarea}
            rows={3}
          />
        ) : (
          <p>{comment.content}</p>
        )}

        <div className={styles.commentInfo}>
          <div className={styles.writerInfo}>
            <img
              src={comment.writer.image || defaultProfile}
              alt="Comment writer profile"
            />
            <div className={styles.nicknameAndDate}>
              <div className={styles.nickname}>{comment.writer.nickname}</div>
              <div className={styles.date}>
                {relativeTime(comment.updatedAt)}
              </div>
            </div>
          </div>
          {isEditing && (
            <div className={styles.edit}>
              <button
                type="button"
                className={buttonStyles.primary}
                onClick={() => {
                  setIsEditing(false);
                  setEditedContent(comment.content);
                }}
              >
                취소
              </button>
              <button
                type="button"
                className={buttonStyles.primary}
                onClick={handleUpdate}
                disabled={!editedContent.trim()}
              >
                수정 완료
              </button>
            </div>
          )}
        </div>
      </div>

      {!isEditing && <VerticalKebabDrop onSelect={handleSelect} />}
    </div>
  );
};

export default CommentItem;
