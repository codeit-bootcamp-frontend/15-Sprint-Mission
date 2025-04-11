// src/api/productAPI.js

import { baseAPI } from './axios';

export const productAPI = {
  // 상품 목록 조회
  getProducts: async (page = 1, limit = 10) => {
    try {
      const response = await baseAPI.get(`/products?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      throw new Error('상품 목록을 불러오는데 실패했습니다.');
    }
  },

  // 상품 상세 조회
  getProductById: async (productId) => {
    try {
      const response = await baseAPI.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      throw new Error('상품 상세 정보를 불러오는데 실패했습니다.');
    }
  },

  // 상품 검색
  searchProducts: async (keyword, page = 1, limit = 10) => {
    try {
      const response = await baseAPI.get(`/products/search?keyword=${keyword}&page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      throw new Error('상품 검색에 실패했습니다.');
    }
  },
};
