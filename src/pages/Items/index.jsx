import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import styles from './styles/index.module.css';
import { useProducts } from '../../hooks/useProducts';

export default function Items() {
  const { products, loading, error, totalPages, refetch } = useProducts();

  return (
    <>
      <Header />
      <div id='container' className={styles.itemsPage}>
        <div className='inner04'>
          <ProductList listType='best' title='베스트 상품' products={products} itemsPerPage={4} />
          <ProductList
            listType='all'
            title='전체 상품'
            hasSearch
            placeholder='검색할 상품을 입력해주세요.'
            products={products}
            itemsPerPage={10}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
