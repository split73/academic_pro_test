import { useCallback } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const useGTM = () => {
  const pushEvent = useCallback((event: string, data?: Record<string, any>) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event,
        ...data,
        timestamp: new Date().toISOString(),
      });
    }
  }, []);

  const trackCTA = useCallback((brandName: string, location: string) => {
    pushEvent('ctaClick', {
      brandName,
      location,
      action: 'click',
      source: 'products_section',
    });
  }, [pushEvent]);

  const trackConversion = useCallback((conversionType: string, value?: number) => {
    pushEvent('conversion', {
      conversionType,
      value,
    });
  }, [pushEvent]);

  const trackProductView = useCallback((product: any) => {
    pushEvent('productView', {
      productId: product.id,
      productName: product.name,
      productCategory: product.category,
      productBrand: product.brand,
    });
  }, [pushEvent]);

  return { pushEvent, trackCTA, trackConversion, trackProductView };
};