// src/routes/AppRoutes.jsx
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
        {/* Puedes agregar más rutas aquí si las necesitas */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
