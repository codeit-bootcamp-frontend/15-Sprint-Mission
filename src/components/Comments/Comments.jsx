import styles from "./Comments.module.scss";
import { useEffect, useState } from "react";
import getComments from "../../API/getComments";
import Comment from "../Comment/Comment";
export default function Comments({ productIdNum }) {
  const [comments, setComments] = useState([]);
  const [cursor, setCursor] = useState(0);
  useEffect(() => {
    async function fetchComments() {
      try {
        const comments = await getComments(productIdNum, 3, 0);
        setComments(comments.list);
        setCursor(comments.nextCursor);

        console.log(comments);
      } catch (error) {
        console.log("지난 문의들을 불러오기 실패했습니다:", error);
      }
    }
    fetchComments();
  }, []);

  async function handleDelete() {
    // 삭제 API 먼저 호출했다고 가정하고,
    try {
      const nextComment = await getComments(productIdNum, 1, cursor);
      setComments((prev) => [...prev, ...nextComment.list]);
      setCursor(nextComment.nextCursor);
    } catch (error) {
      console.log("다음 문의를 불러오기 실패했습니다:", error);
    }
  }

  //나중에, 수정 삭제하기 옵션 만든다음에
  //삭제하면 하나 더 불러오는거 해야함.
  //코멘트 하나 불러와서, comments.push하면 될듯. 대신 파라미터로 불러온느 아이템 개수 조절이 필요할듯.

  //   id,nickname,image
  return (
    <>
      <div className={styles["comment-content"]}>
        {comments.map((comment) => {
          <Comment comment={comment} />;
        })}
      </div>
    </>
  );
}
