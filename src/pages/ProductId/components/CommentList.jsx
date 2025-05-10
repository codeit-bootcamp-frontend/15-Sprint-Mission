import { productCommentAPI } from "@/api/productComment";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function CommentList() {
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await productCommentAPI.getProductComment(productId);
        setComments(res.list || []); // res.data.list로 댓글 목록 설정
      } catch (error) {
        console.error("댓글을 불러오는 데 실패했습니다.", error);
        setComments([]);
      }
    };
    fetchComments();
  }, [productId]);

  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.content}</p>
            <p>작성자: {comment.writer.nickname}</p>
            <p>작성일: {new Date(comment.createdAt).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <div>댓글이 없습니다.</div>
      )}
    </div>
  );
}

export default CommentList;
