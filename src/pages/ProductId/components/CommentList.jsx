import { productCommentAPI } from "@/api/productCommentAPi";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CommentItem from "./CommentItem";
import CommentEmpty from "/images/Img_empty.png";
import { css } from "@emotion/react";
import { desktop } from "@/styles/utils/mixins";

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
        <div css={CommentEmptyContainer}>
          <img src={CommentEmpty} alt="댓글이 없습니다." />
          <span>아직 문의가 없어요</span>
        </div>
      )}
    </section>
  );
}

export default CommentList;

const CommentListContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 24px;
`;

const CommentEmptyContainer = css`
  display: flex;
  width: 196px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: var(--gray400);
  text-align: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 26px;

  img {
    width: 140px;
  }

  ${desktop(css`
    width: 240px;

    img {
      width: 196px;
    }
  `)}
`;
