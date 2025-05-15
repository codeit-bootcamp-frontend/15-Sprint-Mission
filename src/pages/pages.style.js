import { css } from "@emotion/react";
import mq from "../styles/media";

const ItemPageLayout = css`
  width: 34.3rem;
  margin: 1.6rem auto;

  ${mq({
    width: [undefined, "69.8rem", "120rem"],
    margin: [undefined, "2.4rem auto", "3.2rem auto"],
  })}
`;

export { ItemPageLayout };
