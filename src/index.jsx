import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import GarmentsList from './components/GarmentsList';
import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">
            <h1>My to sew list</h1>
            <h4>Iva's personal list of garments to sew </h4>
          </Link>
        </nav>
      </header>
      <GarmentsList />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
