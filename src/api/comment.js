import { baseUrl, ENDPOINTS } from '@/constants/urls';
import {
  requestPost,
  requestGet,
  requestDelete,
  requestPatch,
} from './request';

// 댓글 등록
export const postComment = (productId, content) => {
  const url = `${baseUrl}${ENDPOINTS.PRODUCTS}/${productId}${ENDPOINTS.COMMENTS}`;
  return requestPost(url, { content });
};

// 댓글 조회
export const getComments = (productId, cursor) => {
  const query = cursor ? `?limit=10&cursor=${cursor}` : '?limit=10';
  const url = `${baseUrl}${ENDPOINTS.PRODUCTS}/${productId}${ENDPOINTS.COMMENTS}${query}`;
  return requestGet(url);
};

// 댓글 수정
export const patchComment = (commentId, content) => {
  const url = `${baseUrl}${ENDPOINTS.COMMENTS}/${commentId}`;
  return requestPatch(url, { content });
};

// 댓글 삭제
export const deleteComment = (commentId) => {
  const url = `${baseUrl}${ENDPOINTS.COMMENTS}/${commentId}`;
  return requestDelete(url);
};
