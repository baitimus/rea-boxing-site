import { Router } from 'express';
import { register, login, getProfile, googleSignIn } from '../controllers/authController';
import { authMiddleware } from '../middleware/auth';

const router = Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/google', googleSignIn);

// Protected routes
router.get('/profile', authMiddleware, getProfile);

export default router;
