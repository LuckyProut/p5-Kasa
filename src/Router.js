import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./layout/layout"; 
import Home from './pages/Home/Home'; 
import About from './pages/About/About'; 
import NotFound from './pages/NotFound/NotFound'; 

const AppRouter = () => {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
