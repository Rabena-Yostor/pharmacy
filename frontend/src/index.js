import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MedicinesContextProvider } from './context/MedicinesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MedicinesContextProvider>
    <App />
    </MedicinesContextProvider>
  </React.StrictMode>
);
