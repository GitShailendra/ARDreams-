// pages/Dashboard/CustomerDashboard/widgets/ActivityWidget.jsx
import React from 'react';
import { FileText, DollarSign } from 'lucide-react';

const ActivityWidget = () => {
  const activities = [
    {
      type: 'kyc',
      customer: 'Rahul K',
      time: '2 mins ago',
      status: 'pending'
    },
    {
      type: 'payment',
      customer: 'Priya M',
      time: '1 hour ago',
      amount: '₹1,000'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-sm text-gray-600 mb-4">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`p-2 rounded-full ${
              activity.type === 'kyc' 
                ? 'bg-yellow-100 text-yellow-600'
                : 'bg-green-100 text-green-600'
            }`}>
              {activity.type === 'kyc' ? <FileText className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{activity.customer}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
            <div className="ml-auto text-sm">
              {activity.type === 'kyc' ? (
                <span className="text-yellow-600">Pending KYC</span>
              ) : (
                <span className="text-green-600">{activity.amount}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-[#F7A31C] text-sm hover:underline">
        View All Activity
      </button>
    </div>
  );
};

export default ActivityWidget;