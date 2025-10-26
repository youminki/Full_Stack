import {
  Controller,
  Get,
  Post as HttpPost,
  Body,
  Param,
  Patch,
  Delete,
  Render,
} from "@nestjs/common";
import { PostService } from "./post.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Controller("posts")
export class PostController {
  constructor(private readonly service: PostService) {}

  @HttpPost()
  create(@Body() dto: CreatePostDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  // 웹 UI: 게시물 목록(Handlebars)
  @Get("web")
  @Render("posts/list")
  async renderList() {
    const posts = await this.service.findAll();
    return { posts };
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.service.findOne(id);
  }

  // 웹 UI: 게시물 상세(Handlebars)
  @Get("web/:id")
  @Render("posts/detail")
  async renderDetail(@Param("id") id: string) {
    const post = await this.service.findOne(id);
    return { post };
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdatePostDto) {
    return this.service.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.service.remove(id);
  }
}
