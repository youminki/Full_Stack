import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

export type PostDocument = Post & Document;

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop()
  content?: string;

  @Prop({ default: 0 })
  views?: number;
}

export const PostSchema: MongooseSchema = SchemaFactory.createForClass(
  Post,
) as unknown as MongooseSchema;
