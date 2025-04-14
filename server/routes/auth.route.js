import express from 'express'

import  authenticateToken
 from '../middleware/authMiddleware.js'

import {
    signup,
    signin,
    getProfile
    

} from '../controllers/auth.controller.js'

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', authenticateToken, getProfile);

export default router;