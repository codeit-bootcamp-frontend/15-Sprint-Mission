import { useCallback } from "react";

export const useSubmitHandler = (formState) => {
  const preventSubmitOnEnter = useCallback((e) => {
    // enter로 폼 제출 방지 (태그 생성시 enter로 구분하기 때문이다. 단 textarea에서는 줄바꿈을 허용한다.)
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
    }
  }, []);

  const submitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log({
        itemImage: formState.itemImage,
        itemName: formState.itemName,
        itemDescription: formState.itemDescription,
        itemPrice: formState.itemPrice,
        tags: Array.from(formState.itemTags),
      });
    },
    [formState]
  );

  return { preventSubmitOnEnter, submitForm };
};
