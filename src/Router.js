import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; 
import About from './About'; 
import NotFound from './NotFound'; 

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Utilisez 'element' au lieu de 'component' */}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* Route pour gérer les pages non trouvées */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
