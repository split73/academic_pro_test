export interface Click {
  id: number;
  click_id: string;
  offer: string;
  sub1: string | null;
  ip: string | null;
  user_agent: string | null;
  created_at: Date;
}

export interface ClickInput {
  click_id: string;
  offer: string;
  sub1: string;
  ip: string;
  user_agent: string;
}

export interface BrandUrl {
  [key: string]: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}