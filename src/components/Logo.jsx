/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { mobile } from "@/styles/utils/mixins";

const variants = {
  default: css`
    width: 396px;
    height: auto;
    margin: 0 122px 40px 122px;

    ${mobile(css`
      width: 198px;
      height: auto;
      margin: 10px 72.5px 24px 72.5px;
    `)};
  `,
  homeDesktop: css`
    width: 153px;
    height: auto;
  `,
  homeMobile: css`
    width: 103px;
    height: auto;
  `,
};

const logoLink = css`
  ${mobile(css`
    display: flex;
    justify-content: center;
  `)};
`;

export const Logo = ({
  srcLogo,
  variant = "default", // 기본 variant 설정
}) => (
  <Link to="/" css={logoLink}>
    <img css={variants[variant]} src={srcLogo} alt="판다마켓 로고" />
  </Link>
);
