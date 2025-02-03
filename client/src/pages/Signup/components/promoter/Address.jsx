import React, { useState } from 'react';
import { MapPin, AlertCircle } from 'lucide-react';

const Address = ({ formData = {}, updateForm }) => {
  const defaultAddress = {
    street: '',
    city: '',
    state: '',
    pincode: '',
    district: ''
  };

  const initialFormData = {
    permanentAddress: { ...defaultAddress, ...(formData.permanentAddress || {}) },
    currentAddress: { ...defaultAddress, ...(formData.currentAddress || {}) },
    sameAsPermanent: formData.sameAsPermanent || false
  };

  const [errors, setErrors] = useState({
    permanent: {},
    current: {}
  });

  const indianStates = [
    "Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu", "Telangana",
    "Maharashtra", "Gujarat", "Rajasthan", "Madhya Pradesh", "Uttar Pradesh",
    "Bihar", "West Bengal", "Assam", "Punjab", "Haryana", "Delhi"
  ];

  const handlePermanentChange = (field, value) => {
    const newAddress = {
      ...initialFormData.permanentAddress,
      [field]: value
    };
    updateForm?.('permanentAddress', newAddress);

    if (initialFormData.sameAsPermanent) {
      updateForm?.('currentAddress', newAddress);
    }
  };

  const handleCurrentChange = (field, value) => {
    updateForm?.('currentAddress', {
      ...initialFormData.currentAddress,
      [field]: value
    });
  };

  const handleSameAddress = (e) => {
    updateForm?.('sameAsPermanent', e.target.checked);
    if (e.target.checked) {
      updateForm?.('currentAddress', initialFormData.permanentAddress);
    }
  };

  const inputClasses = "w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent bg-white transition-all duration-200 hover:border-[#F7A31C] placeholder:text-gray-400 text-sm sm:text-base";
  const labelClasses = "block text-gray-700 text-sm sm:text-base font-medium mb-2";

  const AddressFields = ({ type, values, onChange }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <div className="col-span-1 sm:col-span-2">
        <label className={labelClasses}>
          Street/Area
        </label>
        <input
          type="text"
          value={values.street}
          onChange={(e) => onChange('street', e.target.value)}
          className={inputClasses}
          placeholder="Enter street address"
        />
      </div>

      <div>
        <label className={labelClasses}>
          City
        </label>
        <input
          type="text"
          value={values.city}
          onChange={(e) => onChange('city', e.target.value)}
          className={inputClasses}
          placeholder="Enter city name"
        />
      </div>

      <div>
        <label className={labelClasses}>
          State
        </label>
        <select
          value={values.state}
          onChange={(e) => onChange('state', e.target.value)}
          className={inputClasses}
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
        <label className={labelClasses}>
          Pincode
        </label>
        <input
          type="text"
          value={values.pincode}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '').slice(0, 6);
            onChange('pincode', value);
          }}
          className={inputClasses}
          placeholder="Enter pincode"
          maxLength="6"
        />
      </div>

      <div>
        <label className={labelClasses}>
          District
        </label>
        <input
          type="text"
          value={values.district}
          onChange={(e) => onChange('district', e.target.value)}
          className={inputClasses}
          placeholder="Enter district"
        />
      </div>
    </div>
  );

  return (
    <div className="animate-fade-in space-y-6 sm:space-y-8">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-5 rounded-r-lg">
        <div className="flex items-start sm:items-center">
          <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 sm:mt-0 flex-shrink-0" />
          <p className="ml-3 text-sm sm:text-base text-blue-700">
            Please provide your complete address details. This information will be used for verification purposes.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-5 sm:p-7">
        <div className="flex items-center mb-5 sm:mb-6">
          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#F7A31C]" />
          <h3 className="ml-2 text-lg sm:text-xl font-semibold text-gray-900">Permanent Address</h3>
        </div>
        <AddressFields
          type="permanent"
          values={initialFormData.permanentAddress}
          onChange={handlePermanentChange}
        />
      </div>

      <div className="flex items-center px-1">
        <input
          type="checkbox"
          id="sameAddress"
          checked={initialFormData.sameAsPermanent}
          onChange={handleSameAddress}
          className="h-4 w-4 text-[#F7A31C] focus:ring-[#F7A31C] border-gray-300 rounded transition-colors duration-200"
        />
        <label htmlFor="sameAddress" className="ml-2 text-sm sm:text-base text-gray-700">
          Current address same as permanent address
        </label>
      </div>

      {!initialFormData.sameAsPermanent && (
        <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-5 sm:p-7">
          <div className="flex items-center mb-5 sm:mb-6">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#F7A31C]" />
            <h3 className="ml-2 text-lg sm:text-xl font-semibold text-gray-900">Current Address</h3>
          </div>
          <AddressFields
            type="current"
            values={initialFormData.currentAddress}
            onChange={handleCurrentChange}
          />
        </div>
      )}

      <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6">
        <h4 className="font-medium text-base sm:text-lg text-gray-900 mb-3 sm:mb-4">Address Guidelines:</h4>
        <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2">
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