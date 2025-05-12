import axios from "axios";
import {
  API_BASE_URL,
  API_HEADERS,
  API_TIMEOUT,
} from "../constants/apiConstants";

/** Axios 인스턴스 생성
 ** 기본 Content type은 application/json
 ** form-data 사용 시 개별 요청에서 헤더를 변경하세요.
 */
const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: API_HEADERS.JSON,
});

// 에러 메시지 추출 유틸 함수
const getErrorMessage = (error) => {
  const status = error?.response?.status;
  const message = error?.response?.data?.message;

  if (message) return message;
  if (status) return `요청에 실패했습니다. (Status: ${status})`;
  return "알 수 없는 오류가 발생했습니다.";
};

// 응답 인터셉터 - 서버에서 내려주는 message를 그대로 사용
instance.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(new Error(getErrorMessage(err)))
);

export { instance };
