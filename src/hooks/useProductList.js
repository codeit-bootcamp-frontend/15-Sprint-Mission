import { useState, useCallback, useEffect } from 'react';
import { productAPI } from '../api/productAPI';

export const useProductList = (pageSize) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalProducts, setTotalProducts] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [searchKeyword, setSearchKeyword] = useState('');

  const fetchProducts = useCallback(async () => {
    try {
      const response = await productAPI.getProducts(currentPage, pageSize, orderBy, searchKeyword);
      setTotalProducts(response.list);
      setTotalCount(response.totalCount);
    } catch (error) {
      alert('상품을 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  }, [currentPage, pageSize, orderBy, searchKeyword]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    setCurrentPage(1);
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize]);

  return {
    currentPage,
    totalCount,
    totalProducts,
    orderBy,
    searchKeyword,
    setCurrentPage,
    setOrderBy,
    setSearchKeyword,
  };
};
