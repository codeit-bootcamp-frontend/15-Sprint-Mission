import styled from "@emotion/styled";
import Header from "../Items/Header";
import ImageUpload from "../../components/ImageUpLoad";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  gap: 24px;
  flex-direction: column;
  padding: 94px 16px 0;
  margin: 0 auto;
`;

const AddWrapper = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddProduct = styled.div`
  font-size: 20px;
`;

const AddButton = styled.button`
  width: 74px;
  height: 42px;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? "#9ca3af" : "#3692FF")};
  border: none;
  color: #f3f4f6;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

const ProductUpLoadWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  height: auto;
  flex-direction: column;
`;

const ProductImage = styled.div`
  font-size: 16px;
  color: #1f2937;
`;

const NameWrapper = styled.div`
  width: 100%;
`;

const ProductName = styled.div`
  font-size: 16px;
  color: #1f2937;
`;

const InputName = styled.input`
  width: 100%;
  padding: 16px 24px;
  border: none;
  background-color: #f3f4f6;
  border-radius: 12px;
  box-sizing: border-box;
`;

const ProductDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProductDescription = styled.div`
  font-size: 16px;
  color: #1f2937;
`;

const ProductDescriptionInput = styled.input`
  width: 100%;
  height: 282px;
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  background-color: #f3f4f6;
  box-sizing: border-box;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProductPrice = styled.div`
  font-size: 18px;
  color: #1f2937;
`;

const ProductPriceInput = styled.input`
  width: 100%;
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  background-color: #f3f4f6;
  box-sizing: border-box;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Tag = styled.div`
  font-size: 18px;
  color: #1f2937;
`;

const TagInput = styled.input`
  width: 100%;
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  background-color: #f3f4f6;
  box-sizing: border-box;
`;

const AddItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");

  const isFormValid = name && description && price && tag;

  const handlePriceChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setPrice(onlyNumbers);
  };

  return (
    <>
      <Header />  
      <Container>
        <AddWrapper>
          <AddProduct>상품 등록하기</AddProduct>
          <AddButton disabled={!isFormValid}>등록</AddButton>
        </AddWrapper>

        <ProductUpLoadWrapper>
          <ProductImage>상품 이미지</ProductImage>
          <ImageUpload />
        </ProductUpLoadWrapper>

        <NameWrapper>
          <ProductName>상품명</ProductName>
          <InputName
            type="text"
            placeholder="상품명을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </NameWrapper>

        <ProductDescriptionWrapper>
          <ProductDescription>상품 소개</ProductDescription>
          <ProductDescriptionInput
            type="text"
            placeholder="상품 소개를 입력해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </ProductDescriptionWrapper>

        <PriceWrapper>
          <ProductPrice>판매가격</ProductPrice>
          <ProductPriceInput
            type="text"
            placeholder="판매 가격을 입력해주세요"
            value={price}
            onChange={handlePriceChange}
          />
        </PriceWrapper>

        <TagWrapper>
          <Tag>태그</Tag>
          <TagInput
            type="text"
            placeholder="태그를 입력해주세요"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </TagWrapper>
      </Container>
    </>
  );
};

export default AddItem;
