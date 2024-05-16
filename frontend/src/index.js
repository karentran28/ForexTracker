import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TradesContextProvider } from './context/TradesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TradesContextProvider>
      <App />
    </TradesContextProvider>
  </React.StrictMode>
);

