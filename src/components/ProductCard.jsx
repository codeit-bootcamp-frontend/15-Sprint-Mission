function ProductCard({ name, images, price, favoriteCount }) {
  return (
    <div>
      <img src={images} />
      <div>
        <div>{name}</div>
        <div>{price}</div>
        <div>{favoriteCount}</div>
      </div>
    </div>
  );
}

export default ProductCard;
