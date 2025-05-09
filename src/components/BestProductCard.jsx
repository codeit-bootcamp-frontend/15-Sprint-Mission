import likes from "../assets/icons/likes.svg";
import basic from "../assets/images/basic.svg";

function ProductCard({ name, images, price, favoriteCount }) {
  const changePrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className="flex flex-col gap-16 pb-32 tablet:pb-40 cursor-pointer">
      <img
        className="size-344 pc:size-282 rounded-xl"
        src={images}
        onError={(e) => (e.target.src = basic)}
      />
      <div className="flex flex-col gap-6">
        <div className="text-md font-medium text-gray800">{name}</div>
        <div className="text-lg font-bold text-gray800">{changePrice}원</div>
        <div className="flex gap-4 items-center">
          <img className="size-14" src={likes} />
          <div className="text-xs font-medium text-gray600">
            {favoriteCount}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
