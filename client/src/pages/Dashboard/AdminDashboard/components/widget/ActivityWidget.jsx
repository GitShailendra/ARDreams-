import React from 'react';
import { 
  UserPlus, FileText, Gift, AlertCircle,
  DollarSign, CheckCircle 
} from 'lucide-react';

const ActivityWidget = () => {
  const activities = [
    {
      id: 1,
      type: 'new_promoter',
      message: 'New promoter registration',
      user: 'Rahul K',
      time: '2 mins ago',
      icon: <UserPlus className="w-5 h-5 text-blue-500" />,
      iconBg: 'bg-blue-50'
    },
    {
      id: 2,
      type: 'kyc_verified',
      message: 'KYC verification completed',
      user: 'Priya M',
      time: '15 mins ago',
      icon: <FileText className="w-5 h-5 text-green-500" />,
      iconBg: 'bg-green-50'
    },
    {
      id: 3,
      type: 'prize_won',
      message: 'Monthly prize winner',
      user: 'Amit S',
      time: '1 hour ago',
      icon: <Gift className="w-5 h-5 text-purple-500" />,
      iconBg: 'bg-purple-50'
    },
    {
      id: 4,
      type: 'withdrawal_request',
      message: 'New withdrawal request',
      user: 'Sneha R',
      time: '2 hours ago',
      icon: <DollarSign className="w-5 h-5 text-orange-500" />,
      iconBg: 'bg-orange-50'
    }
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div 
          key={activity.id}
          className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50"
        >
          <div className={`${activity.iconBg} p-2 rounded-lg`}>
            {activity.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{activity.message}</h4>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">by {activity.user}</p>
          </div>
        </div>
      ))}
      
      <button className="w-full text-center text-sm text-orange-500 hover:text-orange-600 py-2">
        View All Activity
      </button>
    </div>
  );
};

export  default ActivityWidget