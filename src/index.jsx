import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>My to sew list</h1>
        <h4>Iva's personal list of garments to sew </h4>
      </header>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
