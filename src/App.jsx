import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Started from './pages/started';
import MainLayout from './components/mainLayout';
import Show from './pages/show';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalTheam } from './theam';
const queryClient = new QueryClient();

function App() {
  return (
    //client side routing library is route
    <QueryClientProvider client={queryClient}>
      <GlobalTheam />
      <HashRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/started" element={<Started />} />
          </Route>
          <Route path="/show/:showId" element={<Show />} />
          <Route path="*" element={<div>Not found</div>}></Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
