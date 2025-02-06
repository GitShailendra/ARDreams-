import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/home/HomePage';
import SignupChoice from './pages/Signup/SignupChoice';
import PromoterSignup from './pages/Signup/PromoterSignup';
import Login from './pages/login/Login';
import PromoterDashboardLayout from './pages/Dashboard/PromoterDashboard/layout/PromoterDashboardLayout';

// Import Dashboard Components
import Overview from './pages/Dashboard/PromoterDashboard/components/sections/OverviewSection';
import Earnings from './pages/Dashboard/PromoterDashboard/components/sections/Earnings';
import LevelStatus from './pages/Dashboard/PromoterDashboard/components/sections/LevelStatus';
import Profile from './pages/Dashboard/PromoterDashboard/components/sections/Profile';
import Support from './pages/Dashboard/PromoterDashboard/components/sections/Support';
import CustomerDetails from './pages/Dashboard/PromoterDashboard/components/sections/CustomerDetails';

// Import Customers Component (define it if it doesn't exist)
import Customers from './pages/Dashboard/PromoterDashboard/components/sections/CustomerSection'; // Make sure this file exists

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupChoice />} />
          <Route path="/PromoterSignup" element={<PromoterSignup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<PromoterDashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="customers" element={<Customers />} />
          <Route path="promoter/customers/:id" element={<CustomerDetails />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="levels" element={<LevelStatus />} />
          <Route path="profile" element={<Profile />} />
          <Route path="support" element={<Support />} />
        </Route>

        {/* 404 Route */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-[#F7A31C]">404</h1>
                <p className="text-xl text-gray-600 mt-4">Page not found</p>
                <a href="/" className="mt-6 inline-block text-[#F7A31C] hover:underline">
                  Go back home
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
