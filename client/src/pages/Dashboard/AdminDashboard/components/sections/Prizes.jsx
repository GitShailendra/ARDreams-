import React from 'react';
import { Gift, Calendar } from 'lucide-react';

export const Prizes = () => {
  return (
    <div className="space-y-6">
      {/* Prize Pool Overview */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold">Current Prize Pool</h3>
            <p className="text-3xl font-bold mt-2">₹50,000</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Next Draw</h3>
            <div className="flex items-center space-x-2 mt-2">
              <Calendar className="h-5 w-5 text-gray-400" />
              <p className="text-xl">15 Mar 2024</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Winners</h3>
            <p className="text-3xl font-bold mt-2">24</p>
          </div>
        </div>
      </div>

      {/* Prize Categories */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Prize Categories</h3>
        {/* Prize category list */}
      </div>
    </div>
  );
};