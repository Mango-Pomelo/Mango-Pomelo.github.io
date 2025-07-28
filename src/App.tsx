import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import HighlightStrip from './components/HighlightStrip';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <Router>
      <div className="bg-stone-50 min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <WhatWeDo />
              <HighlightStrip />
              <Footer />
            </>
          } />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;