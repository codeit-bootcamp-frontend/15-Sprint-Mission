import { mobile, tablet } from "@/styles/utils/mixins";
import { css } from "@emotion/react";

export const HeaderStyle = css`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  background-color: var(--white);

  border-bottom: 1px solid #dfdfdf;
  background: #fff;
`;

export const LogoStyle = css`
  display: flex;
  margin-left: 200px;
  gap: 32px;

  ${tablet(css`
    margin-left: 24px;
    gap: 20px;
  `)}

  ${mobile(css`
    margin-left: 16px;
    gap: 8px;
  `)}
`;

export const LinkWrapperStyle = css`
  display: flex;
  gap: 30px;
  align-items: center;
  color: var(--gray600);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;

  ${mobile(css`
    gap: 8px;
  `)}
`;

export const ProfileImgStyle = css`
  width: 40px;
  height: 40px;
  margin-right: 200px;

  ${tablet(css`
    margin-right: 24px;
  `)}

  ${mobile(css`
    margin-right: 16px;
  `)}
`;

export const LinkStyle = css`
  color: var(--blue100);
`;

export const DefaultStyle = css`
  color: var(--gray600);
`;
