import ContentHeader from './ContentHeader';
import ProductListItem from './ProductListItem';
import Paging from './Paging';
import styles from '/src/styles/ProductList.module.css';

const ProductList = ({listType, title, hasSearch, placeholder, products, setSortProducts}) => {
  const buttonType = {
    isSearchProduct:  {
      buttonText: '상품 등록하기',
      buttonType: 'submit',
      buttonStyle: 'primary'
    }
  }
  return (
    <div className={styles.productSection}>
      <ContentHeader
        title={title}
        hasSearch={hasSearch}
        placeholder={placeholder}
        buttonType={buttonType.isSearchProduct}
        setSortProducts={setSortProducts}
      />
      <ul className={`${styles[listType]} ${styles.productList}`}>
        {products.map((item) => (
          <ProductListItem
            key={item.id}
            id={item.id}
            title={item.name}
            image={item.images[0]}
            price={item.price}
            favorite={item.favoriteCount}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;


