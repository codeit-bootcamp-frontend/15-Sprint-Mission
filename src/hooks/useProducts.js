// src/hooks/useProducts.js

import { useState, useEffect, useCallback } from 'react';
import { productAPI } from '../api/productAPI';
import { useMediaQuery } from 'react-responsive';


export const useProducts = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 376px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 377px) and (max-width: 744px)' });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [bestProducts, setBestProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [bestPageSize, setBestPageSize] = useState(4);

  useEffect(() => {
    if (isMobile) {
      setPageSize(4);
      setBestPageSize(1);
    } else if (isTablet) {
      setPageSize(6);
      setBestPageSize(2);
    } else {
      setPageSize(10);
      setBestPageSize(4);
    }
  }, [isTablet, isMobile]);

  const fetchBestProducts = useCallback(async () => {
    const response = await productAPI.getProducts(1, bestPageSize, 'favorite');
    setBestProducts(response.list);
  }, [bestPageSize]);

  const fetchProducts = useCallback(async () => {
    const response = await productAPI.getProducts(currentPage, pageSize, orderBy, searchKeyword);
    setTotalProducts(response.list);
    setTotalCount(response.totalCount);
  }, [currentPage, pageSize, orderBy, searchKeyword]);

  useEffect(() => {
    fetchBestProducts();
  }, [fetchBestProducts]);

  useEffect(() => {
    fetchProducts();
  }, [currentPage, fetchProducts, searchKeyword, pageSize]);

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