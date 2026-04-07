export interface Member {
  name: string;
  role: "professor" | "phd" | "master" | "researcher" | "alumni";
  position?: string;
  email?: string;
  image?: string;
  research?: string[];
  degree?: string;
  currentAffiliation?: string; // alumni only
}

export const professor: Member = {
  name: "김연구",
  role: "professor",
  position: "정교수",
  email: "kim@university.ac.kr",
  research: ["인공지능", "머신러닝", "자연어처리"],
  image: "/images/professor.jpg",
};

export const members: Member[] = [
  {
    name: "이박사",
    role: "phd",
    position: "박사과정 3년",
    email: "lee@university.ac.kr",
    research: ["딥러닝", "컴퓨터비전"],
  },
  {
    name: "박박사",
    role: "phd",
    position: "박사과정 1년",
    email: "park@university.ac.kr",
    research: ["자연어처리", "대형언어모델"],
  },
  {
    name: "최석사",
    role: "master",
    position: "석사과정 2년",
    email: "choi@university.ac.kr",
    research: ["강화학습", "로봇공학"],
  },
  {
    name: "정석사",
    role: "master",
    position: "석사과정 1년",
    email: "jung@university.ac.kr",
    research: ["데이터 마이닝", "추천 시스템"],
  },
  {
    name: "한연구",
    role: "researcher",
    position: "연구원",
    email: "han@university.ac.kr",
    research: ["AI 의료", "생체신호처리"],
  },
];

export const alumni: Member[] = [
  {
    name: "김졸업",
    role: "alumni",
    degree: "박사 (2023)",
    currentAffiliation: "ㅇㅇ대학교 조교수",
  },
  {
    name: "이졸업",
    role: "alumni",
    degree: "석사 (2024)",
    currentAffiliation: "ㅇㅇ기업 연구원",
  },
  {
    name: "박졸업",
    role: "alumni",
    degree: "석사 (2024)",
    currentAffiliation: "ㅇㅇ연구소 선임연구원",
  },
];
