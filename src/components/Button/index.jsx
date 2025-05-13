import { css } from "@emotion/react";
import { mobile } from "@/styles/utils/mixins";

const ButtonStyle = (disabled) => css`
  width: 100%;
  height: 56px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  line-height: 32px;
  border-radius: 40px;
  margin-bottom: 24px;
  color: var(--gray100);
  background-color: var(--blue100);

  ${disabled &&
  css`
    background-color: var(--gray400);
  `}

  ${mobile(css`
    width: 100%;
  `)}
`;

function Button({ children, type = "submit", disabled = false }) {
  return (
    <button css={ButtonStyle(disabled)} type={type} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
