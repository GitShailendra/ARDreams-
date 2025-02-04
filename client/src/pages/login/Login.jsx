// src/pages/auth/Login.jsx
import React, { useState } from 'react';
import { Mail, Lock, X } from 'lucide-react';
// Import your background image
import bgImage from '../../assets/Images/Background/LoginBG.jpg';

const Login = () => {
 const [formData, setFormData] = useState({
   email: '',
   password: '',
   rememberMe: false
 });

 return (
   <div 
     className="min-h-screen relative flex items-center justify-center p-4 md:p-6 lg:p-8"
     style={{
       backgroundImage: `url(${bgImage})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat'
     }}
   >
     {/* Overlay */}
     <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

     {/* Login Card */}
     <div className="w-full max-w-sm sm:max-w-md relative z-10">
       <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20">
         <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Login</h2>

         <form className="space-y-5">
           {/* Email/UserID Field */}
           <div>
             <label className="block text-gray-200 text-sm font-medium mb-2">
               Email or User ID
             </label>
             <div className="relative">
               <input
                 type="text"
                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent"
                 placeholder="Enter your email"
               />
               <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
             </div>
           </div>

           {/* Password Field */}
           <div>
             <label className="block text-gray-200 text-sm font-medium mb-2">
               Password
             </label>
             <div className="relative">
               <input
                 type="password"
                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F7A31C] focus:border-transparent"
                 placeholder="Enter your password"
               />
               <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
             </div>
           </div>

           {/* Remember & Forgot */}
           <div className="flex items-center justify-between text-sm">
             <div className="flex items-center">
               <input
                 type="checkbox"
                 id="remember"
                 className="h-4 w-4 rounded border-gray-300 text-[#F7A31C] focus:ring-[#F7A31C]"
               />
               <label htmlFor="remember" className="ml-2 text-gray-300">
                 Remember me
               </label>
             </div>
             <a href="/forgot-password" className="text-[#F7A31C] hover:text-[#FFD700] transition-colors">
               Forgot Password?
             </a>
           </div>

           {/* Login Button */}
           <button
             type="submit"
             className="w-full bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
           >
             Login
           </button>

           {/* Register Link */}
           <p className="text-center text-gray-300 text-sm">
             Don't have an account?{' '}
             <a href="/signup" className="text-[#F7A31C] hover:text-[#FFD700] transition-colors">
               Register
             </a>
           </p>
         </form>
       </div>
     </div>
   </div>
 );
};

export default Login;