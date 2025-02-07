import React from 'react';
import { Activity, Users, FileText, Gift } from 'lucide-react';
import  ActivityWidget  from '../widget/ActivityWidget';
import  KYCVerificationWidget  from '../widget/KYCVerficationWidget';
 const OverviewSection = () => {
  const stats = [
    {
      title: 'Total Promoters',
      value: '127',
      change: '+8',
      icon: <Users className="w-6 h-6 text-blue-500" />,
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active Customers',
      value: '2,845',
      change: '+12%',
      icon: <Activity className="w-6 h-6 text-green-500" />,
      bgColor: 'bg-green-50'
    },
    {
      title: 'Pending KYC',
      value: '48',
      change: 'Urgent',
      icon: <FileText className="w-6 h-6 text-orange-500" />,
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Prize Pool',
      value: '₹50,000',
      change: 'This Month',
      icon: <Gift className="w-6 h-6 text-purple-500" />,
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                <p className="text-sm text-green-500 mt-2">{stat.change}</p>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <ActivityWidget />
        </div>

        {/* Recent KYC Verifications */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent KYC Verifications</h3>
          <KYCVerificationWidget />
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
