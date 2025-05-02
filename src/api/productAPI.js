// src/api/productAPI.js

import { baseAPI } from './axios';

export const productAPI = {
  // 상품 목록 조회
  getProducts: async (page, pageSize, orderBy, keyword = '') => {
    try {
      const response = await baseAPI.get(
        `/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
      );
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
};
