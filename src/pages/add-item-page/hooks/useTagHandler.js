import { useCallback } from "react";
import { toast } from "react-toastify";

const TAG_ALREADY_EXISTS_MESSAGE = "이미 추가된 태그입니다.";

export const useTagHandler = (tag, setTag, itemTags, setItemTags) => {
  const addToTag = useCallback(
    (tagValue) => {
      if (itemTags.has(tagValue)) {
        toast(TAG_ALREADY_EXISTS_MESSAGE);
      }

      setItemTags((prev) => {
        const updatedTags = new Set(prev);
        updatedTags.add(tagValue);
        return updatedTags;
      });

      setTag("");
    },
    [itemTags, setItemTags, setTag]
  );

  const handleTagsKeyUp = useCallback(
    (e) => {
      if (e.key === "Enter" && tag.trim() !== "") {
        addToTag(tag.trim());
      }
    },
    [tag, addToTag]
  );

  const deleteTag = useCallback(
    (tagToDelete) => {
      setItemTags((prev) => {
        const updatedTags = new Set(prev);
        updatedTags.delete(tagToDelete);
        return updatedTags;
      });
    },
    [setItemTags]
  );

  return {
    handleTagsKeyUp,
    deleteTag,
  };
};
