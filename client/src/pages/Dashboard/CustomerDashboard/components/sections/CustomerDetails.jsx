// pages/Dashboard/components/CustomerDetails.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  User, Phone, Mail, Calendar, FileText, CheckCircle 
} from 'lucide-react';

const CustomerDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock customer data
  const customer = {
    id: `AR${id}`,
    name: "Customer Name",
    phone: "+91 9876543210",
    email: "customer@example.com",
    joinDate: "Jan 15, 2024",
    status: "Active",
    kycStatus: "Verified",
    address: "123, Some Street, City, State - 570017",
    payments: [
      { month: "January", amount: 1000, date: "2024-01-15", status: "Paid" },
      { month: "December", amount: 1000, date: "2023-12-15", status: "Paid" },
      // Add more payment history
    ],
    documents: {
      aadhar: {
        front: "aadhar_front.jpg",
        back: "aadhar_back.jpg",
        verified: true
      },
      pan: {
        file: "pan.jpg",
        verified: true
      },
      photo: {
        file: "photo.jpg",
        verified: true
      }
    }
  };

  // Mock activity logs
  const activityLogs = [
    { action: 'Login', details: 'Customer logged in to the portal', date: '2024-01-20' },
    { action: 'Payment', details: 'Payment of ₹1000 made for January', date: '2024-01-15' },
    // Add more logs as needed
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{customer.name}</h1>
              <p className="text-gray-500">ID: {customer.id}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium 
              ${customer.status === 'Active' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {customer.status}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium 
              ${customer.kycStatus === 'Verified' 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-red-100 text-red-800'
              }`}
            >
              KYC {customer.kycStatus}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'payments', label: 'Payment History' },
            { id: 'documents', label: 'Documents' },
            { id: 'activity', label: 'Activity Log' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 relative ${activeTab === tab.id ? 'text-[#F7A31C]' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F7A31C]"></span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Content based on active tab */}
      <div className="space-y-6">
        {activeTab === 'overview' && (
          <>
            {/* Basic Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <p className="text-gray-900">{customer.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900">{customer.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Join Date</p>
                    <p className="text-gray-900">{customer.joinDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-900">{customer.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-600">Total Paid</p>
                  <p className="text-2xl font-bold text-green-700">₹{customer.payments.length * 1000}</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-600">Months Completed</p>
                  <p className="text-2xl font-bold text-blue-700">{customer.payments.length}/20</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-600">Next Payment</p>
                  <p className="text-2xl font-bold text-orange-700">₹1,000</p>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'payments' && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {customer.payments.map((payment, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-900">{payment.month}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">₹{payment.amount}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{payment.date}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Aadhar Card</h3>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-100 rounded-lg"></div>
                <div className="aspect-video bg-gray-100 rounded-lg"></div>
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Verified
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">PAN Card</h3>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-100 rounded-lg"></div>
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Verified
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity Log</h3>
            <div className="space-y-4">
              {activityLogs.map((log, index) => (
                <div key={index} className="flex justify-between">
                  <div className="text-sm text-gray-500">{log.action}</div>
                  <div className="text-sm text-gray-700">{log.details}</div>
                  <div className="text-xs text-gray-400">{log.date}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;
