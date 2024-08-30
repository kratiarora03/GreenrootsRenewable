import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Home from './pages/Home.jsx';

// Initialize Google Analytics with your tracking ID
ReactGA.initialize('G-41BQ0M7WMB');

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send('pageview');
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <PageTracker /> {/* This component handles page tracking */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
