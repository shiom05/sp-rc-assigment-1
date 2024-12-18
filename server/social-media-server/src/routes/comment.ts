import { Router } from "express";
import { createComment } from "../controllers/CommentController";

const router = Router();

router.post("/", createComment);

export default router;
