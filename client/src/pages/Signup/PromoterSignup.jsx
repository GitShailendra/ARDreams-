import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MapPin, FileText, CreditCard, CheckCircle, Loader, X } from 'lucide-react';
import PersonalDetails from './components/promoter/PersonalDetails';
import Address from './components/promoter/Address';
import Documents from './components/promoter/Documents';
import BankDetails from './components/promoter/BankDetails';
import Review from './components/promoter/Review';

const PromoterSignup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: '',
    dob: '',
    gender: '',
    maritalStatus: '',
    mobile: '',
    email: '',
    // Address
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    // Documents
    panCard: null,
    aadharCard: null,
    photo: null,
    // Bank Details
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    branchName: '',
  });

  const updateForm = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Here you would typically make an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    }, 2000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalDetails formData={formData} updateForm={updateForm} />;
      case 2:
        return <Address formData={formData} updateForm={updateForm} />;
      case 3:
        return <Documents formData={formData} updateForm={updateForm} />;
      case 4:
        return <BankDetails formData={formData} updateForm={updateForm} />;
      case 5:
        return <Review formData={formData} />;
      default:
        return <div>No step found</div>;
    }
  };

  // Calculate progress width based on screen size
  const getProgressStyle = () => {
    const isMobile = window.innerWidth <= 640;
    const totalSteps = 5;
    const progress = step === 1 ? 0 : ((step - 1) / (totalSteps - 1)) * 100;
    
    if (isMobile) {
      const mobileWidth = Math.min(92, Math.max(0, progress * 0.92)); // Increased width
      return {
        width: `${mobileWidth}%`,
        left: '4%', // Adjusted for wider bar
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      };
    }

    const desktopWidth = Math.min(92, Math.max(0, progress * 0.92)); // Increased width
    return {
      width: `${desktopWidth}%`,
      left: '4%', // Adjusted for wider bar
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F2937] to-[#111827] px-4 py-6 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
        {/* Progress Header */}
        <div className="bg-gradient-to-r from-[#2C3E50] to-[#1F2937] p-6 pt-8 sm:p-8 sm:pt-10">
          {/* Header Title */}
          <h1 className="text-white text-xl sm:text-2xl font-bold mb-12 sm:mb-14 text-center">Promoter Registration</h1>
          
          <div className="relative pb-16 sm:pb-20">
            {/* Progress Bar Container */}
            <div className="absolute top-6 sm:left-[4%] sm:right-[4%] left-[4%] right-[4%] w-[92%] mx-auto">
              {/* Background Line */}
              <div className="absolute w-full h-2 sm:h-2.5 bg-gray-700/50 rounded-full"></div>
              {/* Progress Line */}
              <div 
                className="absolute h-2 sm:h-2.5 bg-gradient-to-r from-[#F7A31C] via-[#FFD700] to-[#F7A31C] rounded-full shadow-sm"
                style={getProgressStyle()}
              ></div>
            </div>

            {/* Step Indicators */}
            <div className="flex justify-between w-full relative">
              {['Personal Details', 'Address', 'Documents', 'Bank Details', 'Review'].map((title, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transform transition-all duration-300 ${
                      step > index + 1 ? 'bg-[#F7A31C] scale-95' : 
                      step === index + 1 ? 'bg-gradient-to-r from-[#F7A31C] to-[#FFD700] scale-100 ring-2 sm:ring-4 ring-yellow-400/30' : 
                      'bg-gray-700 scale-90'
                    }`}
                  >
                    <span className="text-white text-base sm:text-xl font-bold">{index + 1}</span>
                  </div>
                  <span 
                    className={`mt-3 sm:mt-4 text-[11px] sm:text-sm text-white font-medium transition-all duration-300 ${
                      step === index + 1 ? 'opacity-100' : 'opacity-70'
                    }`}
                  >
                    {window.innerWidth <= 380 ? title.split(' ')[0] : title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 sm:p-8">
          <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-inner">
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(prev => prev - 1)}
                className="px-6 py-3 text-gray-600 hover:text-gray-900 text-sm sm:text-base font-medium transition-colors duration-300 hover:bg-gray-100 rounded-lg flex items-center gap-2 group"
                disabled={isSubmitting}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            )}
            
            {step < 5 ? (
              <button
                onClick={() => setStep(prev => prev + 1)}
                className="ml-auto bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white px-6 py-3 text-sm sm:text-base rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
              >
                Continue
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="ml-auto bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white px-8 py-3 text-sm sm:text-base rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Complete Registration
                    <CheckCircle className="w-5 h-5" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 w-full max-w-md animate-fade-up shadow-2xl">
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6">
                <div className="w-full h-full rounded-full border-4 border-green-500 flex items-center justify-center animate-success-circle">
                  <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-500 animate-success-check" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Registration Successful!
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Your promoter ID has been generated successfully. Please check your phone for login credentials.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm sm:text-base text-gray-500">Promoter ID</span>
                  <span className="text-sm sm:text-base font-medium text-gray-900 bg-yellow-100 px-4 py-1.5 rounded-full">AR001</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#F7A31C] to-[#FFD700] animate-progress rounded-full"></div>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-3">
                  Redirecting to login page in 5 seconds...
                </p>
              </div>
              <button
                onClick={() => navigate('/login')}
                className="w-full bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white px-6 py-3.5 text-base sm:text-lg rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Go to Login
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromoterSignup;