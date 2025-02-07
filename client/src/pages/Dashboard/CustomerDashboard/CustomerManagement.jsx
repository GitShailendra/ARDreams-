import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Home, CreditCard, FileText, LogOut, Bell } from 'lucide-react';

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { icon: Home, label: 'Overview', id: 'overview' },
    { icon: CreditCard, label: 'Payment History', id: 'payments' },
    { icon: FileText, label: 'Documents', id: 'documents' }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold mb-1">Customer Name</h2>
            <p className="text-gray-600">ID: ARAR010</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full">Active</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">KYC Verified</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Phone Number</p>
            <p className="font-medium">+91 9876543210</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="font-medium">customer@example.com</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Join Date</p>
            <p className="font-medium">Jan 15, 2024</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Associated Promoter</p>
            <p className="font-medium">John Doe</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium mb-2">Total Paid</h3>
          <div className="text-2xl font-bold">₹2,000</div>
          <p className="text-sm text-gray-600">10% of total amount</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium mb-2">Months Completed</h3>
          <div className="text-2xl font-bold">2/20</div>
          <p className="text-sm text-gray-600">Monthly installments</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium mb-2">Next Payment</h3>
          <div className="text-2xl font-bold">₹1,000</div>
          <p className="text-sm text-gray-600">Due on May 1st</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Payment Timeline</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={[
              { month: 'Jan', amount: 1000 },
              { month: 'Feb', amount: 1000 },
              { month: 'Mar', amount: 1000 },
              { month: 'Apr', amount: 1000 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#f59e0b" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderPayments = () => (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <h3 className="text-lg font-medium">Payment History</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Payment Mode</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2].map((i) => (
              <tr key={i} className="border-b">
                <td className="p-4">Apr {i}, 2024</td>
                <td className="p-4">₹1,000</td>
                <td className="p-4">UPI</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                    Completed
                  </span>
                </td>
              </tr>
            ))}
            <tr className="border-b bg-orange-50">
              <td className="p-4">May 1, 2024</td>
              <td className="p-4">₹1,000</td>
              <td className="p-4">-</td>
              <td className="p-4">
                <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                  Upcoming
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <h3 className="text-lg font-medium">Documents</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">ID Proof</h4>
              <p className="text-sm text-gray-600">Uploaded on Jan 15, 2024</p>
            </div>
            <button className="text-blue-600 hover:underline">View</button>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">Address Proof</h4>
              <p className="text-sm text-gray-600">Uploaded on Jan 15, 2024</p>
            </div>
            <button className="text-blue-600 hover:underline">View</button>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">Bank Details</h4>
              <p className="text-sm text-gray-600">Uploaded on Jan 15, 2024</p>
            </div>
            <button className="text-blue-600 hover:underline">View</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-white border-r">
        <div className="p-4 border-b">
          <div className="text-xl font-bold">AR Dreams</div>
        </div>
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-sm ${
                activeTab === item.id
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
          <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-sm text-red-500 hover:bg-gray-100">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </nav>
      </div>

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-bold">
            {sidebarItems.find(item => item.id === activeTab)?.label}
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full" />
              <span className="text-sm font-medium">John Doe</span>
            </div>
          </div>
        </div>

        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'payments' && renderPayments()}
        {activeTab === 'documents' && renderDocuments()}
      </div>
    </div>
  );
};

export default CustomerDashboard;