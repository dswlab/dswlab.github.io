import { FlaskConical, MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Lab Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FlaskConical className="h-5 w-5 text-primary" />
              <span className="font-bold">AI 연구실</span>
            </div>
            <p className="text-sm text-muted-foreground">
              인공지능 기술을 통해 더 나은 미래를 만들어가는 연구실입니다.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">연락처</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                ㅇㅇ시 ㅇㅇ구 대학로 123, ㅇㅇ대학교 공과대학 4호관 302호
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                02-123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                ailab@university.ac.kr
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3">관련 링크</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://university.ac.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  ㅇㅇ대학교
                </a>
              </li>
              <li>
                <a
                  href="https://cse.university.ac.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  컴퓨터공학과
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} AI 연구실. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
