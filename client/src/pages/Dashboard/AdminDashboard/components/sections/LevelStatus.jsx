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
  