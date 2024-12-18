import mongoose, { Document, Types } from "mongoose";

// Comment Interface
export interface CommentInterface extends Document {
  // _id: mongoose.Schema.Types.ObjectId;
  commentBody: string;
  postId: Types.ObjectId;
}
