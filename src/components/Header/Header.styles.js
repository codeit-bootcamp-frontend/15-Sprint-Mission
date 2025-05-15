import { css } from "@emotion/react";
import mq from "../../styles/media";

const HeaderStyle = css`
  padding-inline: 20rem;
  padding-block: 0.9rem;
  border-bottom: 0.1rem solid #dfdfdf;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mq({
    paddingInline: ["2.4rem", "2.4rem", "20rem"],
  })}
`;
const containerStyle = css`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  ${mq({
    gap: ["0.8rem", "2rem", "3.2rem"],
  })}
`;

export { HeaderStyle, containerStyle };
