import { css } from "@emotion/react";
import AddItemTop from "./components/AddItemTop";
import { tablet, mobile } from "@/styles/utils/mixins";
import AddItemImage from "./components/AddItemImage";
import { useState } from "react";

function AddItem() {
  const [isDisabled, setIsDisabled] = useState(true);
  // const [itemName, setItemName] = useState("");
  // const [itemDescription, setItemDescription] = useState("");
  // const [itemPrice, setItemPrice] = useState("");
  // const [itemTag, setItemTag] = useState("");

  // const handleDisabled = (
  //   isItemName,
  //   isItemDescription,
  //   isItemPrice,
  //   isItemTag
  // ) => {
  //   if (isItemName && isItemDescription && isItemPrice && isItemTag) {
  //     setIsDisabled(false);
  //   } else {
  //     setIsDisabled(true);
  //   }
  // };

  return (
    <main css={addItemContainer}>
      <AddItemTop isDisabled={isDisabled} />
      <AddItemImage />
    </main>
  );
}

export default AddItem;

const addItemContainer = css`
  display: flex;
  max-width: 1200px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin: 24px auto 69px;

  ${tablet(css`
    max-width: 696px;
    margin: 16px auto 76px;
  `)}

  ${mobile(css`
    max-width: 346px;
    margin: 24px auto 70px;
  `)}
`;
