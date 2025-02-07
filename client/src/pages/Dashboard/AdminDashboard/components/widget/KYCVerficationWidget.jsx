import React from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

 const KYCVerificationWidget = () => {
  const verifications = [
    {
      id: 1,
      name: 'Rahul K',
      type: 'Promoter',
      time: '2 mins ago',
      status: 'pending',
      documents: ['Aadhar Card', 'PAN Card']
    },
    {
      id: 2,
      name: 'Priya M',
      type: 'Customer',
      time: '15 mins ago',
      status: 'pending',
      documents: ['Aadhar Card']
    },
    {
      id: 3,
      name: 'Amit S',
      type: 'Promoter',
      time: '1 hour ago',
      status: 'verified',
      documents: ['Aadhar Card', 'PAN Card']
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'verified':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {verifications.map((verification) => (
        <div 
          key={verification.id}
          className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              {getStatusIcon(verification.status)}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-medium">{verification.name}</h4>
                <span className="text-sm text-gray-500">({verification.type})</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-sm text-gray-500">{verification.time}</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-500">
                  {verification.documents.join(', ')}
                </span>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 text-sm text-orange-500 hover:bg-orange-50 rounded-lg">
            Review
          </button>
        </div>
      ))}
    </div>
  );
};

export default KYCVerificationWidget