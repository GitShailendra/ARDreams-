import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';  // Use named import
import HomePage from './pages/home/HomePage';
import SignupChoice from './pages/Signup/SignupChoice';
import PromoterSignup from './pages/Signup/PromoterSignup';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupChoice />} />
          <Route path="/PromoterSignup" element={<PromoterSignup />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;