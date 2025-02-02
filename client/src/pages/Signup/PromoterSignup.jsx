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

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    }, 2000);
  };

  const renderStep = () => {
    console.log(`Rendering step: ${step}`); // Debugging
    switch (step) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <Address />;
      case 3:
        return <Documents />;
      case 4:
        return <BankDetails />;
      case 5:
        return <Review />;
      default:
        return <div>No step found. Current step: {step}</div>; // Fallback
    }
  };

  return (
    <div className="min-h-screen bg-[#1F2937] p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Progress Header */}
        <div className="bg-[#2C3E50] p-6">
          <div className="flex justify-between items-center relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-700 -translate-y-1/2"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#F7A31C] to-[#FFD700] -translate-y-1/2 transition-all duration-500"
              style={{ width: `${(step / 5) * 100}%` }}
            ></div>

            {['Personal Details', 'Address', 'Documents', 'Bank Details', 'Review'].map((title, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step > index + 1 ? 'bg-[#F7A31C]' : 
                    step === index + 1 ? 'bg-gradient-to-r from-[#F7A31C] to-[#FFD700]' : 
                    'bg-gray-700'
                  } transition-colors duration-300`}
                >
                  <span className="text-white font-medium">{index + 1}</span>
                </div>
                <span className="absolute -bottom-6 text-xs text-white whitespace-nowrap">{title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 md:p-8">
          {renderStep()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(prev => prev - 1)}
                className="px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                disabled={isSubmitting}
              >
                Back
              </button>
            )}
            
            {step < 5 ? (
              <button
                onClick={() => setStep(prev => prev + 1)}
                className="ml-auto bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="ml-auto bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white px-8 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  'Complete Registration'
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full m-4 animate-fade-up">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6">
                <div className="w-full h-full rounded-full border-4 border-green-500 flex items-center justify-center animate-success-circle">
                  <CheckCircle className="w-10 h-10 text-green-500 animate-success-check" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Registration Successful!
              </h3>
              <p className="text-gray-600 mb-8">
                Your promoter ID has been generated successfully. Please check your phone for login credentials.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Promoter ID</span>
                  <span className="text-sm font-medium text-gray-900">AR001</span>
                </div>
                <div className="h-1 bg-[#F7A31C] rounded-full animate-progress"></div>
                <p className="text-xs text-gray-500 mt-2">
                  Redirecting to login page in 5 seconds...
                </p>
              </div>
              <button
                onClick={() => navigate('/login')}
                className="w-full bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Go to Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromoterSignup;