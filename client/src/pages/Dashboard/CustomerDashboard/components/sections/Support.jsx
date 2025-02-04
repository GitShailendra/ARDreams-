import React from 'react';
import { MessageSquare, Phone, Mail } from 'lucide-react';

const Support = () => {
  return (
    <div className="space-y-6">
      {/* Support Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Support Center</h2>
        <p className="text-gray-500">Get help with your promoter account</p>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <Phone className="w-8 h-8 text-[#F7A31C] mb-4" />
          <h3 className="font-medium text-gray-900 mb-2">Call Support</h3>
          <p className="text-gray-500 text-sm mb-4">Available 9 AM to 6 PM</p>
          <a href="tel:+1234567890" className="text-[#F7A31C] font-medium">
            +91 94814 86775
          </a>
        </div>
        {/* Add more contact options */}
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">
          Frequently Asked Questions
        </h3>
        {/* Add FAQ accordion */}
      </div>
    </div>
  );
};

export default Support;