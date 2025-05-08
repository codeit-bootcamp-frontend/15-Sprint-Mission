import axios from 'axios';
import { BASE_URL } from '../constants/apiConstants';

export const GetItems = async (page = 1, pageSize = 10, orderBy = 'recent') => {
  try {
    const response = await axios.get(`${BASE_URL}/products`, {
      params: { page, pageSize, orderBy },
    });

    return {
      products: response.data.list || [],
      totalCount: response.data.totalCount || 0,
    };
  } catch (error) {
    console.error('상품 데이터를 불러오지 못했습니다:', error);
    return {
      products: [],
      totalCount: 0,
    };
  }
};

export const GetFavoriteItems = async (orderBy = 'favorite', pageSize = 4) => {
  try {
    const response = await axios.get(`${BASE_URL}/products`, {
      params: { orderBy, pageSize },
    });

    return {
      products: response.data.list || [],
    };
  } catch (error) {
    console.error('상품 데이터를 불러오지 못했습니다:', error);
    return {
      products: [],
    };
  }
};
