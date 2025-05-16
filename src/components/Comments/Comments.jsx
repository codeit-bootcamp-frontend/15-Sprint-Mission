import styles from "./Comments.module.scss";
import { useEffect, useState } from "react";
import getComments from "../../API/getComments";
import Comment from "../Comment/Comment";
import empty from "../../image/inquiry-empty.svg";
// import deleteComment from "../../API/deleteComment";

export default function Comments({ productIdNum }) {
  const [comments, setComments] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    async function fetchComments() {
      try {
        const comments = await getComments(productIdNum, 3, 0);
        setComments(comments.list);
        setCursor(comments.nextCursor);
        if (comments.list.length === 0) {
          setIsEmpty(true);
          return;
        }

        console.log(comments);
      } catch (error) {
        console.log("지난 문의들을 불러오기 실패했습니다:", error);
      }
    }
    fetchComments();
  }, []);

  async function handleModify(id) {
    return 0;
  }

  function handleDelete(setShow, id) {
    return 0;
  }
  //   async function handleDelete(setShow, commentId) {
  //     deleteComment(commentId)
  //       .then(() => {
  //         console.log("삭제 성공");
  //         setComments((prev) => prev.filter((c) => c.id !== commentId));
  //       })
  //       .catch((err) => {
  //         console.error("삭제 실패:", err);
  //       });
  //     try {
  //       const nextComment = await getComments(productIdNum, 1, cursor);
  //       setComments((prev) => [...prev, ...nextComment.list]);
  //       setCursor(nextComment.nextCursor);
  //       setShow(false);
  //     } catch (error) {
  //       console.log("다음 문의를 불러오기 실패했습니다:", error);
  //     }
  //   }

  console.log(comments);
  return (
    <>
      {isEmpty ? (
        <div className={styles.isEmpty}>
          <img src={empty} alt="comment empty" />
          <p>아직 문의가 없어요</p>
        </div>
      ) : (
        <div className={styles["comment-content"]}>
          {comments.map((comment) => (
            <Comment
              comment={comment}
              handleModify={handleModify}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </>
  );
}
