import { useState } from "react";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import ItemNameInput from "../../components/ItemNameInput/ItemNameInput";
import ItemDescription from "../../components/ItemDescription/ItemDescription";
import PriceInput from "../../components/PriceInput/PriceInput";
import TagInput from "../../components/TagInput/TagInput";
import styles from "./AddItem.module.css";

const AddItem = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);

  const isButtonDisabled =
    !title.trim() ||
    !description.trim() ||
    !price.trim() ||
    !image ||
    !tags.length;

  return (
    <div className={styles.AddItem}>
      <div className={styles.AddItemBar}>
        <h2 className={styles.title}>상품 등록하기</h2>
        <button
          type="button"
          disabled={isButtonDisabled}
          className={styles.button}
        >
          등록
        </button>
      </div>
      <ImageUpload image={image} onImageChange={setImage} />
      <ItemNameInput value={title} onChange={setTitle} />
      <ItemDescription value={description} onChange={setDescription} />
      <PriceInput value={price} onChange={setPrice} />
      <TagInput tags={tags} onChange={setTags} />
    </div>
  );
};

export default AddItem;
