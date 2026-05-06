import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // icons
import './styles.css'; // global styles (replace index.css)
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './CartContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// optional: keep for performance reporting if you use it
reportWebVitals();
