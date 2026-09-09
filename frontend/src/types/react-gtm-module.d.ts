declare module 'react-gtm-module' {
  export interface TagManagerArgs {
    gtmId: string;
    dataLayer?: Record<string, any>;
    dataLayerName?: string;
    auth?: string;
    preview?: string;
  }

  const TagManager: {
    initialize: (args: TagManagerArgs) => void;
    dataLayer: {
      push: (data: Record<string, any>) => void;
    };
  };

  export default TagManager;
}