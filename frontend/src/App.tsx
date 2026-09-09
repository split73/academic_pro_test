import { Layout } from './components/layout/Layout/Layout';
import { Home } from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="app">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;