import HTTP_STATUS from '@/constants/statusCodes';
import { PRODUCT_ERROR_MESSAGES as M } from '@/constants/messages';

export const getProductErrorMessage = (status) => {
  switch (status) {
    case HTTP_STATUS.UNAUTHORIZED:
      return M.UNAUTHORIZED;
    case HTTP_STATUS.FORBIDDEN:
      return M.FORBIDDEN_FETCH;
    case HTTP_STATUS.NOT_FOUND:
      return M.NOT_FOUND_FETCH;
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
    case 502:
    case HTTP_STATUS.SERVICE_UNAVAILABLE:
    case 504:
      return M.SERVER_ERROR;
    default:
      return M.FETCH_FAILED;
  }
};

export const postProductErrorMessage = (status) => {
  switch (status) {
    case HTTP_STATUS.UNAUTHORIZED:
      return M.UNAUTHORIZED;
    case HTTP_STATUS.FORBIDDEN:
      return M.FORBIDDEN_POST;
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
    case 502:
    case HTTP_STATUS.SERVICE_UNAVAILABLE:
    case 504:
      return M.SERVER_ERROR;
    default:
      return M.POST_FAILED;
  }
};

export const patchProductErrorMessage = (status) => {
  switch (status) {
    case HTTP_STATUS.UNAUTHORIZED:
      return M.UNAUTHORIZED;
    case HTTP_STATUS.FORBIDDEN:
      return M.FORBIDDEN_PATCH;
    case HTTP_STATUS.NOT_FOUND:
      return M.NOT_FOUND_PATCH;
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
    case 502:
    case HTTP_STATUS.SERVICE_UNAVAILABLE:
    case 504:
      return M.SERVER_ERROR;
    default:
      return M.PATCH_FAILED;
  }
};

export const deleteProductErrorMessage = (status) => {
  switch (status) {
    case HTTP_STATUS.UNAUTHORIZED:
      return M.UNAUTHORIZED;
    case HTTP_STATUS.FORBIDDEN:
      return M.FORBIDDEN_DELETE;
    case HTTP_STATUS.NOT_FOUND:
      return M.NOT_FOUND_DELETE;
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
    case 502:
    case HTTP_STATUS.SERVICE_UNAVAILABLE:
    case 504:
      return M.SERVER_ERROR;
    default:
      return M.DELETE_FAILED;
  }
};
