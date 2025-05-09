import { css } from "@emotion/react";
import AddItemTop from "./components/AddItemTop";
import { tablet, mobile } from "@/styles/utils/mixins";

function AddItem() {
  return (
    <main css={addItemContainer}>
      <AddItemTop />
    </main>
  );
}

export default AddItem;

const addItemContainer = css`
  display: flex;
  width: 1200px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin: 24px auto 69px;

  ${tablet(css`
    width: 100%;
    margin: 16px 24px 76px;
  `)}

  ${mobile(css`
    width: 100%;
    margin: 24px 14px 70px;
  `)}
`;
