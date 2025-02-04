import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';  // Ensure Layout is the default export
import HomePage from './pages/home/HomePage';
import SignupChoice from './pages/Signup/SignupChoice';
import PromoterSignup from './pages/Signup/PromoterSignup';
import Login from './pages/login/Login';
import PromoterDashboardLayout from './pages/Dashboard/CustomerDashboard/layout/PromoterDashboardLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/PromoterDashboard" element={<PromoterDashboardLayout />} />
        
        {/* Wrap routes that need Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignupChoice />} />
          <Route path="PromoterSignup" element={<PromoterSignup />} />
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
