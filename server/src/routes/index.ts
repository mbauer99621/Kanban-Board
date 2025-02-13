import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

// Public route for authentication (no token needed)
router.use('/auth', authRoutes);

// Apply authenticateToken middleware to API routes
router.use('/api', authenticateToken, apiRoutes);

export default router;