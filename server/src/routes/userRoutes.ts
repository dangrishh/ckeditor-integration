import { Router } from 'express';
import { registerUser, loginUser, getUser, tokenEndpoint } from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', authMiddleware, getUser);
router.get('/token', authMiddleware, tokenEndpoint);

export default router;
