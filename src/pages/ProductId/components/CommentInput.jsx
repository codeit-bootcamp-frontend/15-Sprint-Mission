import { useState } from "react";
import { css } from "@emotion/react";
import { mobile } from "@/styles/utils/mixins";

function CommentInput() {
  const [comment, setComment] = useState("");
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
  };

  return (
    <section css={CommentInputContainer}>
      <h2>문의하기</h2>
      <form css={CommentInputForm} onSubmit={handleSubmit}>
        <div css={CommentInputDiv}>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            id="comment"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            css={CommentInputTextarea}
          />
          <button
            type="submit"
            css={CommentInputButton(comment)}
            disabled={!comment}
          >
            등록
          </button>
        </div>
      </form>
    </section>
  );
}

export default CommentInput;

const CommentInputContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
  align-self: stretch;

  h2 {
    color: var(--gray900);
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
  }

  ${mobile(css`
    gap: 24px;
  `)}
`;

const CommentInputForm = css`
  display: flex;
  align-self: stretch;
`;

const CommentInputDiv = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`;

const CommentInputTextarea = css`
  align-self: stretch;
  border-radius: 12px;
  background: var(--gray100);
  border: none;
  display: flex;
  width: 100%;
  height: 104px;
  padding: 16px 24px;
  gap: 10px;
  flex-shrink: 0;
  resize: none;

  font-family: "Pretendard";
  color: var(--gray400);

  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;

  ${mobile(css`
    font-size: 14px;
    height: 129px;
  `)}
`;

const CommentInputButton = (comment) => css`
  background-color: ${comment ? "var(--blue100)" : "var(--gray400)"};
  color: var(--white);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 74px;
  height: 42px;
  padding: 12px 23px;
  gap: 10px;
  flex-shrink: 0;
`;
