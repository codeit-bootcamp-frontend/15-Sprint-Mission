import { useParams } from "react-router-dom";
import { productIdAPI } from "@/api/productIdAPI";
import { useEffect, useState } from "react";
import heartIcon from "/icons/ic_heart.svg";
import ownerImage from "/icons/profile.png";

const ProductDetail = () => {
  const { productId } = useParams(); // URL에서 productId 가져오기
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
    <article>
      <img src={product.images[0]} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <p>{product.price.toLocaleString()}원</p>
        <p>{product.description}</p>
        <p>{product.tags.join(", ")}</p>
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
    </article>
  );
};

export default ProductDetail;
