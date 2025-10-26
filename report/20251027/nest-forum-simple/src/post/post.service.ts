import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, isValidObjectId, FilterQuery } from "mongoose";
import { Post, PostDocument } from "./schemas/post.schema";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(createDto: CreatePostDto) {
    const created = new this.postModel(createDto);
    return created.save();
  }

  /**
   * findAll with pagination and optional text search (regex on title/content)
   * @param options.skip number of documents to skip
   * @param options.limit maximum number of documents to return
   * @param options.q optional search string (regex, case-insensitive)
   */
  async findAll(options?: { skip?: number; limit?: number; q?: string }) {
    const { skip = 0, limit = 10, q } = options ?? {};
    const filter: FilterQuery<PostDocument> = {};
    if (q) {
      const re = new RegExp(q, "i");
      filter.$or = [{ title: re }, { content: re }];
    }
    return this.postModel.find(filter).skip(skip).limit(limit).exec();
  }

  async count(q?: string) {
    const filter: FilterQuery<PostDocument> = {};
    if (q) {
      const re = new RegExp(q, "i");
      filter.$or = [{ title: re }, { content: re }];
    }
    return this.postModel.countDocuments(filter).exec();
  }

  async findOne(id: string) {
    // 유효한 ObjectId인지 검사하여 CastError를 방지
    if (!isValidObjectId(id)) throw new NotFoundException("Post not found");
    const item = await this.postModel.findById(id).exec();
    if (!item) throw new NotFoundException("Post not found");
    return item;
  }

  async update(id: string, updateDto: UpdatePostDto) {
    const updated = await this.postModel
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();
    if (!updated) throw new NotFoundException("Post not found");
    return updated;
  }

  async remove(id: string) {
    const deleted = await this.postModel.findByIdAndDelete(id).exec();
    if (!deleted) throw new NotFoundException("Post not found");
    return { deleted: true };
  }
}
