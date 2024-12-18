import { Router } from "express";
import { createPost, getPosts, addComment} from "../controllers/PostController";
import { validatePostReq } from "../middlewear/postValidation/ValidatePost";

const router = Router();


router.post("/", validatePostReq(),  createPost);
router.get("/", getPosts);
router.put("/", addComment);

export default router;
