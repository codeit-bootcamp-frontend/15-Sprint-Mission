import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Item.css";
import heart from "../../../../../src/assets/images/heart.svg";
import fallback from "../../../../../src/assets/images/fallback.png";
const Item = ({ item, isLoading = false }) => {
  const { id, images, name, price, favoriteCount } = item || {};
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageSrc = images && images.length > 0 ? images[0] : fallback;
  if (isLoading) {
    return (
      <div className="Item item-skeleton">
        <div className="skeleton-image" />
        <div className="text-section">
          <div className="skeleton-text name" />
          <div className="skeleton-text price" />
          <div className="skeleton-text favorite" />
        </div>
      </div>
    );
  }

  return (
    <div className="Item">
      <NavLink to={`/items/${id}`}>
        <div className="image-wrapper">
          {!imageLoaded && <div className="image-skeleton" />}
          <img
            src={imageSrc}
            alt={name}
            className={`item-img ${imageLoaded ? "visible" : "hidden"}`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.src = fallback;
              setImageLoaded(true);
            }}
          />
        </div>
        <div className="text-section">
          <p className="item-name">{name}</p>
          <p className="item-price">{price.toLocaleString()}원</p>
          <div className="favorite">
            <img src={heart} alt="좋아요 아이콘" />
            <p className="favorite-count">{favoriteCount}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Item;
