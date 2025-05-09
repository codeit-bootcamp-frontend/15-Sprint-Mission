import { css } from "@emotion/react";
import { tablet, mobile, desktop } from "@/styles/utils/mixins";

export const mainContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${tablet(css`
    padding: 24px;
    gap: 52px;
  `)}

  ${mobile(css`
    padding: 52px 15px;
    gap: 40px;
  `)}
`;

export const container = css`
  margin: 138px 0;
  width: 988px;
  background-color: #fcfcfc;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;

  ${tablet(css`
    margin: 24px 0 52px;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: 708px;
    gap: 24px;
  `)}

  ${mobile(css`
    margin: 24px 0 52px;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: 417px;
    gap: 24px;
  `)}
`;

export const secondContainer = css`
  ${container}

  ${tablet(css`
    flex-direction: column-reverse;
  `)}

  ${mobile(css`
    flex-direction: column-reverse;
  `)}
`;

export const containerImg = css`
  width: 579px;
  height: 444px;

  ${tablet(css`
    width: 696px;
    height: 524px;
  `)}

  ${mobile(css`
    width: 344px;
    height: 259px;
  `)}
`;

export const description = css`
  h4 {
    color: var(--blue100);
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    margin: 0 0 12px;

    ${mobile(css`
      font-weight: 700;
      font-size: 16px;
      line-height: 26px;
      letter-spacing: 0%;
      vertical-align: middle;
    `)}
  }

  h2 {
    margin: 0 0 24px;

    ${tablet(css`
      font-weight: 700;
      font-size: 32px;
      line-height: 42px;
      letter-spacing: 0%;
      vertical-align: middle;
    `)}

    ${mobile(css`
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0%;
      vertical-align: middle;
    `)}
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: var(--gray700);

    ${tablet(css`
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: 0%;
      vertical-align: middle;
    `)}

    ${mobile(css`
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      letter-spacing: 0%;
      vertical-align: middle;
    `)}
  }
`;

export const firstDescription = css`
  ${description}
  width: 298px;

  ${tablet(css`
    text-align: left;
    display: flex;
    flex-direction: column;
    width: auto;
    height: 160px;
    margin-right: 377px;
  `)}

  ${mobile(css`
    text-align: left;
    display: flex;
    flex-direction: column;
    width: auto;
    height: 160px;
    margin-right: 104px;
  `)}
`;

export const secondDescription = css`
  ${description}
  text-align: right;

  ${tablet(css`
    margin-left: 286px;
  `)}

  ${mobile(css`
    margin-left: 28px;
  `)}
`;

export const thirdDescription = css`
  ${description}
  width: 359px;

  ${tablet(css`
    text-align: left;
    display: flex;
    flex-direction: column;
    width: auto;
    height: 160px;
    margin-right: 286px;
  `)}

  ${mobile(css`
    text-align: left;
    display: flex;
    flex-direction: column;
    width: auto;
    height: 160px;
    margin-right: 29px;
  `)}
`;

export const featuresLineBreakStyle = css`
  ${desktop(css`
    display: block;
  `)}
`;
