import { useState } from "react";
import Input from "./Input";
import Tag from "./Tag";

const TagInput = ({ value, onChange }) => {
  const [tagList, setTagList] = useState(["#티셔츠", "#상의"]);
  const onDelete = (deleteTag) => {
    setTagList(tagList.filter((tag) => tag !== deleteTag));
  };
  return (
    <>
      <Input
        value={value}
        placeholder="태그를 입력해주세요"
        onChange={onChange}
      />
      <ul className="flex flex-wrap gap-12">
        {tagList.map((tag) => {
          return (
            <li key={tag}>
              <Tag onDelete={onDelete}>{tag}</Tag>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default TagInput;
