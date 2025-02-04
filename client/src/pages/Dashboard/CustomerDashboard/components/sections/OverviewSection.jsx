import React from 'react';
import LevelProgressWidget from '../../widgets/LevelProgressWidget';
import KycQueueWidget from '../../widgets/KycQueueWidget';
import EarningsWidget from '../../widgets/EarningsWidget';
import ActivityWidget from '../../widgets/ActivityWidget';

const OverviewSection = () => {
  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CustomerStatsWidget />
        <LevelProgressWidget />
        <KycQueueWidget />
        <EarningsWidget /> 
      </div>

      {/* Larger Widgets Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityWidget />
      </div>
    </div>
  );
};

// Define CustomerStatsWidget inside this file
const CustomerStatsWidget = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Stats</h3>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-sm text-gray-500">Total Customers</p>
        <p className="text-2xl font-bold text-[#1F2937]">127</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Active Customers</p>
        <p className="text-2xl font-bold text-green-500">98</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Pending KYC</p>
        <p className="text-2xl font-bold text-[#F7A31C]">12</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">This Month</p>
        <p className="text-2xl font-bold text-blue-500">+8</p>
      </div>
    </div>
  </div>
);

export default OverviewSection;
