import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <ul className="grid grid-cols-2 tablet:grid-cols-3 pc:grid-cols-5 gap-8 tablet:gap-16 pc:gap-24">
      {products.map((product) => {
        const { id, name, images, price, favoriteCount } = product;

        return (
          <li key={id}>
            <ProductCard
              name={name}
              images={images}
              price={price}
              favoriteCount={favoriteCount}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;
