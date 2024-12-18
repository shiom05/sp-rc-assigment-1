import mongoose, { Schema } from "mongoose";
import { PostInterface } from "../consts/post";


const postSchema: Schema<PostInterface> = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  postTitle: {
    type: String,
    required: true
  },
  postDescription: {
    type: String,
    required: true
  },
  // postComments: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "comments"
  // }],
  postComments: {
    type: [String], // Array of strings
    required: true
  },
  postTitleColor: {
    type: String,
    required: true
  }
});

// Creating models

export const Post = mongoose.model<PostInterface>("posts", postSchema);

// export { Post };
