import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./components/layout"; 
import Home from './pages/Home/Home'; 
import About from './pages/About/About'; 
import Error from './pages/NotFound/NotFound'; 

const AppRouter = () => {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/home" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} /> 
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
