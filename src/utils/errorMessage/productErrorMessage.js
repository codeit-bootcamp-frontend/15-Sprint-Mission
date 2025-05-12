import HTTP_STATUS from '@/constants/statusCodes';

export const getProductErrorMessage = (status) => {
  switch (status) {
    case HTTP_STATUS.UNAUTHORIZED:
      return '로그인이 필요합니다.';
    case HTTP_STATUS.FORBIDDEN:
      return '이 상품을 볼 권한이 없어요.';
    case HTTP_STATUS.NOT_FOUND:
      return '해당 상품은 삭제되었어요.';
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
    case 502:
    case HTTP_STATUS.SERVICE_UNAVAILABLE:
    case 504:
      return '서버에 문제가 발생했어요. 잠시 후 다시 시도해주세요.';
    default:
      return '상품 정보를 불러오는 데 실패했어요.';
  }
};

export const postProductErrorMessage = (status) => {
  switch (status) {
    case HTTP_STATUS.UNAUTHORIZED:
      return '로그인이 필요합니다.';
    case HTTP_STATUS.FORBIDDEN:
      return '상품을 등록할 권한이 없어요.';
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
    case 502:
    case HTTP_STATUS.SERVICE_UNAVAILABLE:
    case 504:
      return '서버에 문제가 발생했어요. 잠시 후 다시 시도해주세요.';
    default:
      return '상품을 등록하는 데 실패했어요.';
  }
};

export const patchProductErrorMessage = (status) => {
  switch (status) {
    case HTTP_STATUS.UNAUTHORIZED:
      return '로그인이 필요합니다.';
    case HTTP_STATUS.FORBIDDEN:
      return '상품을 수정할 권한이 없어요.';
    case HTTP_STATUS.NOT_FOUND:
      return '수정할 상품을 찾을 수 없어요.';
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
    case 502:
    case HTTP_STATUS.SERVICE_UNAVAILABLE:
    case 504:
      return '서버에 문제가 발생했어요. 잠시 후 다시 시도해주세요.';
    default:
      return '상품을 수정하는 데 실패했어요.';
  }
};

export const deleteProductErrorMessage = (status) => {
  switch (status) {
    case HTTP_STATUS.UNAUTHORIZED:
      return '로그인이 필요합니다.';
    case HTTP_STATUS.FORBIDDEN:
      return '상품을 삭제할 권한이 없어요.';
    case HTTP_STATUS.NOT_FOUND:
      return '삭제할 상품을 찾을 수 없어요.';
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
    case 502:
    case HTTP_STATUS.SERVICE_UNAVAILABLE:
    case 504:
      return '서버에 문제가 발생했어요. 잠시 후 다시 시도해주세요.';
    default:
      return '상품을 삭제하는 데 실패했어요.';
  }
};
