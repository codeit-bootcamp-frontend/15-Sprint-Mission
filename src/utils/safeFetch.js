const safeFetch = async (fetchCall) => {
  try {
    const res = await fetchCall;

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({})); // res.json자체가 실패할 때는 빈 객체로 초기화
      const message = errorData.message || '🔴요청 실패';
      const error = new Error(message);
      error.status = res.status;
      throw error;
    }

    return await res.json();
  } catch (error) {
    console.error(`🔴응답 에러 [${error.status || 'unknown'}]:`, error.message);
    throw error; // 다시 throw 해서 호출부에서 catch하도록 함
  }
};

export default safeFetch;
