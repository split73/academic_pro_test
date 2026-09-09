import { useCallback } from 'react';
import TagManager from 'react-gtm-module';

export const useGTM = () => {
  const pushEvent = useCallback((event: string, data?: Record<string, any>) => {
    if (import.meta.env.DEV) {
      console.log('📊 GTM Event:', event, data);
      return;
    }
    
    TagManager.dataLayer.push({
      event,
      ...data,
      timestamp: new Date().toISOString(),
    });
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