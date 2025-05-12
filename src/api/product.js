import { baseUrl, ENDPOINTS } from '@/constants/urls';
import {
  requestPost,
  requestGet,
  requestPatch,
  requestDelete,
} from './request';

// 상품 등록
export const postProduct = (formData) => {
  const url = `${baseUrl}${ENDPOINTS.PRODUCTS}`;
  return requestPost(url, formData);
};

// 이미지 업로드 (FormData)
export const uploadImage = (formData) => {
  const url = `${baseUrl}${ENDPOINTS.UPLOAD_IMAGE}`;
  return requestPost(url, formData);
};

// 상품 전체 조회
export const fetchAllProducts = ({ page, pageSize, orderBy, keyword }) => {
  const query = `?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${encodeURIComponent(keyword || '')}`;
  const url = `${baseUrl}${ENDPOINTS.PRODUCTS}${query}`;
  return requestGet(url);
};

// 베스트 top4 상품 조회
export const fetchBestProducts = () => {
  const url = `${baseUrl}${ENDPOINTS.PRODUCTS}?page=1&pageSize=4&orderBy=favorite`;
  return requestGet(url);
};

// 상품 상세 조회
export const getProductDetail = (productId) => {
  const url = `${baseUrl}${ENDPOINTS.PRODUCTS}/${productId}`;
  return requestGet(url);
};

// 상품 수정
export const patchProduct = (productId, data) => {
  const url = `${baseUrl}${ENDPOINTS.PRODUCTS}/${productId}`;
  return requestPatch(url, data);
};

// 상품 삭제
export const deleteProduct = (productId) => {
  const url = `${baseUrl}${ENDPOINTS.PRODUCTS}/${productId}`;
  return requestDelete(url);
};
