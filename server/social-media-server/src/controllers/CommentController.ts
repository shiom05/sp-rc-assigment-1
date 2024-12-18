import { Request, Response } from "express";
import { Comment } from "../models/comment";
import { Post } from "../models/post";

// Create a comment
export const createComment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { commentBody, postId } = req.body;
    console.log( { commentBody, postId } )

    if(!commentBody || commentBody===""){
        console.error("Comment body missing");
        res.status(404).json({ message: "Comment body missing" });
    }


    const post = await Post.findById(postId);
    console.log(post);
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }
    const newComment = new Comment({
      commentBody,
      postId,
    });

    const savedComment = await newComment.save();
   console.log(savedComment)

    // post.postComments.push(savedComment);
    // await post.save();

    res.status(201).json(savedComment);
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ message: "Server error." });
  }
};
