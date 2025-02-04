import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../Shared/DashboardSidebar';
import DashboardHeader from '../Shared/DashboardHeader';

const PromoterDashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      {/* Main Content */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <DashboardHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page Content */}
        <main className="flex-1 p-6 mt-24 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default PromoterDashboardLayout;
