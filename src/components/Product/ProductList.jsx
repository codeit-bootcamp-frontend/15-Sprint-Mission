import ProductListItem from './ProductListItem';
import styles from './styles/ProductList.module.css';

const ProductList = ({listType, products = []}) => {
  return (
    <>
      <ul className={`${styles[listType]} ${styles.productList}`}>
        {products?.map((item) => (
          <ProductListItem
            key={item.id}
            id={item.id}
            title={item.name}
            image={item.images[0]}
            price={item.price}
            favorite={item.favoriteCount}
          />
        ))}

        {products.length === 0 && (
          <div className={styles.noProducts}>
            <p>검색 결과가 없습니다.</p>
          </div>
        ) }
      </ul>
    </>
  );
};

export default ProductList;


