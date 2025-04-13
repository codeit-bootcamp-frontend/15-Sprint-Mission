import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import styles from './styles/index.module.css';
import { productAPI } from '../../api/productAPI';
import { useCallback, useEffect, useState } from 'react';
import Paging from '../../components/Paging';

export default function Items() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [bestProducts, setBestProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [sortProducts, setSortProducts] = useState('recent');

  const fetchBestProducts = async () => {
    const response = await productAPI.getProductsByFavorite();
    setBestProducts(response.list);
  };

  const fetchProducts = useCallback(async () => {
    const response = await productAPI.getProducts(currentPage);
    setTotalProducts(response.list);
    setTotalCount(response.totalCount);
  }, [currentPage]);

  useEffect(() => {
    fetchBestProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [currentPage, fetchProducts]);

  const handleSortProducts = useCallback(async () => {
    const response = await productAPI.getProducts(currentPage, sortProducts);
    setTotalProducts(response.list);
  }, [sortProducts, currentPage]);

  useEffect(() => {
    handleSortProducts();
  }, [handleSortProducts]);

  return (
    <>
      <Header />
      <div id='container' className={styles.itemsPage}>
        <div className='inner04'>
          <ProductList listType='best' title='베스트 상품' products={bestProducts}/>
          <ProductList
            listType='all'
            title='전체 상품'
            hasSearch
            placeholder='검색할 상품을 입력해주세요.'
            products={totalProducts}
            setSortProducts={setSortProducts}
          />
          <Paging totalPage={Math.ceil(totalCount / 10)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
      <Footer />
    </>
  );
}
