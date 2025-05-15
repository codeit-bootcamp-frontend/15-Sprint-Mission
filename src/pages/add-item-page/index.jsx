import { useState } from "react";
import BaseForm from "@/components/common/BaseForm";
import HeaderSection from "@pages/add-item-page/sections/HeaderSection";
import ItemImageInputField from "@pages/add-item-page/components/ItemImageInputField";
import ItemNameInputField from "@pages/add-item-page/components/ItemNameInputField";
import ItemDescriptionTextareaField from "@pages/add-item-page/components/ItemDescriptionTextareaField";
import ItemPriceInputField from "@pages/add-item-page/components/ItemPriceInputField";
import ItemTagInputField from "@pages/add-item-page/components/ItemTagInputField";
import TagsSection from "@pages/add-item-page/sections/TagsSection";
import { useImageHandler } from "@pages/add-item-page/hooks/useImageHandler";
import { useTagHandler } from "@pages/add-item-page/hooks/useTagHandler";
import { useFormValidation } from "@pages/add-item-page/hooks/useFormValidation";
import { useSubmitHandler } from "@pages/add-item-page/hooks/useSubmitHandler";

const AddItemPage = () => {
  const [btnAvailable, setBtnAvailable] = useState(false);
  const [itemImage, setItemImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [tag, setTag] = useState("");
  const [itemTags, setItemTags] = useState(new Set());

  const { handleImageChange, handleImageDelete } =
    useImageHandler(setItemImage);

  const { handleTagsKeyUp, deleteTag } = useTagHandler(
    tag,
    setTag,
    itemTags,
    setItemTags
  );

  useFormValidation(
    itemName,
    itemDescription,
    itemPrice,
    itemTags,
    setBtnAvailable
  );

  const formState = {
    itemImage,
    itemName,
    itemDescription,
    itemPrice,
    itemTags,
  };
  const { preventSubmitOnEnter, submitForm } = useSubmitHandler(formState);

  return (
    <BaseForm onSubmit={submitForm} onKeyDown={preventSubmitOnEnter}>
      <HeaderSection btnAvailable={btnAvailable} />

      <ItemImageInputField
        imageUrl={itemImage}
        onChange={handleImageChange}
        onDelete={handleImageDelete}
      />

      <ItemNameInputField value={itemName} onChange={setItemName} />

      <ItemDescriptionTextareaField
        value={itemDescription}
        onChange={setItemDescription}
      />

      <ItemPriceInputField value={itemPrice} onChange={setItemPrice} />

      <ItemTagInputField
        value={tag}
        onChange={setTag}
        onKeyUp={handleTagsKeyUp}
      />
      <TagsSection tags={itemTags} deleteTag={deleteTag} />
    </BaseForm>
  );
};

export default AddItemPage;
