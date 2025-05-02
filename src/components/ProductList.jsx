import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <ul>
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
