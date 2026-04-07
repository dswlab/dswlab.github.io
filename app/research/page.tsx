import {
  Brain,
  MessageSquareText,
  Eye,
  BarChart3,
  CircleDot,
  CheckCircle2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { researchAreas, projects } from "@/data/research";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="h-8 w-8" />,
  MessageSquareText: <MessageSquareText className="h-8 w-8" />,
  Eye: <Eye className="h-8 w-8" />,
  BarChart3: <BarChart3 className="h-8 w-8" />,
};

export default function ResearchPage() {
  const ongoingProjects = projects.filter((p) => p.status === "ongoing");
  const completedProjects = projects.filter((p) => p.status === "completed");

  return (
    <div className="py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
          연구
        </h1>
        <p className="mt-2 text-center text-muted-foreground">
          AI 연구실의 주요 연구 분야와 프로젝트를 소개합니다.
        </p>

        {/* Research Areas */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">연구 분야</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {researchAreas.map((area) => (
              <Card key={area.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{iconMap[area.icon]}</div>
                    <CardTitle>{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-sm">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Ongoing Projects */}
        {ongoingProjects.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <CircleDot className="h-5 w-5 text-green-600" />
              진행 중인 프로젝트
            </h2>
            <div className="space-y-4">
              {ongoingProjects.map((project) => (
                <Card key={project.title}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-lg">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="default"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          진행 중
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {project.period}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    {project.funding && (
                      <p className="mt-2 text-sm">
                        <span className="font-medium">지원기관:</span>{" "}
                        {project.funding}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Completed Projects */}
        {completedProjects.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
              완료된 프로젝트
            </h2>
            <div className="space-y-4">
              {completedProjects.map((project) => (
                <Card key={project.title}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-lg">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">완료</Badge>
                        <span className="text-sm text-muted-foreground">
                          {project.period}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    {project.funding && (
                      <p className="mt-2 text-sm">
                        <span className="font-medium">지원기관:</span>{" "}
                        {project.funding}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
