import React, { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { 
  Users, Activity, Gift, FileText, Settings, 
  LogOut, Menu, Bell, ChevronDown, Search,
  Wallet, UserCheck, HelpCircle, BarChart
} from 'lucide-react';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get current path without /dashboard/admin/
  const currentPath = location.pathname.split('/').pop() || 'overview';

  const navItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Activity className="w-5 h-5" />,
      path: '/dashboard/admin'
    },
    {
      id: 'promoters',
      label: 'Promoters',
      icon: <Users className="w-5 h-5" />,
      badge: 12,
      path: '/dashboard/admin/promoters'
    },
    {
      id: 'customers',
      label: 'Customers',
      icon: <UserCheck className="w-5 h-5" />,
      path: '/dashboard/admin/customers'
    },
    {
      id: 'prizes',
      label: 'Prize Management',
      icon: <Gift className="w-5 h-5" />,
      path: '/dashboard/admin/prizes'
    },
    {
      id: 'kyc',
      label: 'KYC Verification',
      icon: <FileText className="w-5 h-5" />,
      badge: 48,
      path: '/dashboard/admin/kyc'
    },
    {
      id: 'transactions',
      label: 'Transactions',
      icon: <Wallet className="w-5 h-5" />,
      path: '/dashboard/admin/transactions'
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: <BarChart className="w-5 h-5" />,
      path: '/dashboard/admin/analytics'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      path: '/dashboard/admin/settings'
    },
    {
      id: 'support',
      label: 'Support',
      icon: <HelpCircle className="w-5 h-5" />,
      path: '/dashboard/admin/support'
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b h-16 fixed top-0 left-0 right-0 z-30">
        <div className="flex items-center justify-between h-full px-4">
          {/* Left section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">AR</span>
              <span className="text-xl font-bold text-orange-500">Dreams</span>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Notifications */}
            <button className="p-2 rounded-lg hover:bg-gray-100 relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Admin Profile */}
            <div className="flex items-center space-x-3 border-l pl-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Admin</p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-16 bottom-0 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out z-20 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-left ${
                  currentPath === item.id
                    ? 'bg-orange-50 text-orange-500'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-600 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="border-t p-4">
            <button 
              className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 w-full px-4 py-3"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main 
        className={`pt-16 ${isSidebarOpen ? 'md:pl-64' : ''} min-h-screen transition-all duration-200`}
      >
        <div className="p-6">
          {/* Breadcrumb */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              {navItems.find(item => item.id === currentPath)?.label || 'Overview'}
            </h1>
            <p className="text-sm text-gray-500">
              Welcome to AR Dreams admin dashboard
            </p>
          </div>

          {/* Content Area */}
          <div className="space-y-6">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;