import { HTTP_ERROR_MESSAGES } from '@/constants/messages';

const safeFetch = async ({ url, options }) => {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      const message = errorData.message || HTTP_ERROR_MESSAGES.UNKNOWN;

      const error = new Error(message);
      error.status = res.status;
      throw error;
    }

    return await res.json();
  } catch (error) {
    console.error(
      `🔴 요청 에러 [${error.status ?? 'unknown'}]:`,
      error.message,
    );

    throw error;
  }
};

export default safeFetch;
