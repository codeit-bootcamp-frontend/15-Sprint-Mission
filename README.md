<!-- 추후 추가 수정 예정 -->

# 코드잇 스프린트 미션

기간: 2025-02-24 ~
배포:

## 미션 목록

<table>
  <thead>
    <tr>
      <th>미션</th>
      <th>날짜</th>
      <th>PR</th>
      <th>주요 내용</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>2025-02-24</td>
      <td><a href="https://github.com/codeit-bootcamp-frontend/15-Sprint-Mission/pull/10">#10</a></td>
      <td>랜딩 페이지의 HTML 및 CSS 구현</td>
    </tr>
    <tr>
      <td>2</td>
      <td>2025-03-05</td>
      <td><a href="https://github.com/codeit-bootcamp-frontend/15-Sprint-Mission/pull/44">#44</a></td>
      <td>회원가입 및 로그인 페이지의 HTML, CSS 구현</td>
    </tr>
    <tr>
      <td>3</td>
      <td>2025-03-07</td>
      <td><a href="https://github.com/codeit-bootcamp-frontend/15-Sprint-Mission/pull/60">#60</a></td>
      <td>반응형 디자인 구현(desktop-first, 1920px 이상 큰 모니터 기준), breakpoint: 1919px, 1199px, 767px</td>
    </tr>
    <tr>
      <td>4</td>
      <td>2025-03-18</td>
      <td><a href="https://github.com/codeit-bootcamp-frontend/15-Sprint-Mission/pull/101">#101</a></td>
      <td>JS기능 추가(DOM 요소 조작 및 이벤트 리스너), 회원가입, 로그인 폼 유효성 검사</td>
    </tr>
    <tr>
      <td>5</td>
      <td>2025-05-05</td>
      <td><a href="https://github.com/codeit-bootcamp-frontend/15-Sprint-Mission/pull/181">#181</a></td>
      <td>React, SCSS+CSS modules로 마이그레이션, items 페이지 구현(fetch data, 검색어, 정렬, pagination, 반응형 구현)</td>
    </tr>
    <tr>
      <td>6</td>
      <td>2025-05-11</td>
      <td><a href="https://github.com/codeit-bootcamp-frontend/15-Sprint-Mission/pull/203">#203</a></td>
      <td>상품 등록 페이지 구현, 토스트 생성, 에러 처리 로직을 safeFetch 함수로 분리, UI 에러 메시지 상수화</td>
    </tr>
    <tr>
      <td>7</td>
      <td>2025-05-11</td>
      <td><a href="https://github.com/codeit-bootcamp-frontend/15-Sprint-Mission/pull/">#</a></td>
      <td>상품 상세 페이지 구현</td>
    </tr>
  </tbody>
</table>

---

## 컨벤션

### 반응형

- desktop-first(1920이상) 큰 모니터
- breakpoint: 1919px(작은 모니터), 1199px(태블릿), 767px(모바일) (375px미만은 고려하지 않습니다.)

### 코드 작성 순서

하나의 JS 파일에서는 아래 순서를 따라 작성합니다:

1. Import 구문 (ESLint 설정)
2. 변수 선언
3. 함수 선언

### 경로

- 절대 경로 사용
- 같은 폴더 내에서는 상대 경로 사용

### 명명 규칙

1. **파일명, 폴더명**

- camelCase
- 컴포넌트 파일(JSX)는 파스칼케이스
- 이미지 파일 이름은 소문자로 작성하고, **언더스코어(\_)**를 사용하여 단어를 구분합니다.

2. **변수명, 함수명, 프로퍼티 키**:

- camelCase
- 컴포넌트는 파스칼케이스

### 함수 규칙

- **화살표 함수**를 기본으로 사용하되, this바인딩 고려 시 필요한 경우 일반 함수도 사용 가능 합니다.

### 컴포넌트 규칙

- 이미지 컴포넌트는 이름 뒤에 Img를 붙입니다.
- 아이콘 컴포넌트는 이름 뒤에 Icon을 붙입니다.

### 커밋 규칙

1. 커밋 메시지는 소문자로 작성합니다.
2. 커밋 메시지 본문 작성은 선택사항입니다.
3. 타입: 내용
   | **타입** | **내용** |
   |----------|-----------|
   | **feat** | 새로운 기능 추가 |
   | **fix** | 버그 수정 |
   | **docs** | 문서 변경 (README, Wiki 등) |
   | **style** | 코드 스타일 변경 (세미콜론, 공백, 들여쓰기 등) |
   | **refactor** | 코드 리팩토링 (기능 변경 없이 코드 구조나 가독성 개선) |
   | **perf** | 성능 개선 |
   | **test** | 테스트 코드 추가 및 수정 |
   | **chore** | 기타 일들 (빌드 스크립트, 환경 설정 등) |

## 폴더 구조

- Barrel 패턴 적용

```
마지막에 추가 할 예정
```

## 에러 처리 전략

> 모든 에러는 사용자에게 UX 혼란을 최소화하기 위한 피드백(UI/토스트 등)을 포함하여 처리됩니다.

### 1. 라우팅 오류

- 잘못된 경로 접근 시 → `404 페이지` → 랜딩 페이지로 이동 버튼

### 2. 전역 에러 (App 깨짐)

- 앱 전체 서버 에러 → `500 페이지` → 다시 시도 버튼

### 3. API 응답 에러 (safeFetch 내부 → 토스트 처리 )

| 상태 코드 | 처리 방식                  |
| --------- | -------------------------- |
| `401`     | 인증 필요 안내 토스트      |
| `403`     | 접근 권한 없음 안내 토스트 |
| `404`     | 없는 리소스 조회 시 토스트 |
| `500~599` | 서버 응답 오류 토스트 노출 |

### 4. 특정 컴포넌트 렌더 실패 (예: 이미지 리스트 하나가 깨짐)

- 해당 컴포넌트 수준에서 fallback UI 처리 예정
