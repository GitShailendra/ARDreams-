import React from 'react';

const KycQueueWidget = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-sm text-gray-600 mb-4">KYC Verification Queue</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-100 rounded-full"></div>
            <div>
              <p className="text-sm font-medium text-gray-900">Rahul K</p>
              <p className="text-xs text-gray-500">2 mins ago</p>
            </div>
          </div>
          <button className="text-[#F7A31C] text-sm hover:underline">
            Review
          </button>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span className="text-sm text-gray-600">12 Pending</span>
          </div>
          <button className="text-sm text-[#F7A31C] hover:underline">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default KycQueueWidget;