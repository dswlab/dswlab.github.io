import Link from "next/link";
import {
  Brain,
  MessageSquareText,
  Eye,
  BarChart3,
  ArrowRight,
  Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { researchAreas } from "@/data/research";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="h-8 w-8" />,
  MessageSquareText: <MessageSquareText className="h-8 w-8" />,
  Eye: <Eye className="h-8 w-8" />,
  BarChart3: <BarChart3 className="h-8 w-8" />,
};

const recentNews = [
  {
    title: "박박사님, AAAI 2025 논문 채택",
    date: "2025.03",
    badge: "논문",
  },
  {
    title: "과학기술정보통신부 신규 과제 수주",
    date: "2025.01",
    badge: "프로젝트",
  },
  {
    title: "최석사님, ICRA 2024 Best Paper Award 수상",
    date: "2024.11",
    badge: "수상",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 lg:py-28">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            AI 연구실
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80 sm:text-xl">
            인공지능 기술을 통해 더 나은 미래를 만들어갑니다.
            <br />
            창의적인 연구와 혁신적인 기술 개발을 추구합니다.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/research">
              <Button variant="secondary" size="lg">
                연구 분야 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/members">
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                구성원 소개
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              연구실 소개
            </h2>
            <p className="mt-4 text-muted-foreground leading-7">
              AI 연구실은 인공지능, 머신러닝, 자연어 처리, 컴퓨터 비전 등 다양한
              분야에서 최첨단 연구를 수행하고 있습니다. 우리는 기초 연구부터
              산업 응용까지 아우르며, 학문적 가치와 사회적 임팩트를 동시에
              추구합니다.
            </p>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Research Highlights */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              주요 연구 분야
            </h2>
            <p className="mt-2 text-muted-foreground">
              다양한 AI 분야에서 혁신적인 연구를 진행하고 있습니다.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((area) => (
              <Card key={area.title}>
                <CardHeader>
                  <div className="text-primary mb-2">
                    {iconMap[area.icon]}
                  </div>
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/research">
              <Button variant="outline">
                전체 연구 분야 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Recent News */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              최근 소식
            </h2>
          </div>
          <div className="mx-auto max-w-2xl space-y-4">
            {recentNews.map((news) => (
              <Card key={news.title}>
                <CardContent className="flex items-center gap-4 py-4">
                  <Newspaper className="h-5 w-5 shrink-0 text-muted-foreground" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{news.title}</p>
                    <p className="text-sm text-muted-foreground">{news.date}</p>
                  </div>
                  <Badge variant="secondary">{news.badge}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
