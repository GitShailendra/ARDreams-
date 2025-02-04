// pages/Dashboard/components/sections/OverviewSection.jsx
import React from 'react';
import CustomerStatsWidget from '../widgets/CustomerStatsWidget';
import LevelProgressWidget from '../widgets/LevelProgressWidget';
import KycQueueWidget from '../widgets/KycQueueWidget';
import EarningsWidget from '../widgets/EarningsWidget';
import ActivityWidget from '../widgets/ActivityWidget';

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

// Widget Components
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

const LevelProgressWidget = () => (
 <div className="bg-white rounded-xl shadow-sm p-6">
   <h3 className="text-lg font-semibold text-gray-800 mb-4">Level Progress</h3>
   <div className="space-y-4">
     <div>
       <div className="flex justify-between text-sm mb-1">
         <span>Level 2</span>
         <span className="text-[#F7A31C]">127/150 Customers</span>
       </div>
       <div className="w-full bg-gray-200 rounded-full h-2">
         <div className="bg-[#F7A31C] h-2 rounded-full" style={{ width: '85%' }}></div>
       </div>
     </div>
     <div className="bg-yellow-50 rounded-lg p-4">
       <p className="text-sm text-[#F7A31C]">23 more customers needed for Level 3</p>
     </div>
   </div>
 </div>
);

const KycQueueWidget = () => (
 <div className="bg-white rounded-xl shadow-sm p-6">
   <h3 className="text-lg font-semibold text-gray-800 mb-4">KYC Queue</h3>
   <div className="space-y-3">
     <div className="flex justify-between items-center">
       <span className="text-sm text-gray-500">Pending Verification</span>
       <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">12</span>
     </div>
     <button className="w-full bg-[#1F2937] text-white py-2 rounded-lg text-sm">
       Review Documents
     </button>
   </div>
 </div>
);

const EarningsWidget = () => (
 <div className="bg-white rounded-xl shadow-sm p-6">
   <h3 className="text-lg font-semibold text-gray-800 mb-4">Earnings</h3>
   <div className="space-y-3">
     <div>
       <p className="text-sm text-gray-500">Available for Withdrawal</p>
       <p className="text-2xl font-bold text-green-500">₹12,400</p>
     </div>
     <button 
       className="w-full bg-[#F7A31C] text-white py-2 rounded-lg text-sm disabled:opacity-50"
       disabled={false}
     >
       Withdraw Funds
     </button>
   </div>
 </div>
);

export default OverviewSection;