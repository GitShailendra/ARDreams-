import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Users, WalletCards, Award, 
  UserCircle, LifeBuoy, LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { title: 'Dashboard', icon: Home, path: '/dashboard' },
    { title: 'Customers', icon: Users, path: '/dashboard/customers' },
    { title: 'Earnings', icon: WalletCards, path: '/dashboard/earnings' },
    { title: 'Level Status', icon: Award, path: '/dashboard/levels' },
    { title: 'Profile', icon: UserCircle, path: '/dashboard/profile' },
    { title: 'Support', icon: LifeBuoy, path: '/dashboard/support' }
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#2C3E50] text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-2xl font-bold">AR</span>
        <span className="text-2xl font-semibold text-[#F7A31C]">Dreams</span>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-lg
              ${isActive 
                ? 'bg-[#F7A31C] text-white' 
                : 'text-gray-300 hover:bg-white/10'
              }
              transition-colors duration-200
            `}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      <button 
        className="absolute bottom-8 left-4 right-4 flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors duration-200"
        onClick={() => {/* Add logout logic */}}
      >
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;