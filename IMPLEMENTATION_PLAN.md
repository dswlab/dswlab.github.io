# 연구실 소개 홈페이지 제작 계획

## Context
연구실 소개용 홈페이지를 새로 제작합니다. Next.js + Shadcn UI + TypeScript 기반으로 개발하고, GitHub에 업로드 후 Vercel에 배포합니다.

## 기술 스택
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **UI**: Shadcn UI + Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Language**: 한국어만 (Light 테마만)

## 페이지 구성 (4 pages)

### 1. Home (`/`)
- **Hero Section**: 연구실 이름, 슬로건, 대표 이미지
- **연구실 소개**: 간단한 소개 텍스트
- **주요 연구 분야**: Research 페이지 하이라이트 (카드 형태, 3~4개)
- **최근 소식**: 최신 공지/뉴스 (2~3개)
- **Quick Links**: Members, Research, Publications 바로가기

### 2. Members (`/members`)
- **교수님**: 프로필 사진, 이름, 직위, 연락처, 연구 분야
- **구성원 목록**: 박사과정 / 석사과정 / 연구원 분류
  - 프로필 사진, 이름, 과정, 관심 분야
- **졸업생**: Alumni 목록 (선택적)

### 3. Research (`/research`)
- **연구 분야**: 각 연구 분야별 카드 (아이콘 + 제목 + 설명)
- **프로젝트**: 진행 중 / 완료된 프로젝트 목록

### 4. Publications (`/publications`)
- **논문**: 저자, 제목, 저널, 연도, 링크
- **카테고리 필터**: 연도별 또는 유형별 필터링
- **포맷**: 학술 논문 스타일 리스트

### 공통 컴포넌트
- **Header**: 로고, 네비게이션 메뉴 (Home, Members, Research, Publications)
- **Footer**: 연구실 주소, 연락처, 학교/학과 링크
- **Layout**: 반응형 (모바일/태블릿/데스크톱)

## 프로젝트 구조
```
vibeWebCreate_01/
├── app/
│   ├── layout.tsx          # Root layout (Header + Footer)
│   ├── page.tsx            # Home
│   ├── members/
│   │   └── page.tsx        # Members
│   ├── research/
│   │   └── page.tsx        # Research
│   └── publications/
│       └── page.tsx        # Publications
├── components/
│   ├── ui/                 # Shadcn UI 컴포넌트
│   ├── header.tsx          # 네비게이션 헤더
│   ├── footer.tsx          # 푸터
│   ├── hero.tsx            # Hero 섹션
│   ├── member-card.tsx     # 구성원 카드
│   ├── research-card.tsx   # 연구 분야 카드
│   └── publication-item.tsx # 논문 아이템
├── data/
│   ├── members.ts          # 구성원 더미 데이터
│   ├── research.ts         # 연구 분야 더미 데이터
│   └── publications.ts     # 논문 더미 데이터
├── lib/
│   └── utils.ts            # 유틸리티 함수
├── public/
│   └── images/             # 이미지 파일
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 구현 단계

### Step 1: 프로젝트 초기 설정
- `npx create-next-app@latest` 실행 (TypeScript, Tailwind, App Router)
- Shadcn UI 초기화 및 필수 컴포넌트 설치
  - Button, Card, Badge, Navigation Menu, Separator, Sheet (모바일 메뉴용)

### Step 2: 공통 레이아웃 (Header + Footer)
- 반응형 Header (데스크톱: 네비게이션 바 / 모바일: 햄버거 메뉴)
- Footer (연구실 정보, 연락처)

### Step 3: Home 페이지
- Hero 섹션
- 연구실 소개 섹션
- 주요 연구 분야 하이라이트
- 최근 소식 섹션

### Step 4: Members 페이지
- 교수님 프로필 섹션
- 구성원 그리드 (박사/석사/연구원 분류)
- 졸업생 섹션

### Step 5: Research 페이지
- 연구 분야 카드 그리드
- 프로젝트 목록

### Step 6: Publications 페이지
- 논문 목록 (연도별 정렬)
- 필터링 기능

### Step 7: 배포 준비
- GitHub 저장소 생성 및 업로드
- Vercel 프로젝트 연결 및 배포

## Shadcn 컴포넌트 사용 계획
| 컴포넌트 | 용도 |
|---------|------|
| Button | CTA, 네비게이션 |
| Card | 연구 분야, 구성원 카드 |
| Badge | 태그 (연구 분야, 논문 유형) |
| Separator | 섹션 구분선 |
| Sheet | 모바일 네비게이션 메뉴 |
| NavigationMenu | 헤더 네비게이션 |

## 데이터 관리
- 초기에는 `data/` 폴더에 TypeScript 파일로 더미 데이터 관리
- 향후 CMS나 데이터베이스 연동 가능하도록 분리

## 검증 방법
1. `npm run dev` 실행 후 각 페이지 렌더링 확인
2. 모바일/데스크톱 반응형 동작 확인
3. `npm run build` 성공 확인
4. Vercel 배포 후 실제 URL 접속 확인
