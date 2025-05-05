<!-- 추후 추가 수정 예정 -->

# 코드잇 스프린트 미션

기간: 2025-02-24 ~
배포:

## 미션 목록

| 미션 | 날짜       | PR                                                                             | 주요 내용                                                                                        |
| ---- | ---------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 1    | 2025-02-24 | [#10](https://github.com/codeit-bootcamp-frontend/15-Sprint-Mission/pull/10)   | 랜딩 페이지의 HTML 및 CSS 구현                                                                   |
| 2    | 2025-03-05 | [#44](https://github.com/codeit-bootcamp-frontend/15-Sprint-Mission/pull/44)   | 회원가입 및 로그인 페이지의 HTML, CSS 구현                                                       |
| 3    | 2025-03-07 | [#60](https://github.com/codeit-bootcamp-frontend/15-Sprint-Mission/pull/60)   | 반응형 디자인 구현(desktop-first, 1920px 이상 큰 모니터 기준), breakpoint: 1919px, 1199px, 767px |
| 4    | 2025-03-18 | [#101](https://github.com/codeit-bootcamp-frontend/15-Sprint-Mission/pull/101) | JS기능 추가(DOM 요소 조작 및 이벤트 리스너), 회원가입, 로그인 폼 유효성 검사                     |
| 5    | 2025-05-   | [#](https://github.com/codeit-bootcamp-frontend/15-Sprint-Mission/pull/)       | React, SCSS+CSS modules로 마이그레이션,                                                          |

---

## 컨벤션

### 반응형

- desktop-first(1920이상) 큰 모니터
- breakpoint: 1919px(작은 모니터), 1199px(태블릿), 767px(모바일) (375px미만은 고려하지 않습니다.)

### 코드 작성 순서

하나의 JS 파일에서는 아래 순서를 따라 작성합니다:

1. Import 구문

```
1. 외부 라이브러리 (css는 마지막)
import React from 'react';
import axios from 'axios';

2. 내부 커스텀 훅
import { useForm } from '@/hooks/useForm';

2. 절대 경로 기반 내부 모듈
컴포넌트 > 유틸함수 > 상수 > assets(이미지,gif)


3. 상대 경로 기반 내부 모듈 (스타일 파일 마지막)
import styles from './LandingSection.module.scss';
```

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
