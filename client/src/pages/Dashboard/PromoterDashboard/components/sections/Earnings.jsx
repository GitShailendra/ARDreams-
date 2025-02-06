import React from 'react';
import { WalletCards, ArrowUpRight, Download } from 'lucide-react';

const Earnings = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Earnings & Withdrawals</h2>
        <button className="flex items-center gap-2 text-[#F7A31C] hover:text-[#E69016]">
          <Download className="w-5 h-5" />
          Download Statement
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <WalletCards className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-sm text-green-500 flex items-center">
              +12% <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
          <h3 className="text-sm text-gray-500">Available Balance</h3>
          <p className="text-2xl font-bold text-gray-900">₹12,400</p>
        </div>
        {/* Add more stat cards */}
      </div>

      {/* Withdrawal Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Request Withdrawal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C]"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bank Account
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C]">
              <option>Select Bank Account</option>
              {/* Add bank accounts */}
            </select>
          </div>
        </div>
        <button className="mt-4 bg-[#F7A31C] text-white px-6 py-2 rounded-lg hover:bg-[#E69016]">
          Request Withdrawal
        </button>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-800">Transaction History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* Add transaction rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Earnings;