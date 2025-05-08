// src/hooks/useProducts.js
import { usePageSize } from './usePageSize';
import { useBestProducts } from './useBestProducts';
import { useProductList } from './useProductList';

export const useProducts = () => {
  const { pageSize, bestPageSize, setPageSize } = usePageSize();
  const { bestProducts } = useBestProducts(bestPageSize);
  const {
    currentPage,
    totalCount,
    totalProducts,
    orderBy,
    searchKeyword,
    setCurrentPage,
    setOrderBy,
    setSearchKeyword,
  } = useProductList(pageSize);

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
