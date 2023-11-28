import ReactDom from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import React from 'react';

const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
