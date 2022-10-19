import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GarmentDetailPage from './pages/GarmentDetailPage';
import Header from './components/Header';
import './style.css';
import { garments } from './garments';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/">
          <HomePage data={garments} />
        </Route> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/garments/:name" element={<GarmentDetailPage />} />
        {/* <Route path="/garments/:name">
          <GarmentDetailPage data={garments} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
