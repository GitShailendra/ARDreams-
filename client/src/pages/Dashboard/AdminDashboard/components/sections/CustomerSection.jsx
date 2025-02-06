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