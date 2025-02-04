// ActivityWidget.jsx
const ActivityWidget = () => {
    const activities = [
      {
        type: 'kyc_approval',
        customer: 'Rajesh Kumar',
        time: '2 hours ago',
        status: 'success'
      },
      {
        type: 'new_customer',
        customer: 'Priya M',
        time: '5 hours ago',
        status: 'pending'
      },
      {
        type: 'payment_received',
        customer: 'Suresh K',
        time: '1 day ago',
        amount: '₹1,000'
      }
    ];
   
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
        
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50">
              <div className={`p-2 rounded-full ${
                activity.status === 'success' ? 'bg-green-100 text-green-600' :
                activity.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                'bg-blue-100 text-blue-600'
              }`}>
                {/* Icon based on activity type */}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.customer}
                  </p>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
                
                <p className="text-sm text-gray-500">
                  {activity.type === 'kyc_approval' && 'KYC documents approved'}
                  {activity.type === 'new_customer' && 'New customer registered'}
                  {activity.type === 'payment_received' && `Payment received: ${activity.amount}`}
                </p>
              </div>
            </div>
          ))}
        </div>
   
        <button className="w-full mt-4 text-[#F7A31C] text-sm hover:text-[#E69016] transition-colors">
          View All Activity
        </button>
      </div>
    );
   };
   
   export default ActivityWidget;