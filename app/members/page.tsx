import { Mail, GraduationCap, UserCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { professor, members, alumni } from "@/data/members";

function ProfessorCard() {
  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-muted">
          <UserCircle className="h-20 w-20 text-muted-foreground" />
        </div>
        <CardTitle className="text-2xl">{professor.name}</CardTitle>
        <p className="text-muted-foreground">{professor.position}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap justify-center gap-2">
          {professor.research?.map((r) => (
            <Badge key={r} variant="secondary">
              {r}
            </Badge>
          ))}
        </div>
        {professor.email && (
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>{professor.email}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function MemberCard({
  member,
}: {
  member: (typeof members)[number];
}) {
  return (
    <Card>
      <CardHeader className="text-center">
        <div className="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <UserCircle className="h-14 w-14 text-muted-foreground" />
        </div>
        <CardTitle className="text-lg">{member.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{member.position}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap justify-center gap-1">
          {member.research?.map((r) => (
            <Badge key={r} variant="outline" className="text-xs">
              {r}
            </Badge>
          ))}
        </div>
        {member.email && (
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Mail className="h-3 w-3" />
            <span>{member.email}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function MembersPage() {
  const phdMembers = members.filter((m) => m.role === "phd");
  const masterMembers = members.filter((m) => m.role === "master");
  const researchers = members.filter((m) => m.role === "researcher");

  return (
    <div className="py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
          구성원
        </h1>
        <p className="mt-2 text-center text-muted-foreground">
          AI 연구실의 구성원을 소개합니다.
        </p>

        {/* Professor */}
        <section className="mt-12">
          <ProfessorCard />
        </section>

        <Separator className="my-10" />

        {/* PhD Students */}
        {phdMembers.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              박사과정
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {phdMembers.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </section>
        )}

        {/* Master Students */}
        {masterMembers.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              석사과정
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {masterMembers.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </section>
        )}

        {/* Researchers */}
        {researchers.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <UserCircle className="h-5 w-5" />
              연구원
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {researchers.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </section>
        )}

        {/* Alumni */}
        {alumni.length > 0 && (
          <>
            <Separator className="my-10" />
            <section>
              <h2 className="text-xl font-semibold mb-6">졸업생</h2>
              <div className="space-y-3">
                {alumni.map((a) => (
                  <Card key={a.name}>
                    <CardContent className="flex items-center justify-between py-4">
                      <div>
                        <span className="font-medium">{a.name}</span>
                        <span className="ml-2 text-sm text-muted-foreground">
                          {a.degree}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {a.currentAffiliation}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
