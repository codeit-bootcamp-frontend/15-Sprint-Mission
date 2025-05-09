# ✅ Vanilla JS → React 마이그레이션 체크리스트

React로 마이그레이션하는 전 과정을 단계별로 정리한 체크리스트입니다.  
진행하면서 항목을 하나씩 체크해보세요!

---

## 1️⃣ 기본 환경 설정

- [x] 기존 프로젝트 백업
- [x] Vite 기반 React 프로젝트 생성
- [x] `CHECKLIST.md`, `README.md`, 등 설정

---

## 2️⃣ 폴더 구조 구성

- [x] `components/` 폴더 생성
- [x] `pages/` 폴더 생성
- [x] `styles/` 폴더 생성
- [x] `utils/`, `constants/` 폴더 생성 (필요 시)
- [x] `App.jsx` 생성 및 루트에서 관리
- [x] `main.jsx`에서 `App.jsx` 렌더링 설정

---

## 3️⃣ 라우팅 설정

- [x] `react-router-dom` 설치
- [x] `BrowserRouter`로 라우팅 구성
- [x] `Routes` 및 `Route` 정의
- [x] 각 페이지를 JSX 컴포넌트로 생성 (Home, Login 등)

---

## 4️⃣ 공통 레이아웃 구성

- [x] `Header`, `Footer`, `Navigation` 컴포넌트 생성
- [x] 레이아웃 컴포넌트에서 `<Outlet />` 사용
- [ ] 공통 레이아웃으로 전체 구성 확인

---

## 5️⃣ 페이지 마이그레이션

- [x] `index.html` → `Home.jsx`
- [x] `login.html` → `Login.jsx`
- [x] `signup.html` → `Signup.jsx`
- [x] 기타 페이지들도 마이그레이션

---

## 6️⃣ 스타일 적용

- [x] 기존 CSS → `styles/` 폴더에 정리
- [x] 각 컴포넌트에서 필요한 CSS import
- [x] CSS 파일 구조 및 분리 전략 결정

---

## 7️⃣ 기능 로직 이전

- [x] 로그인 / 회원가입 로직 마이그레이션
- [x] API 호출 관련 코드 React에 맞게 리팩토링
- [x] 공통 함수는 `utils/`로 이동

---

## 8️⃣ 상태 관리

- [x] `useState`, `useEffect` 등 훅 사용
- [ ] 필요 시 Context API 또는 외부 상태 관리 도입 검토

---

## 9️⃣ 마무리 정리

- [x] 전체 기능 테스트 완료
- [ ] 불필요한 파일/코드 정리
- [x] README 작성 및 업데이트
- [x] 커밋 정리 및 PR 제출

---
