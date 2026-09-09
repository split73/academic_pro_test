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

  getClicks: async (limit: number = 100, offset: number = 0, offer?: string): Promise<ClickResponse> => {
    let url = `${API_BASE_URL}/clicks?limit=${limit}&offset=${offset}`;
    if (offer) {
      url += `&offer=${encodeURIComponent(offer)}`;
    }
    
    const response = await fetch(url);
    return response.json();
  },

  getBrands: async (): Promise<{ success: boolean; data: Brand }> => {
    const response = await fetch(`${API_BASE_URL}/brands`);
    return response.json();
  },

  getClickById: async (clickId: string): Promise<{ success: boolean; data: any }> => {
    const response = await fetch(`${API_BASE_URL}/clicks/${clickId}`);
    return response.json();
  },

  healthCheck: async (): Promise<{ status: string; timestamp: string; environment: string }> => {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.json();
  },
};