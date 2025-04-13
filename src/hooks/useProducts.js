// src/hooks/useProducts.js

import { useState, useEffect, useCallback } from 'react';
import { productAPI } from '../api/productAPI';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await productAPI.getProducts();
      setProducts(data.list);
      setTotalCount(data.totalCount);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, totalCount, refetch: fetchProducts };
};