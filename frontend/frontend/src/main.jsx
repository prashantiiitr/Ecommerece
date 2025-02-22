import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import CaptainContext from './context/CaptainContext';
import UserContext from './context/UserContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CaptainContext>
        <UserContext>
          <App />
        </UserContext>
      </CaptainContext>
    </BrowserRouter>
  </StrictMode>
);
