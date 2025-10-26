import * as dotenv from "dotenv";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // views 폴더를 앱의 뷰 디렉터리로 설정합니다
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  // Handlebars 사용
  app.setViewEngine("hbs");

  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
