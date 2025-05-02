import likes from "../assets/icons/likes.svg";

function ProductCard({ name, images, price, favoriteCount }) {
  return (
    <div className="flex flex-col gap-16 pb-32 tablet:pb-40 cursor-pointer">
      <img className="size-168 tablet:size-221 rounded-xl" src={images} />
      <div className="flex flex-col gap-6">
        <div className="text-md font-medium text-gray800">{name}</div>
        <div className="text-lg font-bold text-gray800">{price}</div>
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
