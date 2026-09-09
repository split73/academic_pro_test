const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export interface ClickResponse {
  success: boolean;
  data?: {
    clicks: any[];
    pagination: {
      total: number;
      limit: number;
      offset: number;
      hasMore: boolean;
    };
  };
  error?: string;
}

export interface Brand {
  brands: string[];
  urls: Record<string, string>;
}

export const api = {
  trackClick: (offer: string, sub1: string = 'organic') => {
    const url = `${API_BASE_URL}/click?offer=${encodeURIComponent(offer)}&sub1=${encodeURIComponent(sub1)}`;
    window.location.href = url;
  },
};