import React, { useState } from 'react';
import { Landmark, Search, AlertCircle, Upload, Check, X } from 'lucide-react';

const BankDetails = ({ formData = {}, updateForm }) => {
  const [isValidating, setIsValidating] = useState(false);
  const [bankDetails, setBankDetails] = useState(null);

  // Safe update function
  const handleUpdate = (field, value) => {
    updateForm?.(field, value);
  };

  // IFSC Code validation
  const validateIFSC = async (ifsc) => {
    if (ifsc?.length === 11) {
      setIsValidating(true);
      try {
        const response = await fetch(`https://ifsc.razorpay.com/${ifsc}`);
        const data = await response.json();
        if (data.BANK) {
          setBankDetails(data);
          handleUpdate('bankName', data.BANK);
          handleUpdate('branchDetails', `${data.BRANCH}, ${data.CITY}, ${data.STATE}`);
        }
      } catch (error) {
        setBankDetails(null);
        handleUpdate('bankName', '');
        handleUpdate('branchDetails', '');
      }
      setIsValidating(false);
    }
  };

  // Handle bank document upload
  const handleFileUpload = (file) => {
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('File size should be less than 2MB');
        return;
      }
      
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a valid file (PDF, JPG, or PNG)');
        return;
      }
      
      handleUpdate('bankDocument', file);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <p className="text-sm text-blue-700 flex items-center">
          <AlertCircle className="w-4 h-4 mr-2" />
          Please ensure all bank details are accurate. These details will be used for commission payments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account Number */}
        <div className="col-span-2">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Account Number
          </label>
          <input
            type="text"
            value={formData.accountNumber || ''}
            onChange={(e) => handleUpdate('accountNumber', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent"
            placeholder="Enter account number"
          />
        </div>

        {/* Confirm Account Number */}
        <div className="col-span-2">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Confirm Account Number
          </label>
          <input
            type="text"
            value={formData.confirmAccountNumber || ''}
            onChange={(e) => handleUpdate('confirmAccountNumber', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent"
            placeholder="Re-enter account number"
          />
          {formData.accountNumber && formData.confirmAccountNumber && 
           formData.accountNumber !== formData.confirmAccountNumber && (
            <p className="mt-1 text-sm text-red-500">Account numbers do not match</p>
          )}
        </div>

        {/* IFSC Code */}
        <div className="col-span-2">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            IFSC Code
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.ifscCode || ''}
              onChange={(e) => {
                const value = e.target.value.toUpperCase();
                handleUpdate('ifscCode', value);
                validateIFSC(value);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent"
              placeholder="Enter IFSC code"
              maxLength="11"
            />
            {isValidating && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#F7A31C] border-t-transparent"></div>
              </div>
            )}
          </div>
        </div>

        {/* Bank Details (Auto-filled) */}
        {bankDetails && (
          <>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Bank Name
              </label>
              <input
                type="text"
                value={formData.bankName || ''}
                readOnly
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Branch Details
              </label>
              <input
                type="text"
                value={formData.branchDetails || ''}
                readOnly
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg"
              />
            </div>
          </>
        )}

        {/* Bank Document Upload */}
        <div className="col-span-2">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Bank Document
          </label>
          <div className="mt-2">
            {!formData.bankDocument ? (
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Upload cancelled cheque or bank statement</p>
                  <p className="text-xs text-gray-400">PDF, JPG, or PNG (max 2MB)</p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,image/jpeg,image/png"
                  onChange={(e) => handleFileUpload(e.target.files?.[0])}
                />
              </label>
            ) : (
              <div className="relative w-full p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    {formData.bankDocument.name}
                  </span>
                  <button
                    onClick={() => handleUpdate('bankDocument', null)}
                    className="ml-auto p-1 text-gray-400 hover:text-red-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-2">Bank Account Guidelines:</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Account should be in your name as per KYC documents</li>
          <li>Account should be active and operational</li>
          <li>Ensure IFSC code is correct to avoid payment failures</li>
          <li>Upload clear copy of cancelled cheque or bank statement first page</li>
        </ul>
      </div>
    </div>
  );
};

export default BankDetails;