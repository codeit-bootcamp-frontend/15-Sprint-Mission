/**
 * 정수 배열에서 5와 0으로만 이루어진 정수만 찾아 배열에 담는 함수
 * @param {number[]} numbers - 검사할 정수 배열
 * @param {boolean} ascending - 정렬 방향 (true: 오름차순, false: 내림차순)
 * @returns {number[]} - 5와 0으로만 이루어진 정수 배열 또는 [-1]
 */
export function findNumbersWithOnlyFiveAndZero(numbers, ascending = true) {
  const result = numbers.filter(num => {
    // 숫자를 문자열로 변환
    const numStr = num.toString();
    
    // 모든 자릿수가 5 또는 0인지 확인
    return numStr.split('').every(digit => digit === '5' || digit === '0');
  });
  
  // 결과 배열이 비어있으면 [-1]을 반환
  if (result.length === 0) {
    return [-1];
  }
  
  // ascending 매개변수에 따라 오름차순 또는 내림차순으로 정렬
  return ascending 
    ? result.sort((a, b) => a - b)  // 오름차순
    : result.sort((a, b) => b - a); // 내림차순
} 