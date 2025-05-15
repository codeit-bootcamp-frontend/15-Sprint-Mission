import { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import TagInput from "../components/TagInput";
import TextArea from "../components/TextArea";
import UploadImage from "../components/UploadImage";

const AddItemPage = () => {
  const [isDisable, setIsDisable] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");
  useEffect(() => {
    if (name && description && price && tag) setIsDisable(false);
    else setIsDisable(true);
  }, [name, description, price, tag]);

  return (
    <div className="tablet:pt-16 tablet:pb-78 tablet:px-24 text-secondary-800 mx-auto flex max-w-1200 flex-col gap-24 px-15 pt-24 pb-70 font-bold">
      <div className="flex justify-between">
        <h1 className="text-xl">상품 등록하기</h1>
        <Button isDisable={isDisable}>등록</Button>
      </div>
      <div className="flex flex-col gap-16">
        <h2 className="text-2lg">상품 이미지</h2>
        <UploadImage />
      </div>
      <div className="flex flex-col gap-16">
        <h2 className="text-2lg">상품명</h2>
        <Input
          value={name}
          placeholder="상품명을 입력해주세요"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-16">
        <h2 className="text-2lg">상품 소개</h2>
        <TextArea
          value={description}
          placeholder="상품 소개를 입력해주세요"
          className="h-282"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-16">
        <h2 className="text-2lg">판매가격</h2>
        <Input
          value={price}
          placeholder="판매 가격을 입력해주세요"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-16">
        <h2 className="text-2lg">태그</h2>
        <TagInput value={tag} onChange={(e) => setTag(e.target.value)} />
      </div>
    </div>
  );
};
export default AddItemPage;
