export interface Publication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  type: "journal" | "conference" | "workshop";
  doi?: string;
}

export const publications: Publication[] = [
  {
    title: "Efficient Fine-tuning Strategies for Korean Large Language Models",
    authors: ["김연구", "이박사", "박박사"],
    journal: "Journal of Natural Language Processing",
    year: 2025,
    type: "journal",
    doi: "10.1234/jnlp.2025.001",
  },
  {
    title: "Deep Learning-Based Medical Image Analysis for Early Disease Detection",
    authors: ["김연구", "한연구", "최석사"],
    journal: "IEEE Transactions on Medical Imaging",
    year: 2025,
    type: "journal",
    doi: "10.1109/TMI.2025.001",
  },
  {
    title: "Reinforcement Learning for Autonomous Robot Navigation in Complex Environments",
    authors: ["최석사", "김연구"],
    journal: "International Conference on Robotics and Automation (ICRA)",
    year: 2024,
    type: "conference",
  },
  {
    title: "A Survey on Personalized Recommendation Systems using Graph Neural Networks",
    authors: ["정석사", "김연구", "김졸업"],
    journal: "ACM Conference on Recommender Systems",
    year: 2024,
    type: "conference",
  },
  {
    title: "Multi-Modal Learning for Visual Question Answering in Korean",
    authors: ["박박사", "이박사", "김연구"],
    journal: "Findings of ACL",
    year: 2024,
    type: "conference",
  },
  {
    title: "Data-Driven Approaches for Smart Manufacturing Process Optimization",
    authors: ["김연구", "이졸업"],
    journal: "Computers & Industrial Engineering",
    year: 2023,
    type: "journal",
    doi: "10.1016/cie.2023.001",
  },
  {
    title: "Lightweight Object Detection for Edge Computing Devices",
    authors: ["한연구", "김연구"],
    journal: "Workshop on Efficient Deep Learning for Computer Vision (CVPR Workshop)",
    year: 2023,
    type: "workshop",
  },
];
