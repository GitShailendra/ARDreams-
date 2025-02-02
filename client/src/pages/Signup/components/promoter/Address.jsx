import React, { useState } from 'react';
import { Copy, MapPin, AlertCircle } from 'lucide-react';

const Address = ({ formData = {}, updateForm }) => {
  // Initialize with default values to prevent undefined errors
  const defaultAddress = {
    street: '',
    city: '',
    state: '',
    pincode: '',
    district: ''
  };

  // Ensure formData has the required structure
  const initialFormData = {
    permanentAddress: { ...defaultAddress, ...(formData.permanentAddress || {}) },
    currentAddress: { ...defaultAddress, ...(formData.currentAddress || {}) },
    sameAsPermanent: formData.sameAsPermanent || false
  };

  // State for address validation
  const [errors, setErrors] = useState({
    permanent: {},
    current: {}
  });

  // List of Indian states
  const indianStates = [
    "Andhra Pradesh",
    "Karnataka",
    "Kerala",
    "Tamil Nadu",
    "Telangana",
    "Maharashtra",
    "Gujarat",
    "Rajasthan",
    "Madhya Pradesh",
    "Uttar Pradesh",
    "Bihar",
    "West Bengal",
    "Assam",
    "Punjab",
    "Haryana",
    "Delhi"
  ];

  // Handle permanent address changes
  const handlePermanentChange = (field, value) => {
    const newAddress = {
      ...initialFormData.permanentAddress,
      [field]: value
    };
    updateForm?.('permanentAddress', newAddress);

    // If same as permanent is checked, update current address too
    if (initialFormData.sameAsPermanent) {
      updateForm?.('currentAddress', newAddress);
    }
  };

  // Handle current address changes
  const handleCurrentChange = (field, value) => {
    updateForm?.('currentAddress', {
      ...initialFormData.currentAddress,
      [field]: value
    });
  };

  // Handle same as permanent checkbox
  const handleSameAddress = (e) => {
    updateForm?.('sameAsPermanent', e.target.checked);
    if (e.target.checked) {
      updateForm?.('currentAddress', initialFormData.permanentAddress);
    }
  };

  // Address form fields component
  const AddressFields = ({ type, values, onChange }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="col-span-2">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Street/Area
        </label>
        <input
          type="text"
          value={values.street}
          onChange={(e) => onChange('street', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent"
          placeholder="Enter street address"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          City
        </label>
        <input
          type="text"
          value={values.city}
          onChange={(e) => onChange('city', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent"
          placeholder="Enter city name"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          State
        </label>
        <select
          value={values.state}
          onChange={(e) => onChange('state', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent"
        >
          <option value="">Select State</option>
          {indianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Pincode
        </label>
        <input
          type="text"
          value={values.pincode}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '').slice(0, 6);
            onChange('pincode', value);
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent"
          placeholder="Enter pincode"
          maxLength="6"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          District
        </label>
        <input
          type="text"
          value={values.district}
          onChange={(e) => onChange('district', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent"
          placeholder="Enter district"
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-blue-500" />
          <p className="ml-3 text-sm text-blue-700">
            Please provide your complete address details. This information will be used for verification purposes.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center mb-4">
          <MapPin className="w-5 h-5 text-[#F7A31C] mr-2" />
          <h3 className="text-lg font-medium text-gray-900">Permanent Address</h3>
        </div>
        <AddressFields
          type="permanent"
          values={initialFormData.permanentAddress}
          onChange={handlePermanentChange}
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="sameAddress"
          checked={initialFormData.sameAsPermanent}
          onChange={handleSameAddress}
          className="h-4 w-4 text-[#F7A31C] focus:ring-[#F7A31C] border-gray-300 rounded"
        />
        <label htmlFor="sameAddress" className="ml-2 text-sm text-gray-700">
          Current address same as permanent address
        </label>
      </div>

      {!initialFormData.sameAsPermanent && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <MapPin className="w-5 h-5 text-[#F7A31C] mr-2" />
            <h3 className="text-lg font-medium text-gray-900">Current Address</h3>
          </div>
          <AddressFields
            type="current"
            values={initialFormData.currentAddress}
            onChange={handleCurrentChange}
          />
        </div>
      )}

      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-2">Address Guidelines:</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Provide complete address with landmarks if possible</li>
          <li>Ensure pincode is correct and matches with your area</li>
          <li>Address should match with provided proof of address</li>
          <li>Keep current address updated for communication purposes</li>
        </ul>
      </div>
    </div>
  );
};

export default Address;