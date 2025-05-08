// src/hooks/useProducts.js

import { useState, useEffect, useCallback } from 'react';
import { productAPI } from '../api/productAPI';
import { useMediaQuery } from 'react-responsive';


export const useProducts = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 426px) and (max-width: 768px)' });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [bestProducts, setBestProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [bestPageSize, setBestPageSize] = useState(4);

  // 미디어 쿼리에 따라 페이지 사이즈 설정
  useEffect(() => {
    let newPageSize = 10;
    let newBestPageSize = 4;
    
    if (isMobile) {
      newPageSize = 4;
      newBestPageSize = 1;
    } else if (isTablet) {
      newPageSize = 6;
      newBestPageSize = 2;
    }
    
    setPageSize(newPageSize);
    setBestPageSize(newBestPageSize);
  }, [isMobile, isTablet]);

  const fetchBestProducts = useCallback(async () => {
    try {
      const response = await productAPI.getProducts(1, bestPageSize, 'favorite');
      setBestProducts(response.list);
    } catch (error) {
      alert('베스트 상품을 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  }, [bestPageSize]);

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
    fetchBestProducts();
  }, [fetchBestProducts]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // 페이지 사이즈 변경 시 상품 리스트 새로고침
  useEffect(() => {
    // 페이지 사이즈가 변경되면 페이지를 1로 리셋하고 상품 다시 로드
    setCurrentPage(1);
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize]);

  return {
    currentPage,
    totalCount,
    bestProducts,
    totalProducts,
    pageSize,
    setCurrentPage,
    setOrderBy,
    setSearchKeyword,
    setPageSize,
  };
};