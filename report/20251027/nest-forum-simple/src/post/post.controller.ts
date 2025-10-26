import {
  Controller,
  Get,
  Post as HttpPost,
  Body,
  Param,
  Patch,
  Delete,
  Render,
  Query,
  Res,
} from "@nestjs/common";
import type { Response } from "express";
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

  // 웹 UI: 게시물 목록(Handlebars) with pagination & search
  @Get("web")
  @Render("posts/list")
  async renderList(
    @Query() query: { skip?: string; limit?: string; q?: string }
  ) {
    const skip = parseInt(query.skip ?? "0", 10) || 0;
    const limit = parseInt(query.limit ?? "10", 10) || 10;
    const q = query.q ?? undefined;

    const posts = await this.service.findAll({ skip, limit, q });
    const total = await this.service.count(q);

    const prevExists = skip > 0;
    const nextExists = skip + limit < total;
    const prevSkip = Math.max(0, skip - limit);
    const nextSkip = skip + limit;
    const qparam = q ? `&q=${encodeURIComponent(q)}` : "";
    const prevUrl = `/posts/web?skip=${prevSkip}&limit=${limit}${qparam}`;
    const nextUrl = `/posts/web?skip=${nextSkip}&limit=${limit}${qparam}`;

    return {
      posts,
      q,
      skip,
      limit,
      total,
      prevExists,
      nextExists,
      prevUrl,
      nextUrl,
    };
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

  // 웹 UI: 게시물 수정 처리 (form POST)
  @HttpPost("web/:id/update")
  async webUpdate(
    @Param("id") id: string,
    @Body() body: Partial<CreatePostDto & UpdatePostDto>,
    @Res() res: Response
  ) {
    await this.service.update(id, body as UpdatePostDto);
    return res.redirect(`/posts/web/${id}`);
  }

  // 웹 UI: 게시물 삭제 처리 (form POST)
  @HttpPost("web/:id/delete")
  async webDelete(@Param("id") id: string, @Res() res: Response) {
    await this.service.remove(id);
    return res.redirect(`/posts/web`);
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
