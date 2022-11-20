import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GarmentDetailPage from './pages/GarmentDetailPage';
import Header from './components/Header/Header';
import './style.css';
import { garments } from './garments';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage garments={garments} />} />
        <Route
          path="/garments/:name"
          element={<GarmentDetailPage garments={garments} />}
        />
      </Routes>
    </>
  );
};

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
