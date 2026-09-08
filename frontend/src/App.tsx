import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from './components/layout/Layout/Layout';
import { Home } from './pages/Home/Home';
import { useRedirect } from './hooks/useRedirect';
import { tracking } from './services/tracking';
import './App.css';

function App() {
  const { handleCTAClick } = useRedirect();

  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
    const gtmId = import.meta.env.VITE_GTM_ID || 'GTM-XXXXXXX';
    tracking.initialize(gaId, gtmId);
    tracking.trackPageView(window.location.pathname);
  }, []);

  return (
    <div className="app">
      <Helmet>
        <title>Dell - Power to Do More</title>
        <meta name="description" content="Discover innovative solutions from Dell Technologies." />
      </Helmet>
      <Layout onCTAClick={handleCTAClick}>
        <Home onCTAClick={handleCTAClick} />
      </Layout>
    </div>
  );
}

export default App;