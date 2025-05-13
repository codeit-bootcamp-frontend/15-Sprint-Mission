import { css } from "@emotion/react";

export default function AddItemTop({ isDisabled, onDisableChange }) {
  return (
    <section css={AddItemTopStyle}>
      <h2>상품 등록하기</h2>
      <button
        type="submit"
        disabled={isDisabled}
        css={AddItemTopButtonStyle(isDisabled)}
        onClick={onDisableChange} // 클릭 시 상태 변경
      >
        등록
      </button>
    </section>
  );
}

const AddItemTopStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  width: 100%;

  h2 {
    color: var(--gray800);
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
  }
`;

const AddItemTopButtonStyle = (isDisabled) => css`
  display: flex;
  height: 42px;
  padding: 12px 23px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: ${isDisabled ? "var(--gray400)" : "var(--blue100)"};

  color: var(--gray100);

  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
`;
