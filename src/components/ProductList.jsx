import ProductCard from "./ProductCard";

function ProductList({ products, itemsPerPage }) {
  return (
    <ul className="grid grid-cols-2 tablet:grid-cols-3 pc:grid-cols-5 gap-8 tablet:gap-16 pc:gap-24 max-w-344 tablet:max-w-695 pc:max-w-1200 m-auto">
      {products.slice(0, itemsPerPage).map((product) => {
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
