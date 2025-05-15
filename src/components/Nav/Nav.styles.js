import { css } from "@emotion/react";
import mq from "../../styles/media";

const ulContainerStyle = css`
  display: flex;
  gap: 0.8rem;
`;

const navTitleStyle = css`
  font-size: 1.8rem;
  font-weight: 700;
  color: #4b5563;

  &.active {
    color: #3692ff;
  }

  ${mq({
    fontSize: ["1.6rem", "1.8rem"],
  })}
`;

export { ulContainerStyle, navTitleStyle };
