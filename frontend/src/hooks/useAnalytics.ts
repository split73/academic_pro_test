import { useCallback } from 'react';
import { tracking } from '../services/tracking';

export const useAnalytics = () => {
  const handleCTAClick = useCallback((brandName: string, sub1?: string) => {
    tracking.trackCTAClick(brandName, sub1 || 'organic');
  }, []);

  return { handleCTAClick };
};