import { css } from "@emotion/react";
import mq from "../../styles/media";

const LogoStyle = css`
  width: 8.1rem;
  height: 2.7rem;

  ${mq({
    width: [undefined, "15.3rem"],
    height: [undefined, "5.1rem"],
  })}
`;

export default LogoStyle;
