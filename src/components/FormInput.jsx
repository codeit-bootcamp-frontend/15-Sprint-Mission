import { useState, useEffect } from "react";
import "./FormInput.css";

const FormInput = ({ onFormValidChange }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  // tag input에 입력된 값을 저장
  const handleTagKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return; // 한글 입력시 마지막 글자 복사 문제 방지
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  // 태그 삭제
  const handleTagRemove = (removeTag) => {
    setTags(tags.filter((tag) => tag !== removeTag));
  };

  // 입력 폼 Input 값이 변경될 때마다 호출 (input에 값들이 다 들어가있는지)
  useEffect(() => {
    const isValid = title.trim() && description.trim() && price.trim() && tags.length > 0;
    onFormValidChange(!!isValid);
  }, [title, description, price, tags, onFormValidChange]);

  return (
    <div>
      <div className="input-field">
        <label className="input-field__label">상품명</label>
        <input className="input-field__input" placeholder="상품명을 입력해주세요" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="input-field">
        <label className="input-field__label">상품 소개</label>
        <textarea
          className="input-field__input"
          placeholder="상품 소개를 입력해주세요"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={8}
        />
      </div>

      <div className="input-field">
        <label className="input-field__label">판매가격</label>
        <input className="input-field__input" placeholder="판매 가격을 입력해주세요" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>

      <div className="input-field">
        <label className="input-field__label">태그</label>
        <input
          className="input-field__input"
          placeholder="태그를 입력해주세요"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleTagKeyDown}
        />
        <div className="tag-list">
          {tags.map((tag) => (
            <span className="tag-item" key={tag}>
              #{tag}
              <button className="tag-remove" onClick={() => handleTagRemove(tag)}>
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormInput;
