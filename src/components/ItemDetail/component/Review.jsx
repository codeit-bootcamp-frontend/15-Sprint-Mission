import { useState } from "react";

import KebabMenu from "./KebabMenu";
import styles from "./styles/Review.module.css";

export function getTimeAgo(dateString) {
  const createdDate = new Date(dateString);
  const now = new Date();

  const diffMs = now - createdDate;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffDay >= 1) {
    return `${diffDay}일 전`;
  } else if (diffHour >= 1) {
    return `${diffHour}시간 전`;
  } else if (diffMin >= 1) {
    return `${diffMin}분 전`;
  } else {
    return `방금 전`;
  }
}

export default function Review({ comment }) {
  const name = comment.writer.nickname;
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditContent(comment.content);
  };

  return (
    <div className={styles.review}>
      <div className={styles.top}>
        {isEditing ? (
          <textarea
            className={styles.editInput}
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
        ) : (
          <p className={styles.content}>{comment.content}</p>
        )}
        {!isEditing && <KebabMenu onEdit={handleEdit} />}
      </div>

      <div className={styles.user}>
        <div className={styles.userLeft}>
          <img className={styles.img} src="/ic_profile.svg" alt="프로필 사진" />
          <div className={styles.userInfo}>
            <p className={styles.name}>{name}</p>
            <p className={styles.time}>{getTimeAgo(comment.createdAt)}</p>
          </div>
        </div>

        {isEditing && (
          <div className={styles.editBtn}>
            <button
              type="button"
              onClick={handleCancel}
              className={styles.cancelBtn}
            >
              취소
            </button>
            <button type="submit" className={styles.submitBtn}>
              수정 완료
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
