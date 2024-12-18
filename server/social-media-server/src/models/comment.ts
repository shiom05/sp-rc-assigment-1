import mongoose, { Document, Schema } from "mongoose";
import { CommentInterface } from "../consts/comment";

// Comment Schema
const commentSchema: Schema<CommentInterface> = new Schema({
  commentBody: {
    type: String,
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
    required: true,
  },
});

export const Comment = mongoose.model<CommentInterface>("comments", commentSchema);
