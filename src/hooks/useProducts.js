// src/hooks/useProducts.js

import { useState, useEffect, useCallback } from 'react';
import { productAPI } from '../api/productAPI';

export const useProducts = (page = 1, limit = 10) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await productAPI.getProducts(page, limit);
      setProducts(data.list);
      setTotalPages(data.totalPages);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [page, limit]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, totalPages, refetch: fetchProducts };
};