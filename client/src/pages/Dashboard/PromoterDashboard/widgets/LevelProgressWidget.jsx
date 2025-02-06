import React from 'react';

const LevelProgressWidget = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm text-gray-600">Current Level</h3>
          <p className="text-2xl font-bold text-gray-900">Level 2</p>
        </div>
        <div className="bg-[#F7A31C]/10 text-[#F7A31C] px-3 py-1 rounded-full text-sm">
          127/150 Customers
        </div>
      </div>

      <div className="space-y-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-[#F7A31C] h-2 rounded-full transition-all duration-300"
            style={{ width: '85%' }}
          ></div>
        </div>
        <p className="text-sm text-gray-500">
          23 more customers needed for Level 3
        </p>
      </div>
    </div>
  );
};

export default LevelProgressWidget;