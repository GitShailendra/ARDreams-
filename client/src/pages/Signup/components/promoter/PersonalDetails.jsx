import React from 'react';

const PersonalDetails = ({ formData = {}, updateForm }) => {
  // Handle form updates safely
  const handleUpdate = (field, value) => {
    updateForm?.(field, value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Full Name */}
      <div className="col-span-2">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Full Name
        </label>
        <input
          type="text"
          value={formData.fullName || ''}
          onChange={(e) => handleUpdate('fullName', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent"
          placeholder="Enter your full name"
        />
      </div>

      {/* Date of Birth */}
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Date of Birth
        </label>
        <input
          type="date"
          value={formData.dob || ''}
          onChange={(e) => handleUpdate('dob', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent"
        />
      </div>

      {/* Gender */}
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Gender
        </label>
        <select
          value={formData.gender || ''}
          onChange={(e) => handleUpdate('gender', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Marital Status */}
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Marital Status
        </label>
        <select
          value={formData.maritalStatus || ''}
          onChange={(e) => handleUpdate('maritalStatus', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent"
        >
          <option value="">Select Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Mobile Number */}
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Mobile Number
        </label>
        <div className="relative">
          <input
            type="tel"
            value={formData.mobile || ''}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').slice(0, 10);
              handleUpdate('mobile', value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent pl-12"
            placeholder="Enter mobile number"
            maxLength="10"
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            +91
          </span>
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={formData.email || ''}
          onChange={(e) => handleUpdate('email', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent"
          placeholder="Enter email address"
        />
      </div>
    </div>
  );
};

export default PersonalDetails;