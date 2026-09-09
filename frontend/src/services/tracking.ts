import ReactGA from 'react-ga4';
import TagManager from 'react-gtm-module';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const GTM_ID = import.meta.env.VITE_GTM_ID;
const isDevelopment = import.meta.env.DEV;

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const initGA = () => {
  if (isDevelopment) {
    return;
  }
  
  if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }
  
  if (GTM_ID) {
    TagManager.initialize({
      gtmId: GTM_ID,
      dataLayer: {
        environment: 'production',
        pageType: 'landing',
      },
    });
  }
};

export const trackPageView = (path: string) => {
  if (isDevelopment) {
    return;
  }
  
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  if (isDevelopment) {
    return;
  }
  
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
  
  TagManager.dataLayer.push({
    event: 'gaEvent',
    eventCategory: category,
    eventAction: action,
    eventLabel: label,
    eventValue: value,
  });
};

export const trackCTAClick = (brandName: string, sub1: string = 'organic') => {
  trackEvent('CTA', 'Click', brandName, 1);
  
  if (!isDevelopment) {
    TagManager.dataLayer.push({
      event: 'ctaClick',
      brandName: brandName,
      sub1: sub1,
      timestamp: new Date().toISOString(),
    });
  }
  
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
  const redirectUrl = `${backendUrl}/click?offer=${encodeURIComponent(brandName)}&sub1=${encodeURIComponent(sub1)}`;
  console.log(redirectUrl)
  if (isDevelopment) {
    return;
  }
  
  window.location.href = redirectUrl;
};

export const setUser = (userId: string, userData?: any) => {
  if (isDevelopment) {
    return;
  }
  
  ReactGA.set({ userId });
  
  TagManager.dataLayer.push({
    event: 'userLoggedIn',
    userId: userId,
    userData: userData,
  });
};

export const tracking = {
  initialize: initGA,
  trackPageView,
  trackEvent,
  trackCTAClick,
  setUser,
};

export default tracking;