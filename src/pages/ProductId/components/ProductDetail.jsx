import { useParams } from "react-router-dom";
import { productIdAPI } from "@/api/productIdAPI";
import { useEffect, useState } from "react";
import heartIcon from "/icons/ic_heart.svg";
import ownerImage from "/icons/profile.png";
import {
  ProductDetailContainer,
  ProductDetailImage,
  ProductDetailContent,
  ProductDetailContentContainer,
  ProductDetailName,
} from "./ProductDetail.styles";
import defaultImage from "/images/Img_default.png";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productInfo = await productIdAPI.getProductId(productId);
        setProduct(productInfo);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>로딩 중...</div>;
  }

  return (
    <section css={ProductDetailContainer}>
      <img
        src={product.images[0]}
        alt={product.name}
        css={ProductDetailImage}
        onError={(e) => {
          e.target.src = defaultImage;
        }}
      />
      <div css={ProductDetailContent}>
        <div css={ProductDetailContentContainer}>
          <div css={ProductDetailName}>
            <h2>{product.name}</h2>
            <h3>{product.price.toLocaleString()}원</h3>
          </div>
          <div>
            <p>상품 소개</p>
            <p>{product.description}</p>
          </div>
          <div>
            <p>상품 태그</p>
            <p>{product.tags.join(", ")}</p>
          </div>
        </div>
        <div>
          <div>
            <img src={ownerImage} alt="ownerImage" />
            <p>{product.ownerNickname}</p>
            <p>{new Date(product.createdAt).toLocaleDateString()}</p>
          </div>
          <button>
            <img src={heartIcon} alt="heartIcon" />
            <p>{product.favoriteCount}</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
