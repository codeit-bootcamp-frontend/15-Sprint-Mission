import { css } from "@emotion/react";
import { mobile } from "@/styles/utils/mixins";

const AuthFormStyle = css`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  ${mobile(css`
    width: 100%;
  `)}
`;

export default AuthFormStyle;
