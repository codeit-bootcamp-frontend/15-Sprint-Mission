import { memo } from "react";
import ImageInputField from "@components/ImageInputField";

const ItemNameInputField = ({ imageUrl, onChange, onDelete }) => {
  return (
    <ImageInputField
      id="itemImage"
      label="상품 이미지"
      imageUrl={imageUrl}
      onChange={onChange}
      onDelete={onDelete}
    />
  );
};

export default memo(ItemNameInputField);
