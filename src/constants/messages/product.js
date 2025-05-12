export const PRODUCT_SUCCESS_MESSAGES = {
  ADD_ITEM_SUCCESS: '상품이 등록되었습니다!',
};

export const PRODUCT_INFO_MESSAGES = {
  emptyList: '등록된 상품이 없습니다.',
  maxImageCount: '* 이미지는 최대 1개까지만 등록할 수 있습니다.',
};

export const PRODUCT_ERROR_MESSAGES = {
  // 공통
  UNAUTHORIZED: '로그인이 필요합니다.',
  SERVER_ERROR: '서버에 문제가 발생했어요. 잠시 후 다시 시도해주세요.',

  // GET
  FORBIDDEN_FETCH: '이 상품을 볼 권한이 없어요.',
  NOT_FOUND_FETCH: '해당 상품은 삭제되었어요.',
  FETCH_FAILED: '상품 정보를 불러오는 데 실패했어요.',

  // POST
  FORBIDDEN_POST: '상품을 등록할 권한이 없어요.',
  POST_FAILED: '상품을 등록하는 데 실패했어요.',

  // PATCH
  FORBIDDEN_PATCH: '상품을 수정할 권한이 없어요.',
  NOT_FOUND_PATCH: '수정할 상품을 찾을 수 없어요.',
  PATCH_FAILED: '상품을 수정하는 데 실패했어요.',

  // DELETE
  FORBIDDEN_DELETE: '상품을 삭제할 권한이 없어요.',
  NOT_FOUND_DELETE: '삭제할 상품을 찾을 수 없어요.',
  DELETE_FAILED: '상품을 삭제하는 데 실패했어요.',

  // 목록 관련
  FETCH_ALL_FAILED: '상품 목록을 불러오는 데 실패했습니다.',
  FETCH_BEST_FAILED: '베스트 상품을 불러오는 데 실패했습니다.',
  FETCH_COMMENTS_FAILED: '댓글 정보를 불러오지 못했습니다.',
  ADD_ITEM_FAILED: '상품 등록 중 문제가 발생했습니다.',
};
