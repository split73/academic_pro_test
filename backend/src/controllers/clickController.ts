import { Request, Response } from 'express';
import { ClickModel } from '../models/Click';

const DELL_URL = 'https://www.dell.com';

function generateClickId(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 11);
  return `click_${timestamp}_${random}`;
}

function getClientIP(req: Request): string {
  return (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
         req.socket?.remoteAddress ||
         req.ip ||
         'unknown';
}

export const handleClick = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sub1 = 'organic' } = req.query;
    const clickId = generateClickId();
    const ip = getClientIP(req);
    const userAgent = req.get('User-Agent') || 'Unknown';
    const sub1String = typeof sub1 === 'string' ? sub1 : 'organic';

    await ClickModel.create({
      click_id: clickId,
      offer: 'Dell',
      sub1: sub1String,
      ip: ip,
      user_agent: userAgent,
    });

    console.log(`Click saved: ${clickId} for Dell (${sub1String})`);

    res.redirect(302, DELL_URL);
  } catch (error) {
    console.error('Error saving click:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to save click',
    });
  }
};
