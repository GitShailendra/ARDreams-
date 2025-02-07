import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Analytics = () => {
  const data = [
    { month: 'Jan', customers: 120, revenue: 120000 },
    { month: 'Feb', customers: 150, revenue: 150000 },
    // Add more data points
  ];

  return (
    <div className="space-y-6">
      {/* Overview Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Customer Growth</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="customers" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Add more charts */}
      </div>
    </div>
  );
};

export default Analytics