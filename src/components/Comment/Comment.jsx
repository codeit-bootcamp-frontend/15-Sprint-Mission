import timeSince from "../../utils/timeSince";
import styles from "./Comment.module.scss";
import blankProfile from "../../image/blankProfile.svg";
import { useState } from "react";
export default function Comment({ comment, handleModify, handleDelete }) {
  const { content, updatedAt, id, writer } = comment;
  const [show, setShow] = useState(false);
  const passedTime = timeSince(updatedAt);
  const [edit, setEditing] = useState(false);
  const [value, setValue] = useState("");

  function modifyContent() {
    setEditing(true);
    setShow(false);
  }

  function modifyCancel() {
    setEditing(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setEditing(false);
  }
  return (
    <>
      {edit && (
        <form onSubmit={handleSubmit} className={styles.modify}>
          <textarea
            className={styles["modify__textarea"]}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="질문 수정하기"
          ></textarea>
          <div className={styles["modify__button"]}>
            <button
              className={styles["button-cancel"]}
              type="button"
              onClick={modifyCancel}
            >
              취소
            </button>
            <button className={styles["button-modify"]} type="submit">
              수정 완료
            </button>
          </div>
        </form>
      )}
      <div className={styles["comment"]}>
        <p className={styles["comment__content"]}>{content}</p>
        <button
          className={styles["comment__control"]}
          onClick={() => setShow((prev) => !prev)}
        />
        <div className={show ? styles.options : styles.hidden}>
          <div onClick={() => modifyContent()}>수정하기</div>
          <div
            className={styles.delete}
            onClick={() => handleDelete(setShow, id)}
          >
            삭제하기
          </div>
        </div>
      </div>
      <div className={styles["comment-profile"]}>
        <img
          className={styles.profile}
          src={writer.image ?? blankProfile}
          alt="writer profile image"
        />
        <span className={styles.nickname}>{writer.nickname}</span>
        {/* id 사용해서 수정 권한 있는 사용자인지 본인체크해야할거 같은데 */}
        <span className={styles.passedTime}>{passedTime} 전</span>
      </div>
      <div className={styles.borderline}></div>
    </>
  );
}
