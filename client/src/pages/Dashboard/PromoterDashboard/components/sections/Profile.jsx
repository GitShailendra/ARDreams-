// pages/Dashboard/components/sections/Profile.jsx
import React from 'react';
import { User, Mail, Phone, MapPin, Building } from 'lucide-react';

const Profile = () => {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full bg-gray-200"></div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
            <p className="text-gray-500">Promoter ID: AR001</p>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C]"
              value="John Doe"
              readOnly
            />
          </div>
          {/* Add more fields */}
        </div>
      </div>

      {/* Bank Details */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Bank Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bank fields */}
        </div>
      </div>

      {/* Document Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Document preview cards */}
        </div>
      </div>
    </div>
  );
};

export default Profile;