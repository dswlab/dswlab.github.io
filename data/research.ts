export interface ResearchArea {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface Project {
  title: string;
  description: string;
  status: "ongoing" | "completed";
  period: string;
  funding?: string;
}

export const researchAreas: ResearchArea[] = [
  {
    title: "인공지능 및 머신러닝",
    description:
      "딥러닝 기반의 새로운 학습 알고리즘을 연구하고, 실제 문제에 적용 가능한 AI 모델을 개발합니다.",
    icon: "Brain",
  },
  {
    title: "자연어 처리",
    description:
      "대형 언어 모델(LLM)의 한국어 이해도 향상과 효율적인 파인튜닝 기법을 연구합니다.",
    icon: "MessageSquareText",
  },
  {
    title: "컴퓨터 비전",
    description:
      "의료 영상 분석, 객체 탐지, 영상 생성 등 다양한 컴퓨터 비전 기술을 연구합니다.",
    icon: "Eye",
  },
  {
    title: "데이터 과학",
    description:
      "대규모 데이터로부터 유의미한 패턴을 발견하고, 데이터 기반 의사결정을 지원하는 기술을 개발합니다.",
    icon: "BarChart3",
  },
];

export const projects: Project[] = [
  {
    title: "한국어 특화 대형언어모델 개발",
    description:
      "한국어 문화와 맥락을 깊이 이해하는 도메인 특화 LLM을 개발하는 프로젝트입니다.",
    status: "ongoing",
    period: "2024.03 - 현재",
    funding: "과학기술정보통신부",
  },
  {
    title: "AI 기반 의료 영상 진단 보조 시스템",
    description:
      "딥러닝을 활용하여 의료 영상에서 질환을 조기에 탐지하는 시스템을 개발합니다.",
    status: "ongoing",
    period: "2023.09 - 현재",
    funding: "보건복지부",
  },
  {
    title: "지능형 추천 시스템 연구",
    description:
      "사용자 행동 패턴을 분석하여 개인화된 추천을 제공하는 시스템을 연구했습니다.",
    status: "completed",
    period: "2022.03 - 2024.02",
    funding: "산업통상자원부",
  },
];
