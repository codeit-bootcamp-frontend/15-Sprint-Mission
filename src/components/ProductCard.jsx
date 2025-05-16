import "./ProductCard.css";
import noImage from "../assets/noImage.jpg";
import { useNavigate } from "react-router-dom";

/**
 *  단일 상품 정보를 카드 형태로 표시하는 컴포넌트 입니다.
 *  상품 이미지, 상품명, 가격, 좋아요 수를 표시합니다.
 * 이미지가 없거나 에러가 발생하는 경우, 대체 이미지를 처리할 수 있도록 onError를 사용하였습니다.
 */
const ProductCard = ({ item, variant }) => {
  const nav = useNavigate();
  const isBest = variant === "best";
  return (
    <div className={`product-card ${isBest ? "product-card--best" : "product-card--list"}`} onClick={() => nav(`/items/${item.id}`)}>
      <div className="product-card__image-wrapper">
        <img
          src={item.images.length > 0 ? item.images[0] : noImage}
          alt={item.name}
          className="product-card__image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = noImage;
          }}
        />
      </div>
      <div className="product-card__text-group">
        <p className="product-card__title">{item.name}</p>
        <p className="product-card__price">{item.price.toLocaleString()}원</p>
        <p className="product-card__favorite">❤️ {item.favoriteCount}</p>
      </div>
    </div>
  );
};

export default ProductCard;
