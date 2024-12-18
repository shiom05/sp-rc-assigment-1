import { Document, Types } from "mongoose";
import { CommentInterface } from "./comment";
import mongoose from "mongoose";

export interface PostInterface extends Document {
  postId: mongoose.default.ObjectId;
  postTitle: string;
  postDescription: string;
  // postComments: Types.ObjectId[];
  postComments: string[];
  postTitleColor: string;
}
