import timeSince from "../../utils/timeSince";
import styles from "./Comment.module.scss";
export default function Comment({ comment }) {
  const { content, updatedAt, writer } = comment;
  const passedTime = timeSince(updatedAt);

  //   id,nickname,image
  return (
    <>
      <div className={styles["comment-content"]}>
        <p>{content}</p>
        <button>옵션</button>
      </div>
      <div className={styles["comment-profile"]}>
        <img src={writer.image} alt="writer profile image" />
        <span>{writer.nickname}</span>
        {/* id 사용해서 수정 권한 있는 사용자인지 본인체크해야할거 같은데 */}
        <span>{passedTime} 전</span>
      </div>
    </>
  );
}
