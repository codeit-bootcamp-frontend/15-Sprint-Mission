# 🛠️ Vanilla JS → React 마이그레이션 프로젝트 (판다마켓)

이 프로젝트는 기존에 Vanilla JavaScript로 작성된 웹 애플리케이션을 **React** 기반으로 리팩토링하는 마이그레이션 작업입니다.  
유지보수성과 확장성을 높이기 위해 Vite, React, React Router 등을 도입했습니다.

---

## 📦 기술 스택

- React (with Vite)
- React Router DOM
- JavaScript (ES6+)
- CSS (컴포넌트별 분리)
- Git & GitHub

---

## 📁 폴더 구조 (초기 구성)

```
src/
├── api/             # api 파일
├── assets/          # 이미지, 로고, 아이콘 등
├── components/      # 공통 UI 컴포넌트
├── pages/           # 라우팅 기반 페이지 컴포넌트
├── styles/          # CSS 스타일 파일 모음
├── utils/           # 유틸 함수 (API, 공통 로직 등)
├── App.jsx          # 루트 컴포넌트
└── main.jsx         # 진입점
```

---

## 🚀 실행 방법

```bash
npm install
npm run dev
```

---

## ✅ 현재 진행 상황

- [x] Vite 기반 프로젝트 초기 세팅
- [x] 폴더 구조 정리 및 기본 구성
- [x] 페이지별 JSX 마이그레이션 작업 중
- [ ] 공통 컴포넌트 (Header, Footer) 구성 예정
- [ ] 기능 로직 이전 (API 호출, localStorage 등)
- [ ] 스타일 분리 및 리팩토링

👉 자세한 진행 내용은 [`CHECKLIST.md`](./CHECKLIST.md)를 참고해주세요.

---

## ✨ 마이그레이션 목적

- 유지보수 가능한 구조로 변경
- React의 컴포넌트 기반 UI 설계 적용
- 페이지 라우팅 및 상태 관리를 보다 효율적으로 구성
- CSS 파일 구조를 개선하고 재사용성 확보

---
