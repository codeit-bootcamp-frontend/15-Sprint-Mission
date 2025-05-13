import { useEffect, useState } from "react";
import ImageUpload from "../components/ImageUpload";
import FormInput from "../components/FormInput";
import "./AddItem.css";

const AddItem = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <div className="additem">
      <div className="additem-header">
        <h2>상품 등록하기</h2>
        <button className="submit-button" disabled={!isFormValid}>
          등록
        </button>
      </div>

      <div className="additem-image-section">
        <ImageUpload />
      </div>

      <div className="additem-form-section">
        <FormInput onFormValidChange={setIsFormValid} />
      </div>
    </div>
  );
};

export default AddItem;
