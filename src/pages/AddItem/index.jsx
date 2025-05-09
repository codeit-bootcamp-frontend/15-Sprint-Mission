import AddItemTop from "./components/AddItemTop";
import AddItemImage from "./components/AddItemImage";
import { useState } from "react";
import InputField from "./components/InputField";
import closeIcon from "/icons/ic_x_button.png";
import {
  addItemContainer,
  inputFieldContainer,
  tagContainer,
  tagStyle,
  closeIconStyle,
} from "./AddItem.styles";

function AddItem() {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemTag, setItemTag] = useState("");
  const [itemImage, setItemImage] = useState(null);
  const [tags, setTags] = useState([]);

  const isDisabled = !(
    itemName &&
    itemDescription &&
    itemPrice &&
    tags.length > 0
  ); // 상태 계산

  const formatPrice = (value) => {
    const numberValue = value.replace(/[^0-9]/g, "");
    return numberValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleImageChange = (file) => {
    setItemImage(file); // 선택한 이미지 상태 업데이트
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

  const handleSubmit = () => {
    const data = {
      itemName,
      itemDescription,
      itemPrice,
      tags,
      itemImage,
    };

    console.log("등록할 데이터:", data);
    // 여기서 API 호출을 통해 데이터를 서버에 전송할 수 있습니다.
  };

  return (
    <main css={addItemContainer}>
      <AddItemTop isDisabled={isDisabled} onDisableChange={handleSubmit} />
      <AddItemImage onImageChange={handleImageChange} />
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

// 나머지 CSS 코드...
