import React from 'react';

const EarningsWidget = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-sm text-gray-600 mb-4">Available for Withdrawal</h3>
      
      <div className="mb-6">
        <p className="text-2xl font-bold text-gray-900">₹12,400</p>
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-sm text-green-500">+₹2,400</span>
          <span className="text-xs text-gray-500">from last month</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Active Customers</span>
          <span className="text-gray-900">98/127</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full"
            style={{ width: '77%' }}
          ></div>
        </div>
        <p className="text-xs text-gray-500">
          77% customers active this month
        </p>
      </div>

      <button className="w-full mt-4 bg-[#F7A31C] text-white py-2 rounded-lg hover:bg-[#E69016] transition-colors">
        Withdraw Funds
      </button>
    </div>
  );
};

export default EarningsWidget;

