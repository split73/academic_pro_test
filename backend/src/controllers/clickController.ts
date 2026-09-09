import { Request, Response } from 'express';
import { ClickModel } from '../models/Click';
import { Click, BrandUrl } from '../types';

const BRAND_URLS: BrandUrl = {
  'Dell': 'https://www.dell.com',
  'Apple': 'https://www.apple.com',
  'Lenovo': 'https://www.lenovo.com',
  'HP': 'https://www.hp.com',
  'Asus': 'https://www.asus.com',
  'Microsoft': 'https://www.microsoft.com',
  'Samsung': 'https://www.samsung.com',
  'Acer': 'https://www.acer.com',
  'LG': 'https://www.lg.com',
  'Razer': 'https://www.razer.com',
  'MSI': 'https://www.msi.com',
  'Gigabyte': 'https://www.gigabyte.com',
};

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

function getStringFromQuery(param: any): string {
  if (typeof param === 'string') return param;
  
  if (Array.isArray(param) && param.length > 0) {
    const first = param[0];
    return typeof first === 'string' ? first : 'organic';
  }
  
  if (param && typeof param === 'object') {
    if (typeof param.toString === 'function') {
      const str = param.toString();
      if (str && str !== '[object Object]') return str;
    }
  }
  
  return 'organic';
}

export const handleClick = async (req: Request, res: Response): Promise<void> => {
  try {
    const { offer, sub1 = 'organic' } = req.query;

    if (!offer || typeof offer !== 'string') {
      res.status(400).json({
        success: false,
        error: 'Offer parameter is required',
      });
      return;
    }

    const brandUrl = BRAND_URLS[offer];

    if (!brandUrl) {
      res.status(404).json({
        success: false,
        error: `Brand "${offer}" not found`,
        availableBrands: Object.keys(BRAND_URLS),
      });
      return;
    }

    const clickId = generateClickId();
    const ip = getClientIP(req);
    const userAgent = req.get('User-Agent') || 'Unknown';
    const sub1String = getStringFromQuery(sub1);

    await ClickModel.create({
      click_id: clickId,
      offer: offer,
      sub1: sub1String,
      ip: ip,
      user_agent: userAgent,
    });

    console.log(`Click saved: ${clickId} for ${offer} (${sub1String})`);

    res.redirect(302, brandUrl);
  } catch (error) {
    console.error('Error saving click:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to save click',
    });
  }
};

export const getClicks = async (req: Request, res: Response): Promise<void> => {
  try {
    const limit = parseInt(req.query.limit as string) || 100;
    const offset = parseInt(req.query.offset as string) || 0;
    const offer = req.query.offer as string | undefined;

    let clicks: Click[];
    let total: number;

    if (offer) {
      clicks = await ClickModel.findByOffer(offer, limit);
      total = clicks.length;
    } else {
      clicks = await ClickModel.findAll(limit, offset);
      total = await ClickModel.countAll();
    }

    res.json({
      success: true,
      data: {
        clicks,
        pagination: {
          total,
          limit,
          offset,
          hasMore: offset + limit < total,
        },
      },
    });
  } catch (error) {
    console.error('Error fetching clicks:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch clicks',
    });
  }
};

export const getBrands = async (_req: Request, res: Response): Promise<void> => {
  res.json({
    success: true,
    data: {
      brands: Object.keys(BRAND_URLS),
      urls: BRAND_URLS,
    },
  });
};

export const getClickById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { clickId } = req.params;

    if (!clickId) {
      res.status(400).json({
        success: false,
        error: 'Click ID is required',
      });
      return;
    }

    const clickIdString = typeof clickId === 'string' ? clickId : 
                           Array.isArray(clickId) ? clickId[0] : '';

    if (!clickIdString) {
      res.status(400).json({
        success: false,
        error: 'Invalid Click ID',
      });
      return;
    }

    const click = await ClickModel.findByClickId(clickIdString);

    if (!click) {
      res.status(404).json({
        success: false,
        error: 'Click not found',
      });
      return;
    }

    res.json({
      success: true,
      data: click,
    });
  } catch (error) {
    console.error('Error fetching click:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch click',
    });
  }
};