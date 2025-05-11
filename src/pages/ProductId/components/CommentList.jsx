import { productCommentAPI } from "@/api/productCommentAPi";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CommentItem from "./CommentItem";
import { CommentListContainer } from "./CommentList.styles";

function CommentList() {
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await productCommentAPI.getProductComment(productId);
        setComments(res.list || []);
      } catch (error) {
        console.error("댓글을 불러오는 데 실패했습니다.", error);
        setComments([]);
      }
    };
    fetchComments();
  }, [productId]);

  return (
    <section css={CommentListContainer}>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))
      ) : (
        <div>댓글이 없습니다.</div>
      )}
    </section>
  );
}

export default CommentList;
