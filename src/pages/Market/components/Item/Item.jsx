import "./Item.css";
import heart from "../../../../../src/assets/images/heart.svg";
import fallback from "../../../../../src/assets/images/fallback.png";
const Item = ({ item, size }) => {
  const { images, name, price, favoriteCount } = item;
  return (
    <div className={`Item ${size}`}>
      <img
        src={images && images.length > 0 ? images[0] : fallback}
        alt={name}
        className="item-img"
        onError={(e) => {
          e.target.src = fallback;
        }}
      />
      <div className="text-section">
        <p className="item-name">{name}</p>
        <p className="item-price">{price}원</p>
        <div className="favorite">
          <img src={heart} alt="좋아요 아이콘" />
          <p className="favorite-count">{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
