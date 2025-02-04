import React from 'react';
import Sidebar from '../components/shared/Sidebar';
import { Outlet } from 'react-router-dom';

const PromoterDashboardLayout = () => {
  return (
    <div className="min-h-screen bg-[#1F2937] flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PromoterDashboardLayout;