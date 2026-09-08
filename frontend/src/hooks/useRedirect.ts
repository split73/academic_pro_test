import { useCallback } from 'react';
import { useAnalytics } from './useAnalytics';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const useRedirect = () => {
  const { trackCTA } = useAnalytics();

  const handleCTAClick = useCallback((buttonName: string, sub1?: string) => {
    trackCTA(buttonName, sub1);
    const offer = 'Dell';
    const subParam = sub1 || buttonName;
    const redirectUrl = `${API_URL}/api/click?offer=${offer}&sub1=${subParam}`;
    window.location.href = redirectUrl;
  }, [trackCTA]);

  return { handleCTAClick };
};