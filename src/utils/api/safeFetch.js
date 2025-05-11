import HTTP_STATUS from '@/constants/statusCodes';
import { HTTP_ERROR_MESSAGES } from '@/constants/messages';

const safeFetch = async ({
  url,
  options,
  showToast,
  showToastOnError = true,
  uiErrorMessage = HTTP_ERROR_MESSAGES.UNKNOWN,
}) => {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      const message = errorData.message || uiErrorMessage;
      const error = new Error(message);
      error.status = res.status;
      throw error;
    }

    return await res.json();
  } catch (error) {
    // 콘솔 에러: 개발자용
    console.error(
      `🔴 요청 에러 [${error.status ?? 'unknown'}]:`,
      error.message,
    );

    // 에러 메시지: 사용자용
    if (showToast && showToastOnError) {
      let toastMessage = '';

      switch (error.status) {
        case HTTP_STATUS.UNAUTHORIZED:
          toastMessage = HTTP_ERROR_MESSAGES.UNAUTHORIZED;
          break;
        case HTTP_STATUS.FORBIDDEN:
          toastMessage = HTTP_ERROR_MESSAGES.FORBIDDEN;
          break;
        case HTTP_STATUS.NOT_FOUND:
          toastMessage = HTTP_ERROR_MESSAGES.NOT_FOUND;
          break;
        default:
          if (error.status >= 500) {
            toastMessage = HTTP_ERROR_MESSAGES.SERVER_ERROR;
          } else {
            toastMessage = error.message || uiErrorMessage;
          }
      }

      showToast(toastMessage, 'error');
    }

    throw error;
  }
};

export default safeFetch;
