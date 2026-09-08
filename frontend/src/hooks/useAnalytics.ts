import { useCallback } from 'react';
import { tracking } from '../services/tracking.ts';

export const useAnalytics = () => {
  const trackCTA = useCallback((buttonName: string, sub1?: string) => {
    tracking.trackEvent({
      action: 'click',
      category: 'CTA',
      label: buttonName,
      value: sub1 ? 1 : 0,
    });
  }, []);

  return { trackCTA };
};