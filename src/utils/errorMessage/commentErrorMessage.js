import HTTP_STATUS from '@/constants/statusCodes';

export const getCommentErrorMessage = (status) => {
  switch (status) {
    case HTTP_STATUS.UNAUTHORIZED:
      return '로그인이 필요합니다.';
    case HTTP_STATUS.FORBIDDEN:
      return '이 댓글을 볼 권한이 없어요.';
    case HTTP_STATUS.NOT_FOUND:
      return '등록된 문의가 없습니다.';
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
    case 502:
    case HTTP_STATUS.SERVICE_UNAVAILABLE:
    case 504:
      return '서버에 문제가 발생했어요. 잠시 후 다시 시도해주세요.';
    default:
      return '댓글을 불러오는 데 실패했어요.';
  }
};

export default getCommentErrorMessage;

export const postCommentErrorMessage = (status) => {
  switch (status) {
    case HTTP_STATUS.UNAUTHORIZED:
      return '로그인이 필요합니다.';
    case HTTP_STATUS.FORBIDDEN:
      return '댓글을 등록할 권한이 없어요.';
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
    case 502:
    case HTTP_STATUS.SERVICE_UNAVAILABLE:
    case 504:
      return '서버에 문제가 발생했어요. 잠시 후 다시 시도해주세요.';
    default:
      return '댓글을 등록하는 데 실패했어요.';
  }
};

export const patchCommentErrorMessage = (status) => {
  switch (status) {
    case HTTP_STATUS.UNAUTHORIZED:
      return '로그인이 필요합니다.';
    case HTTP_STATUS.FORBIDDEN:
      return '이 댓글을 수정할 권한이 없어요.';
    case HTTP_STATUS.NOT_FOUND:
      return '수정할 댓글을 찾을 수 없어요.';
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
    case 502:
    case HTTP_STATUS.SERVICE_UNAVAILABLE:
    case 504:
      return '서버에 문제가 발생했어요. 잠시 후 다시 시도해주세요.';
    default:
      return '댓글을 수정하는 데 실패했어요.';
  }
};

export const deleteCommentErrorMessage = (status) => {
  switch (status) {
    case HTTP_STATUS.UNAUTHORIZED:
      return '로그인이 필요합니다.';
    case HTTP_STATUS.FORBIDDEN:
      return '이 댓글을 삭제할 권한이 없어요.';
    case HTTP_STATUS.NOT_FOUND:
      return '삭제할 댓글을 찾을 수 없어요.';
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
    case 502:
    case HTTP_STATUS.SERVICE_UNAVAILABLE:
    case 504:
      return '서버에 문제가 발생했어요. 잠시 후 다시 시도해주세요.';
    default:
      return '댓글을 삭제하는 데 실패했어요.';
  }
};
