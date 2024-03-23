import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Started from './pages/started';
function App() {
  return (
    //client side routing library is route
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/started" element={<Started />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
