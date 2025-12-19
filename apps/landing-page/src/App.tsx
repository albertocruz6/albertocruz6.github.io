import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <HashRouter>
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </HashRouter>
    </React.Fragment>
  );
};

export default App;
