// src/pages/AddItem/index.jsx
import { css } from "@emotion/react";
import AddItemTop from "./components/AddItemTop";
import { tablet, mobile, desktop } from "@/styles/utils/mixins";
import AddItemImage from "./components/AddItemImage";
import { useState, useEffect } from "react";
import InputField from "./components/InputField";
import closeIcon from "/icons/ic_x_button.png";

function AddItem() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemTag, setItemTag] = useState("");
  const [tags, setTags] = useState([]);

  const formatPrice = (value) => {
    const numberValue = value.replace(/[^0-9]/g, "");
    return numberValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handlePriceChange = (e) => {
    const rawValue = e.target.value;
    const formattedValue = formatPrice(rawValue);

    const cursorPosition = e.target.selectionStart;
    const newCursorPosition =
      formattedValue.length - (rawValue.length - cursorPosition);

    setItemPrice(formattedValue);

    setTimeout(() => {
      e.target.setSelectionRange(newCursorPosition, newCursorPosition);
    }, 0);
  };

  const handleTagKeyPress = (e) => {
    if (e.key === "Enter" && itemTag.trim() !== "") {
      e.preventDefault();
      setTags([...tags, itemTag.trim()]);
      setItemTag("");
    }
  };

  const handleTagDelete = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  // useEffect에서 handleDisable 호출
  useEffect(() => {
    const handleDisable = () => {
      if (itemName && itemDescription && itemPrice && tags.length > 0) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    handleDisable();
  }, [itemName, itemDescription, itemPrice, tags]);

  return (
    <main css={addItemContainer}>
      <AddItemTop isDisabled={isDisabled} />
      <AddItemImage />
      <section css={inputFieldContainer}>
        <InputField
          id="itemName"
          label="상품명"
          type="text"
          name="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="상품명을 입력해주세요"
        />
        <InputField
          id="itemDescription"
          label="상품 소개"
          type="textarea"
          name="itemDescription"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          placeholder="상품 소개를 입력해주세요"
        />
        <InputField
          id="itemPrice"
          label="판매 가격"
          type="text"
          name="itemPrice"
          value={itemPrice}
          onChange={handlePriceChange}
          placeholder="판매 가격을 입력해주세요"
        />
        <InputField
          id="itemTag"
          label="태그"
          type="text"
          name="itemTag"
          value={itemTag}
          onChange={(e) => setItemTag(e.target.value)}
          onKeyPress={handleTagKeyPress}
          placeholder="태그를 입력해주세요"
        />
        <div css={tagContainer}>
          {tags.map((tag, index) => (
            <span key={index} css={tagStyle}>
              #{tag}
              <img
                src={closeIcon}
                alt="close"
                css={closeIconStyle}
                onClick={() => handleTagDelete(index)}
              />
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AddItem;

const addItemContainer = css`
  display: flex;
  max-width: 1200px;
  flex-direction: column;
  align-items: flex-start;
  gap: 21px;
  margin: 24px auto;

  ${tablet(css`
    max-width: 696px;
    margin: 16px auto;
  `)}

  ${mobile(css`
    max-width: 346px;
    margin: 24px auto;
  `)}
`;

const inputFieldContainer = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin-bottom: 76px;

  ${desktop(css`
    gap: 32px;
    margin-bottom: 69px;
  `)}

  ${mobile(css`
    margin-bottom: 70px;
  `)}
`;

const tagContainer = css`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const tagStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px 6px 16px;

  gap: 10px;
  border-radius: 26px;
  background: var(--gray100);
`;

const closeIconStyle = css`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
