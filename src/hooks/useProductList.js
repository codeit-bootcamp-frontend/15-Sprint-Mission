import { useState, useCallback, useEffect } from 'react';
import { productAPI } from '../api/productAPI';
import { useLocation } from 'react-router-dom';

export const useProductList = (pageSize) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageParam = searchParams.get('page');
  const [currentPage, setCurrentPage] = useState(pageParam ? parseInt(pageParam) : 1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalProducts, setTotalProducts] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [searchKeyword, setSearchKeyword] = useState('');

  // URL 파라미터가 변경될 때마다 currentPage 업데이트
  useEffect(() => {
    const newPage = pageParam ? parseInt(pageParam) : 1;
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  }, [location.search, pageParam, currentPage]);

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
