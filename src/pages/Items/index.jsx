import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import SearchInput from '../../components/SearchInput';
import styles from './styles/index.module.css';
import { useProducts } from '../../hooks/useProducts';
import Paging from '../../components/Paging';

export default function Items() {
  const { bestProducts, totalProducts, totalCount, currentPage, pageSize, setCurrentPage, setOrderBy, setSearchKeyword } = useProducts();

  return (
    <>
      <Header />
      <div id='container' className={styles.itemsPage}>
        <div className='inner04'>
          <section>
            <div className={styles.contentHeader}>
              <h3>베스트 상품</h3>
            </div>
            <ProductList listType='best' products={bestProducts} />
          </section>

          <section>
            <div className={styles.contentHeader}>
              <h3>전체 상품</h3>
              <SearchInput
                placeholder='검색할 상품을 입력해주세요'
                setOrderBy={setOrderBy}
                setSearchKeyword={setSearchKeyword}
              />
            </div>
            <ProductList listType='all' products={totalProducts} />
            <Paging
              totalPage={Math.ceil(totalCount / pageSize)}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
