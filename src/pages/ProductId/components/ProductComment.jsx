import { css } from "@emotion/react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

function ProductComment() {
  return (
    <div css={CommentContainer}>
      <CommentInput />
      <CommentList />
    </div>
  );
}

export default ProductComment;

const CommentContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;
