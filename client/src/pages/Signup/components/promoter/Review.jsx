import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

const Review = ({ formData = {}, updateForm }) => {
  // Helper function to format dates safely
  const formatDate = (dateString) => {
    return dateString ? new Date(dateString).toLocaleDateString('en-IN') : '-';
  };

  // Prevent component from breaking if formData is undefined or empty
  if (!formData || Object.keys(formData).length === 0) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  // Sections for review
  const sections = [
    {
      title: "Personal Information",
      data: [
        { label: "Full Name", value: formData?.fullName || "-" },
        { label: "Date of Birth", value: formatDate(formData?.dob) },
        { label: "Gender", value: formData?.gender || "-" },
        { label: "Marital Status", value: formData?.maritalStatus || "-" },
        { label: "Mobile Number", value: formData?.mobile || "-" },
        { label: "Email", value: formData?.email || "-" }
      ]
    },
    {
      title: "Permanent Address",
      data: [
        { label: "Street", value: formData?.permanentAddress?.street || "-" },
        { label: "City", value: formData?.permanentAddress?.city || "-" },
        { label: "State", value: formData?.permanentAddress?.state || "-" },
        { label: "Pincode", value: formData?.permanentAddress?.pincode || "-" }
      ]
    },
    {
      title: "Current Address",
      data: formData?.sameAsPermanent 
        ? [{ label: "Status", value: "Same as Permanent Address" }]
        : [
            { label: "Street", value: formData?.currentAddress?.street || "-" },
            { label: "City", value: formData?.currentAddress?.city || "-" },
            { label: "State", value: formData?.currentAddress?.state || "-" },
            { label: "Pincode", value: formData?.currentAddress?.pincode || "-" }
          ]
    },
    {
      title: "Bank Details",
      data: [
        { label: "Account Number", value: formData?.accountNumber || "-" },
        { label: "IFSC Code", value: formData?.ifscCode || "-" },
        { label: "Bank Name", value: formData?.bankName || "-" },
        { label: "Branch Details", value: formData?.branchDetails || "-" }
      ]
    }
  ];

  // Document checklist
  const documents = [
    { name: "Aadhar Card Front", key: "aadharFront" },
    { name: "Aadhar Card Back", key: "aadharBack" },
    { name: "PAN Card", key: "panCard" },
    { name: "Recent Photograph", key: "photo" },
    { name: "Digital Signature", key: "signature" },
    { name: "Address Proof", key: "addressProof" },
    { name: "Bank Document", key: "bankDocument" }
  ];

  return (
    <div className="space-y-8">
      {/* Info Banner */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Please review all your information carefully. You cannot modify these details after submission.
            </p>
          </div>
        </div>
      </div>

      {/* Information Review */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {sections.map((section) => (
          <div key={section.title} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
            </div>
            <div className="p-4">
              <dl className="space-y-4">
                {section.data.map((item) => (
                  <div key={item.label} className="flex flex-col space-y-1">
                    <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
                    <dd className="text-sm text-gray-900">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        ))}
      </div>

      {/* Document Checklist */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Document Checklist</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((doc) => (
              <div key={doc.name} className="flex items-center space-x-3">
                {formData?.[doc.key] ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-red-500" />
                )}
                <span className="text-sm text-gray-700">{doc.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <label className="flex items-start">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 text-[#F7A31C] focus:ring-[#F7A31C] border-gray-300 rounded"
            checked={formData?.termsAccepted || false}
            onChange={(e) => updateForm("termsAccepted", e.target.checked)}
          />
          <span className="ml-3 text-sm text-gray-600">
            I hereby declare that all the information provided by me is true to the best of my knowledge.
            I understand that any false information may result in the rejection of my application or termination
            of my promotership. I agree to the <a href="/terms" className="text-[#F7A31C] hover:underline">Terms and Conditions</a> and
            <a href="/privacy" className="text-[#F7A31C] hover:underline"> Privacy Policy</a>.
          </span>
        </label>
      </div>
    </div>
  );
};

export default Review;
