import { Router } from 'express';
import {
  handleClick,
  getClicks,
  getBrands,
  getClickById,
} from '../controllers/clickController';

const router = Router();

router.get('/click', handleClick);
router.get('/clicks', getClicks);
router.get('/clicks/:clickId', getClickById);
router.get('/brands', getBrands);

router.get('/health', (_req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});

export default router;