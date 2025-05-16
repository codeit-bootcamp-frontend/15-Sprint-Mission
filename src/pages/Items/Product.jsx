import styled from "@emotion/styled";
import Header from "./Header";
import InquiryItem from "./InquiryItem";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// 기존 스타일 유지
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin: 0 auto;
  padding: 94px 16px 0;
`;

const ProductWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto; /* 🔧 오타 수정: margi → margin */
    align-items: center;
  }
`;

const ProductImage = styled.div`
  width: 486px;
  height: 486px;
  background-color: #f3f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    height: auto; /* 높이 자동으로 */
    aspect-ratio: 1 / 1; /* ✅ 정사각형 비율 유지 */
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const ProductDescription = styled.div`
  width: 680px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 486px;
    padding: 0 16px; /* ✅ 모바일 대응 */
  }
`;

const ProductName = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const ProductPrice = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
`;

const ProductText = styled.p`
  font-size: 14px;
  color: #4b5563;
`;

const TagList = styled.div`
  display: flex;
  gap: 8px;
`;

const BottomMeta = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const WriterAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const WriterText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const WriterName = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const CreatedDate = styled.div`
  font-size: 12px;
  color: #9ca3af;
`;

const Heart = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #ef4444;
  font-weight: bold;
`;
const Tag = styled.span`
  font-size: 12px;
  background-color: #f3f4f6;
  padding: 4px 8px;
  border-radius: 8px;
`;

const AddButton = styled.button`
  width: 74px;
  height: 42px;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? "#9ca3af" : "#3692FF")};
  border: none;
  color: #f3f4f6;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  align-self: flex-end;
`;

const InquiryFormWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Inquiry = styled.div`
  font-size: 18px;
  color: #111827;
`;

const InquiryInput = styled.input`
  width: 100%;
  padding: 16px 24px;
  box-sizing: border-box;
  height: 104px;
  display: flex;
  gap: 10px;
  color: #1f2937;
  border-radius: 12px;
  background-color: #f3f4f6;
  border: none;
`;

const InquiryListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const BackToListButton = styled.button`
  width: 240px;
  border-radius: 40px;
  display: flex;
  gap: 2ㅎ0px;
  padding: 12px 0;
  background-color: #3692ff;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
  border: none;

  font-family: Pretendard;
  font-weight: 600;
  font-size: 12px;
  line-height: 26px;
  letter-spacing: 0%;
  text-align: center;
  color: #f3f4f6;

  &::after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url("/images/ic_back.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const LinkProduct = styled(Link)`
  text-decoration: none;
`;

const Product = () => {
  const [product, setProduct] = useState(null);
  const [inquiryText, setInquiryText] = useState("");
  const [comments, setComments] = useState([]);
  const [likeCount, setLikeCount] = useState(0);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://panda-market-api.vercel.app/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLikeCount(data.favoriteCount || 0);
        setComments(
          (data.comments || []).map((c, i) => ({ ...c, id: Date.now() + i }))
        );
      })
      .catch((err) => console.error("데이터 불러오기 실패:", err));
  }, [productId]);

  const isFormValid = inquiryText.trim().length > 0;

  const handleAddComment = () => {
    const newComment = {
      id: Date.now(),
      image: "/images/ic_profile.png",
      nickname: "익명사용자",
      content: inquiryText,
      updatedAt: new Date().toLocaleString("ko-KR", { hour12: false }),
    };

    setComments([newComment, ...comments]);
    setInquiryText("");
  };

  const handleDeleteComment = (id) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  const handleEditComment = (id, newText) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, content: newText } : c))
    );
  };

  const handleLike = () => {
    setLikeCount((prev) => prev + 1);
  };

  return (
    <>
      <Header />
      <Container>
        {product && (
          <>
            <ProductWrapper>
              <ProductImage>
                {product.images && (
                  <img src={product.images[0]} alt={product.name} />
                )}
              </ProductImage>
              <ProductDescription>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price?.toLocaleString()}원</ProductPrice>

                <div>
                  <SectionTitle>상품 소개</SectionTitle>
                  <ProductText>{product.description}</ProductText>
                </div>

                <div>
                  <SectionTitle>상품 태그</SectionTitle>
                  <TagList>
                    {product.tags?.map((tag, i) => (
                      <Tag key={i}>#{tag}</Tag>
                    ))}
                  </TagList>
                </div>

                {/* 하단 작성자 정보 + 좋아요 수 */}
                <BottomMeta>
                  <WriterInfo>
                    <WriterAvatar src="/images/ic_profile.png" />
                    <WriterText>
                      <WriterName>총명한판다</WriterName>
                      <CreatedDate>2025.05.11</CreatedDate>
                    </WriterText>
                  </WriterInfo>
                  <Heart onClick={handleLike}>❤️ {likeCount}</Heart>
                </BottomMeta>
              </ProductDescription>
            </ProductWrapper>

            <InquiryFormWrapper>
              <Inquiry>문의하기</Inquiry>
              <InquiryInput
                type="text"
                value={inquiryText}
                onChange={(e) => setInquiryText(e.target.value)}
                placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              />
              <AddButton disabled={!isFormValid} onClick={handleAddComment}>
                등록
              </AddButton>
            </InquiryFormWrapper>

            <InquiryListWrapper>
              {comments.map((comment) => (
                <InquiryItem
                  key={comment.id}
                  id={comment.id}
                  image={comment.image}
                  nickname={comment.nickname}
                  content={comment.content}
                  updatedAt={comment.updatedAt}
                  onEdit={handleEditComment}
                  onDelete={handleDeleteComment}
                />
              ))}
            </InquiryListWrapper>

            <LinkProduct to="/Items">
              <BackToListButton>목록으로 돌아가기</BackToListButton>
            </LinkProduct>
          </>
        )}
      </Container>
    </>
  );
};

export default Product;
