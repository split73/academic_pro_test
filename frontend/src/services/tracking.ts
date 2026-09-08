interface AnalyticsEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

class TrackingService {
  private static instance: TrackingService;
  private initialized = false;

  private constructor() {}

  static getInstance(): TrackingService {
    if (!TrackingService.instance) {
      TrackingService.instance = new TrackingService();
    }
    return TrackingService.instance;
  }

  initialize(gaId: string, gtmId: string): void {
    if (this.initialized) return;
    this.initGA(gaId);
    this.initGTM(gtmId);
    this.initialized = true;
  }

  private initGA(gaId: string): void {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: any[]) {
      window.dataLayer.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', gaId);
  }

  private initGTM(gtmId: string): void {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
    document.head.appendChild(script);
  }

  trackEvent(event: AnalyticsEvent): void {
    if (!this.initialized) {
      console.warn('Tracking not initialized');
      return;
    }

    if (window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'custom_event',
        eventCategory: event.category,
        eventAction: event.action,
        eventLabel: event.label,
        eventValue: event.value,
      });
    }

    if (import.meta.env.DEV) {
      console.log('📊 Analytics Event:', event);
    }
  }

  trackPageView(path: string): void {
    if (!this.initialized) return;
    if (window.gtag) {
      window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
        page_path: path,
      });
    }
  }
}

export const tracking = TrackingService.getInstance();