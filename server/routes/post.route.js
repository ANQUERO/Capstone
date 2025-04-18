import express from 'express';
import {
  createPost,
  addReaction,
  addComment,
  getPostWithDetails
} from '../controllers/post.controller.js';

const router = express.Router();

router.post("/", createPost);
router.post("/:postId/reactions", addReaction);
router.post("/:postId/comments", addComment);
router.get("/:postId", getPostWithDetails);

export default router;
