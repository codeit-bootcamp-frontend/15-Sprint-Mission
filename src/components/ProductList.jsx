import ContentHeader from './ContentHeader';
import ProductListItem from './ProductListItem';
import Pagenation from './Pagenation';
import styles from '/src/styles/ProductList.module.css';

const ProductList = ({listType, title, hasSearch, placeholder, products, itemsPerPage}) => {
  const buttonType = {
    isSearchProduct:  {
      buttonText: '상품 등록하기',
      buttonType: 'submit',
      buttonStyle: 'primary'
    }
  }

  const displayProducts = listType === 'best' 
    ? [...products]
        .sort((a, b) => b.favoriteCount - a.favoriteCount)
        .slice(0, 4)
    : products;
  console.log(displayProducts);
  return (
    <div className={styles.productSection}>
      <ContentHeader
        title={title}
        hasSearch={hasSearch}
        placeholder={placeholder}
        buttonType={buttonType.isSearchProduct}
      />
      <ul className={`${styles[listType]} ${styles.productList}`}>
        {displayProducts.map((item) => (
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
      {displayProducts.length > itemsPerPage && <Pagenation />}
    </div>
  );
};

export default ProductList;


