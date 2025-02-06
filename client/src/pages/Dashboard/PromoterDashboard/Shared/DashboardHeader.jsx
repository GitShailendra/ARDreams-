import { Menu, Bell, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardHeader = ({ toggleSidebar }) => {
    return (
      <header className="bg-white shadow-sm lg:fixed lg:w-[calc(100%-256px)] z-30">
        <div className="h-16 flex items-center justify-between px-4 ">
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
  
          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 rounded-md text-gray-500 hover:bg-gray-100 relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
  
            {/* Profile Dropdown */}
            <div className="relative">
              <button className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <span className="text-sm font-medium text-gray-700">John Doe</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
  
        {/* Breadcrumbs */}
        <div className="px-4 py-2 border-t">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/dashboard" className="hover:text-[#F7A31C]">Dashboard</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Overview</span>
          </div>
        </div>
      </header>
    );
  };
  
export default DashboardHeader;
