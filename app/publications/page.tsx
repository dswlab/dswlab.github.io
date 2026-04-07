"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { publications } from "@/data/publications";

const years = Array.from(new Set(publications.map((p) => p.year))).sort(
  (a, b) => b - a
);

const types = [
  { value: "all", label: "전체" },
  { value: "journal", label: "저널" },
  { value: "conference", label: "학술대회" },
  { value: "workshop", label: "워크숍" },
] as const;

const typeLabel: Record<string, string> = {
  journal: "저널",
  conference: "학술대회",
  workshop: "워크숍",
};

export default function PublicationsPage() {
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filtered = publications.filter((p) => {
    if (selectedYear !== "all" && p.year !== selectedYear) return false;
    if (selectedType !== "all" && p.type !== selectedType) return false;
    return true;
  });

  return (
    <div className="py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
          출판물
        </h1>
        <p className="mt-2 text-center text-muted-foreground">
          연구실에서 발표한 논문 목록입니다.
        </p>

        {/* Filters */}
        <div className="mt-10 space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">연도</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedYear === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedYear("all")}
              >
                전체
              </Button>
              {years.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">유형</h3>
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <Button
                  key={type.value}
                  variant={selectedType === type.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type.value)}
                >
                  {type.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Publication List */}
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            총 {filtered.length}건
          </p>
          {filtered.map((pub, i) => (
            <Card key={i}>
              <CardContent className="py-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="flex-1 space-y-1">
                    <h3 className="font-medium leading-snug">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {pub.authors.join(", ")}
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      {pub.journal}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant="secondary">{typeLabel[pub.type]}</Badge>
                    <Badge variant="outline">{pub.year}</Badge>
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
