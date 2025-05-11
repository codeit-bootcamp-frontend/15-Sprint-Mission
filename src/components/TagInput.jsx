import { useState } from "react";
import Input from "./Input";
import Tag from "./Tag";

const TagInput = () => {
  const [tagList, setTagList] = useState(["#티셔츠", "#상의"]);
  const onDelete = (deleteTag) => {
    setTagList(tagList.filter((tag) => tag !== deleteTag));
  };
  return (
    <>
      <Input placeholder="태그를 입력해주세요" />
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
