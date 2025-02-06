import { Home, Users, WalletCards, Award, User, LifeBuoy, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = ({ isOpen, setIsOpen }) => {
    const navItems = [
      { path: '/dashboard', icon: Home, label: 'Overview' },
      { path: '/dashboard/customers', icon: Users, label: 'Customers' },
      { path: '/dashboard/earnings', icon: WalletCards, label: 'Earnings' },
      { path: '/dashboard/levels', icon: Award, label: 'Level Status' },
      { path: '/dashboard/profile', icon: User, label: 'Profile' },
      { path: '/dashboard/support', icon: LifeBuoy, label: 'Support' }
    ];
  
    return (
      <>
        {/* Mobile Backdrop */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
  
        {/* Sidebar */}
        <div className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-200 ease-in-out lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-[#1F2937]">AR</span>
              <span className="text-2xl font-semibold text-[#F7A31C]">Dreams</span>
            </div>
          </div>
  
          {/* Navigation */}
          <nav className="mt-6 px-4">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center space-x-3 px-4 py-3 rounded-lg mb-2
                  ${isActive 
                    ? 'bg-[#F7A31C] text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
  
          {/* Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <button 
              onClick={() => {/* Add logout logic */}}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </>
    );
  };
  
  export default DashboardSidebar;