import React from 'react';
import { Activity, Users, FileText, Gift } from 'lucide-react';

export const OverviewSection = () => {
  const stats = [
    {
      title: 'Total Promoters',
      value: '127',
      change: '+8',
      icon: <Users className="w-6 h-6 text-blue-500" />,
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active Customers',
      value: '2,845',
      change: '+12%',
      icon: <Activity className="w-6 h-6 text-green-500" />,
      bgColor: 'bg-green-50'
    },
    {
      title: 'Pending KYC',
      value: '48',
      change: 'Urgent',
      icon: <FileText className="w-6 h-6 text-orange-500" />,
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Prize Pool',
      value: '₹50,000',
      change: 'This Month',
      icon: <Gift className="w-6 h-6 text-purple-500" />,
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                <p className="text-sm text-green-500 mt-2">{stat.change}</p>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <ActivityWidget />
        </div>

        {/* Recent KYC Verifications */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent KYC Verifications</h3>
          <KYCVerificationWidget />
        </div>
      </div>
    </div>
  );
};

// sections/CustomerSection.jsx
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

export const CustomerSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <select 
            className="border rounded-lg px-4 py-2"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Customers</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending KYC</option>
          </select>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Customer List */}
      <div className="bg-white rounded-lg shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-6">Customer</th>
              <th className="text-left py-4 px-6">Status</th>
              <th className="text-left py-4 px-6">Promoter</th>
              <th className="text-left py-4 px-6">Progress</th>
              <th className="text-left py-4 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Customer rows would go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// sections/KYCVerification.jsx
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export const KYCVerification = () => {
  return (
    <div className="space-y-6">
      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold">Pending Verification</h3>
          <p className="text-3xl font-bold mt-2">48</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold">Verified Today</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold">Average Time</h3>
          <p className="text-3xl font-bold mt-2">2.5h</p>
        </div>
      </div>

      {/* Verification Queue */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Verification Queue</h3>
        <div className="space-y-4">
          {/* Queue items would go here */}
        </div>
      </div>
    </div>
  );
};

// sections/LevelStatus.jsx
export const LevelStatus = () => {
  const levels = [
    { level: 0, range: '0-20 Customers', count: 20 },
    { level: 1, range: '21-50 Customers', count: 45 },
    { level: 2, range: '51-150 Customers', count: 32 },
    { level: 3, range: '151-300 Customers', count: 20 },
    { level: 4, range: '301-500 Customers', count: 8 },
    { level: 5, range: '501-700 Customers', count: 2 },
    { level: 6, range: '701+ Customers', count: 0 }
  ];

  return (
    <div className="space-y-6">
      {/* Level Distribution Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-6">Promoter Level Distribution</h3>
        <div className="grid grid-cols-7 gap-4 h-64">
          {levels.map((level, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex-1 w-full bg-gray-100 rounded-lg relative">
                <div 
                  className="absolute bottom-0 w-full bg-orange-500 rounded-b-lg transition-all duration-500"
                  style={{ height: `${(level.count / 45) * 100}%` }}
                ></div>
              </div>
              <p className="mt-2 font-medium">Level {level.level}</p>
              <p className="text-sm text-gray-500">{level.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Level Requirements */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Level Requirements</h3>
        <div className="space-y-4">
          {levels.map((level, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Level {level.level}</h4>
                <p className="text-sm text-gray-500">{level.range}</p>
              </div>
              <span className="text-orange-500 font-medium">{level.count} Promoters</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// sections/Earnings.jsx
export const Earnings = () => {
  return (
    <div className="space-y-6">
      {/* Earnings Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold">Total Revenue</h3>
          <p className="text-3xl font-bold mt-2">₹2,85,000</p>
          <p className="text-sm text-green-500 mt-2">+12% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold">Pending Withdrawals</h3>
          <p className="text-3xl font-bold mt-2">₹45,000</p>
          <p className="text-sm text-gray-500 mt-2">12 requests</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold">Prize Distribution</h3>
          <p className="text-3xl font-bold mt-2">₹50,000</p>
          <p className="text-sm text-gray-500 mt-2">This month</p>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
        {/* Transaction table would go here */}
      </div>
    </div>
  );
};

// sections/Support.jsx
export const Support = () => {
  return (
    <div className="space-y-6">
      {/* Ticket Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold">Open Tickets</h3>
          <p className="text-3xl font-bold mt-2">24</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold">Average Response</h3>
          <p className="text-3xl font-bold mt-2">2.5h</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold">Resolved Today</h3>

          <p className="text-3xl font-bold mt-2">18</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold">Customer Satisfaction</h3>
          <p className="text-3xl font-bold mt-2">94%</p>
        </div>
      </div>

      {/* Support Tickets */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Support Tickets</h3>
        <div className="space-y-4">
          {/* Ticket items would go here */}
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">Payment Issue</h4>
                <p className="text-sm text-gray-500">Ticket #1234</p>
                <p className="text-sm mt-2">Customer reporting payment not reflecting in account</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                In Progress
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// sections/Profile.jsx
export const Profile = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Profile Information */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
            <div>
              <h4 className="font-medium">John Doe</h4>
              <p className="text-sm text-gray-500">Super Admin</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                value="john@example.com"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input 
                type="tel" 
                value="+1 234 567 890"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
        <div className="space-y-4">
          <button className="w-full text-left px-4 py-2 border rounded-lg hover:bg-gray-50">
            Change Password
          </button>
          <button className="w-full text-left px-4 py-2 border rounded-lg hover:bg-gray-50">
            Two-Factor Authentication
          </button>
        </div>
      </div>
    </div>
  );
};

// sections/RejectionForm.jsx
export const RejectionForm = ({ onSubmit, onCancel }) => {
  const [reason, setReason] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ reason, additionalNotes });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Rejection Reason
        </label>
        <select
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
          required
        >
          <option value="">Select a reason</option>
          <option value="invalid_documents">Invalid Documents</option>
          <option value="incomplete_information">Incomplete Information</option>
          <option value="suspicious_activity">Suspicious Activity</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Additional Notes
        </label>
        <textarea
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
          rows={4}
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Submit Rejection
        </button>
      </div>
    </form>
  );
};

// shared/Sidebar.jsx
export const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    { label: 'Overview', icon: 'dashboard', path: '/admin/overview' },
    { label: 'Promoters', icon: 'group', path: '/admin/promoters' },
    { label: 'Customers', icon: 'people', path: '/admin/customers' },
    { label: 'KYC Verification', icon: 'verified_user', path: '/admin/kyc' },
    { label: 'Level Status', icon: 'trending_up', path: '/admin/levels' },
    { label: 'Earnings', icon: 'payments', path: '/admin/earnings' },
    { label: 'Support', icon: 'support_agent', path: '/admin/support' },
    { label: 'Settings', icon: 'settings', path: '/admin/settings' },
  ];

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50
      w-64 bg-white border-r shadow-sm
      transform transition-transform duration-200 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      md:translate-x-0
    `}>
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b">
          <span className="text-xl font-bold">AR Dreams Admin</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg
                    hover:bg-gray-50
                    ${location.pathname === item.path ? 'bg-orange-50 text-orange-500' : 'text-gray-700'}
                  `}
                >
                  <span className="material-icons">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Profile */}
        <div className="border-t p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};