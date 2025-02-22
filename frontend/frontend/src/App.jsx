import { useState } from 'react'
import react from 'react';

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Home from './pages/Home'; // Import Home component
import UserContext from './context/UserContext'; // Import UserContext
import CaptainContext from './context/CaptainContext';

const App = () => {
  return (
    <>
     <Routes>
     <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />

      <Route path="/Home" element={<Home />} /> {/* Make sure this is correct */}
     </Routes>
    </>
  )
}

export default App;
