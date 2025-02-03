import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, Calendar, Users, CheckCircle, Loader } from 'lucide-react';

const PersonalDetails = ({ formData = {}, updateForm }) => {
  const [mobileVerification, setMobileVerification] = useState({
    sent: false,
    verified: false,
    otp: '',
    loading: false
  });

  const [emailVerification, setEmailVerification] = useState({
    sent: false,
    verified: false,
    loading: false
  });

  const handleUpdate = (field, value) => {
    updateForm?.(field, value);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleSendOTP = () => {
    if (!formData.mobile || formData.mobile.length !== 10) return;
    setMobileVerification(prev => ({ ...prev, loading: true }));
    // Simulate OTP sending
    setTimeout(() => {
      setMobileVerification(prev => ({ 
        ...prev, 
        sent: true, 
        loading: false 
      }));
    }, 1000);
  };

  const handleVerifyOTP = () => {
    if (!mobileVerification.otp || mobileVerification.otp.length !== 6) return;
    setMobileVerification(prev => ({ ...prev, loading: true }));
    // Simulate OTP verification
    setTimeout(() => {
      setMobileVerification(prev => ({ 
        ...prev, 
        verified: true, 
        loading: false 
      }));
    }, 1000);
  };

  const handleSendEmailVerification = () => {
    if (!formData.email) return;
    setEmailVerification(prev => ({ ...prev, loading: true }));
    // Simulate email verification link sending
    setTimeout(() => {
      setEmailVerification(prev => ({ 
        ...prev, 
        sent: true, 
        loading: false 
      }));
    }, 1000);
  };

  const inputClasses = "w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent bg-white transition-all duration-200 hover:border-[#F7A31C] placeholder:text-gray-400 text-sm sm:text-base";
  const labelClasses = "block text-gray-700 text-sm sm:text-base font-medium mb-2 flex items-center gap-2";
  const buttonClasses = "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2";

  return (
    <div className="animate-fade-in">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Personal Details</h2>
      <div className="space-y-5 sm:space-y-6">
        {/* Full Name */}
        <div>
          <label className={labelClasses}>
            <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#F7A31C]" />
            Full Name
          </label>
          <input
            type="text"
            value={formData.fullName || ''}
            onChange={(e) => handleUpdate('fullName', e.target.value)}
            className={inputClasses}
            placeholder="Enter your full name"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className={labelClasses}>
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#F7A31C]" />
            Date of Birth
          </label>
          <input
            type="date"
            value={formData.dob || ''}
            onChange={(e) => handleUpdate('dob', e.target.value)}
            className={inputClasses}
          />
        </div>

        {/* Gender */}
        <div>
          <label className={labelClasses}>
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#F7A31C]" />
            Gender
          </label>
          <select
            value={formData.gender || ''}
            onChange={(e) => handleUpdate('gender', e.target.value)}
            className={inputClasses}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Mobile Number */}
        <div>
          <label className={labelClasses}>
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#F7A31C]" />
            Mobile Number
          </label>
          <div className="space-y-3">
            <div className="relative">
              <input
                type="tel"
                value={formData.mobile || ''}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                  handleUpdate('mobile', value);
                  // Reset verification if number changes
                  if (mobileVerification.sent) {
                    setMobileVerification({
                      sent: false,
                      verified: false,
                      otp: '',
                      loading: false
                    });
                  }
                }}
                className={`${inputClasses} pl-12 ${mobileVerification.verified ? 'border-green-500 ring-green-200' : ''}`}
                placeholder="Enter mobile number"
                maxLength="10"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium text-sm sm:text-base">
                +91
              </span>
              {mobileVerification.verified && (
                <CheckCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
              )}
            </div>

            {!mobileVerification.verified && (
              <div className="flex items-center gap-3">
                {!mobileVerification.sent ? (
                  <button
                    onClick={handleSendOTP}
                    disabled={!formData.mobile || formData.mobile.length !== 10 || mobileVerification.loading}
                    className={`${buttonClasses} ${
                      formData.mobile && formData.mobile.length === 10
                        ? 'bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white hover:shadow-lg transform hover:-translate-y-0.5'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {mobileVerification.loading ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send OTP'
                    )}
                  </button>
                ) : (
                  <>
                    <input
                      type="text"
                      value={mobileVerification.otp}
                      onChange={(e) => setMobileVerification(prev => ({ 
                        ...prev, 
                        otp: e.target.value.replace(/\D/g, '').slice(0, 6) 
                      }))}
                      placeholder="Enter OTP"
                      className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      maxLength="6"
                    />
                    <button
                      onClick={handleVerifyOTP}
                      disabled={!mobileVerification.otp || mobileVerification.otp.length !== 6 || mobileVerification.loading}
                      className={`${buttonClasses} ${
                        mobileVerification.otp && mobileVerification.otp.length === 6
                          ? 'bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white hover:shadow-lg transform hover:-translate-y-0.5'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {mobileVerification.loading ? (
                        <>
                          <Loader className="w-4 h-4 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        'Verify OTP'
                      )}
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className={labelClasses}>
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#F7A31C]" />
            Email Address
          </label>
          <div className="space-y-3">
            <div className="relative">
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => {
                  handleUpdate('email', e.target.value);
                  // Reset verification if email changes
                  if (emailVerification.sent) {
                    setEmailVerification({
                      sent: false,
                      verified: false,
                      loading: false
                    });
                  }
                }}
                className={`${inputClasses} ${emailVerification.verified ? 'border-green-500 ring-green-200' : ''}`}
                placeholder="Enter email address"
              />
              {emailVerification.verified && (
                <CheckCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
              )}
            </div>

            {!emailVerification.verified && (
              <button
                onClick={handleSendEmailVerification}
                disabled={!formData.email || emailVerification.loading || emailVerification.sent}
                className={`${buttonClasses} ${
                  formData.email && !emailVerification.sent
                    ? 'bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white hover:shadow-lg transform hover:-translate-y-0.5'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                {emailVerification.loading ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : emailVerification.sent ? (
                  <>
                    <Mail className="w-4 h-4" />
                    Verification link sent! Check your email
                  </>
                ) : (
                  'Send Verification Link'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;