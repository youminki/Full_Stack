import * as dotenv from "dotenv";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import * as express from "express";
import { existsSync } from "fs";

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // views 폴더를 앱의 뷰 디렉터리로 설정합니다
  // 빌드된(dist) 환경에서는 ../views 를, 개발환경에서는 ../src/views 를 우선 사용합니다
  const candidateBuild = join(__dirname, "..", "views");
  const candidateSrc = join(__dirname, "..", "src", "views");
  const viewsDir = existsSync(candidateBuild) ? candidateBuild : candidateSrc;
  app.setBaseViewsDir(viewsDir);
  // Handlebars 사용
  app.setViewEngine("hbs");

  // form POST urlencoded 파싱 허용
  app.use(express.urlencoded({ extended: true }));

  // Handlebars helper 등록 (간단한 산술/비교)
  try {
    // 'hbs' 패키지는 package.json에 포함되어 있습니다
    // 동적 import로 로드하고 타입 가드로 안전하게 registerHelper에 접근합니다
    const hbsModule: unknown = await import("hbs");
    const maybeRegister = (hbsModule as Record<string, unknown>)[
      "registerHelper"
    ];
    if (hbsModule && typeof maybeRegister === "function") {
      type HbsWithRegister = {
        registerHelper: (
          name: string,
          fn: (...args: unknown[]) => unknown,
        ) => void;
      };
      const hbsLib = hbsModule as HbsWithRegister;
      hbsLib.registerHelper(
        "add",
        (a: number, b: number) => Number(a) + Number(b),
      );
      hbsLib.registerHelper(
        "subtract",
        (a: number, b: number) => Number(a) - Number(b),
      );
      hbsLib.registerHelper(
        "gt",
        (a: number, b: number) => Number(a) > Number(b),
      );
      hbsLib.registerHelper(
        "lt",
        (a: number, b: number) => Number(a) < Number(b),
      );
      hbsLib.registerHelper(
        "eq",
        (a: unknown, b: unknown) => String(a) === String(b),
      );
    }
  } catch {
    // ignore if helper registration fails in some environments
  }

  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
