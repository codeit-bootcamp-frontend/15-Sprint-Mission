import DefaultItemMd from "../assets/images/item-default-md.png";
import DefaultItemSm from "../assets/images/item-default-sm.png";

const ItemCard = ({ item }) => {
  const { images, name, price, favoriteCount } = item;
  return (
    <div className="flex flex-col gap-16">
      {images[0] ? (
        <img
          src={images[0]}
          alt="상품 이미지"
          className="aspect-square rounded-[20px]"
        />
      ) : (
        <img src={DefaultItemSm} alt="상품 이미지" className="rounded-[20px]" />
      )}
      <div className="flex flex-col gap-6">
        <p className="text-secondary-800 text-md">{name}</p>
        <p className="text-secondary-800 text-lg font-bold">{price}원</p>
        <div className="text-secondary-600 bg-[url(./assets/icons/icon-heart.png)] bg-size-[16px_16px] bg-no-repeat pl-20 text-xs">
          {favoriteCount}
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
