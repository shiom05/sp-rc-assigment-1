import { Post } from "../models/post";
import { PostInterface } from "../consts/post";
import { Request, Response } from "express";

export const createPost = async (req: Request, res: Response) => {
  try {
    const { postTitle, postDescription, postTitleColor } = req.body;

    const newPost = new Post({
      postTitle,
      postDescription,
      postTitleColor,
      postComments: [],
    });

    const savedPost = await newPost.save();
    res.status(201).json({
      status: "SUCCESS",
      message: `Post saved succesfully : ${savedPost}`,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res
      .status(500)
      .json({
        status: "ERROR",
        message: "Server error. Unable to create post.",
      });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      status: "SUCCESS",
      message: "Post retrieved Successfully",
      posts,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res
      .status(500)
      .json({ status: "ERROR", message: "Error is retrieving posts" });
  }
};


export const addComment = async (req: Request, res: Response) => {
  const { postid, comment } = req.body;

  if (!postid || !comment) {
     res.status(400).json({ message: "Post ID and comment are required" });
     return;
  }

  try {
   console.log(postid);
    const post = await Post.findOne({postId: postid});
    console.log(post);
    if (!post) {
       res.status(404).json({ message: "Post not found" });
       return ;
    }

    post.postComments.push(comment);
    await post.save();

     res.status(200).json({status:'SUCCESS', message: "Comment added successfully to post", post });
  } catch (error) {
    console.error(error);
     res.status(500).json({status:'ERROR', message: "Server error encountered" });
  }
};