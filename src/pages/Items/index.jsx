import BestItems from "./components/BestItems";
import AllItems from "./components/AllItems";
import { css } from "@emotion/react";
import { tablet, mobile } from "@/styles/utils/mixins";
function Items() {
  return (
    <main css={itemsContainer}>
      <BestItems />
      <AllItems />
    </main>
  );
}

export default Items;

const itemsContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 24px auto 58px;
  width: 100%;
  max-width: 1200px;

  ${tablet(css`
    margin: 24px auto 72px;
  `)}

  ${mobile(css`
    margin: 17px auto 35px;
    gap: 24px;
  `)}
`;
