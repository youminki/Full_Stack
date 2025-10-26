import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(createDto: CreatePostDto) {
    const created = new this.postModel(createDto);
    return created.save();
  }

  async findAll() {
    return this.postModel.find().exec();
  }

  async findOne(id: string) {
    const item = await this.postModel.findById(id).exec();
    if (!item) throw new NotFoundException('Post not found');
    return item;
  }

  async update(id: string, updateDto: UpdatePostDto) {
    const updated = await this.postModel
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();
    if (!updated) throw new NotFoundException('Post not found');
    return updated;
  }

  async remove(id: string) {
    const deleted = await this.postModel.findByIdAndDelete(id).exec();
    if (!deleted) throw new NotFoundException('Post not found');
    return { deleted: true };
  }
}
