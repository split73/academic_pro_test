import { Router } from 'express';
import { handleClick } from '../controllers/clickController';

const router = Router();

router.get('/click', handleClick);

router.get('/health', (_req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});

export default router;