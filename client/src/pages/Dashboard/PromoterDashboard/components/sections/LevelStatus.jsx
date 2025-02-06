import React from 'react';
import { Award, Gift } from 'lucide-react';

const LevelStatus = () => {
  const levels = [
    { level: 0, range: '0-20', current: true, benefit: 'Basic Access' },
    { level: 1, range: '20-50', benefit: 'Power Bank + Withdrawals' },
    { level: 2, range: '51-150', benefit: 'Special Gift' },
    { level: 3, range: '151-300', benefit: 'Premium Benefits' },
    { level: 4, range: '301-500', benefit: 'Elite Status' },
    { level: 5, range: '501-700', benefit: 'VIP Benefits' },
    { level: 6, range: '701-1000', benefit: 'Ultimate Rewards' }
  ];

  return (
    <div className="space-y-6">
      {/* Current Level Card */}
      <div className="bg-gradient-to-r from-[#1F2937] to-[#2C3E50] rounded-xl text-white p-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Level 2</h2>
            <p className="text-gray-300">51-150 Customers</p>
          </div>
          <Award className="w-12 h-12 text-[#F7A31C]" />
        </div>
        <div className="mt-6">
          <div className="w-full bg-white/10 rounded-full h-2 mb-2">
            <div 
              className="bg-[#F7A31C] h-2 rounded-full" 
              style={{ width: '75%' }}
            ></div>
          </div>
          <p className="text-sm text-gray-300">127 customers - 23 more to Level 3</p>
        </div>
      </div>

      {/* Level Progress */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Level Progress</h3>
        <div className="space-y-6">
          {levels.map((level) => (
            <div 
              key={level.level}
              className={`p-4 rounded-lg border ${
                level.current ? 'border-[#F7A31C] bg-orange-50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">
                    Level {level.level}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {level.range} Customers
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className={`w-5 h-5 ${
                    level.current ? 'text-[#F7A31C]' : 'text-gray-400'
                  }`} />
                  <span className={`text-sm ${
                    level.current ? 'text-[#F7A31C]' : 'text-gray-500'
                  }`}>
                    {level.benefit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Current Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <Gift className="w-6 h-6 text-[#F7A31C] mb-2" />
            <h4 className="font-medium text-gray-900">Special Gift</h4>
            <p className="text-sm text-gray-500">
              Eligible for special gift on reaching Level 2
            </p>
          </div>
          {/* Add more benefit cards */}
        </div>
      </div>
    </div>
  );
};

export default LevelStatus;

