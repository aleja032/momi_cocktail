import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarNavigation from '../components/BarNavigation';
import Home from '../pages/Home';
import DiscoverCocktail from '../pages/DiscoverCocktail';

function AppRoutes() {
  return (
    <Router>
      <BarNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DiscoverCocktail" element={<DiscoverCocktail />} />
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;
