import express from 'express';

import { protect } from '../middleware/authMiddleware.js';

import {
  signup,
  signin,
  getProfile
} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', protect, getProfile);

export default router;
