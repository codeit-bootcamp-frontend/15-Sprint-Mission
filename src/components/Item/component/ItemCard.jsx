import { Link } from "react-router-dom";
import heart_icon from "/heart_icon.svg";

import "./ItemCard.css";

function isValidImage(url) {
  return (
    typeof url === "string" &&
    url.startsWith("http") &&
    !url.includes("via.placeholder.com")
  );
}

function ItemCard({ item, className }) {
  return (
    <Link to={`/item/${item.id}`} className="item-card-link">
      <div className="item-card-container">
        <img
          src={isValidImage(item.images[0]) ? item.images[0] : "/no_image.png"}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/no_image.png";
          }}
          alt={item.name}
          className={`${className} item-image`}
        />

        <div className="item-card-description">
          <span className="item-name">{item.name}</span>
          <h2 className="item-price">{item.price.toLocaleString()}</h2>
          <button className="item-heart-content" type="button">
            <img
              src={heart_icon}
              alt="좋아요 누르는 하트 버튼"
              className="item-heart-icon"
            />
            <span className="item-heart-count">{item.favoriteCount}</span>
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
