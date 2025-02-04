// pages/Dashboard/components/sections/CustomerSection.jsx
import React, { useState } from 'react';
import { Search, Filter, UserPlus, FileCheck, AlertTriangle, CheckCircle, X } from 'lucide-react';

const CustomerSection = () => {
 const [activeTab, setActiveTab] = useState('all');
 
 return (
   <div className="space-y-6">
     {/* Header */}
     <div className="flex justify-between items-center">
       <h2 className="text-2xl font-bold text-gray-800">Customer Management</h2>
       <button className="flex items-center gap-2 bg-[#F7A31C] text-white px-4 py-2 rounded-lg hover:bg-[#E69016]">
         <UserPlus className="w-5 h-5" />
         Add Customer
       </button>
     </div>

     {/* Search and Filter */}
     <div className="flex gap-4">
       <div className="flex-1 relative">
         <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
         <input 
           type="text"
           placeholder="Search customers..."
           className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F7A31C]"
         />
       </div>
       <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
         <Filter className="w-5 h-5" />
         Filters
       </button>
     </div>

     {/* Tabs */}
     <div className="border-b border-gray-200">
       <nav className="flex gap-6">
         {[
           { id: 'all', label: 'All Customers', count: 127 },
           { id: 'pending', label: 'Pending KYC', count: 12 },
           { id: 'active', label: 'Active', count: 98 },
           { id: 'inactive', label: 'Inactive', count: 17 }
         ].map((tab) => (
           <button
             key={tab.id}
             onClick={() => setActiveTab(tab.id)}
             className={`pb-4 relative ${
               activeTab === tab.id
                 ? 'text-[#F7A31C]'
                 : 'text-gray-500 hover:text-gray-700'
             }`}
           >
             {tab.label}
             <span className="ml-2 text-sm text-gray-400">({tab.count})</span>
             {activeTab === tab.id && (
               <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F7A31C]"></span>
             )}
           </button>
         ))}
       </nav>
     </div>

     {/* Customer Table */}
     <div className="bg-white rounded-xl shadow-sm overflow-hidden">
       <table className="w-full">
         <thead className="bg-gray-50">
           <tr>
             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">KYC Status</th>
             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Payment</th>
             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
           </tr>
         </thead>
         <tbody className="divide-y divide-gray-200">
           {[...Array(5)].map((_, idx) => (
             <tr key={idx} className="hover:bg-gray-50">
               <td className="px-6 py-4">
                 <div className="flex items-center">
                   <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                   <div className="ml-4">
                     <div className="text-sm font-medium text-gray-900">Customer Name</div>
                     <div className="text-sm text-gray-500">ID: AR001{idx}</div>
                   </div>
                 </div>
               </td>
               <td className="px-6 py-4">
                 <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                   Active
                 </span>
               </td>
               <td className="px-6 py-4">
                 <span className="flex items-center text-sm">
                   <FileCheck className="w-4 h-4 mr-1.5 text-green-500" />
                   Verified
                 </span>
               </td>
               <td className="px-6 py-4">
                 <div>
                   <div className="text-sm text-gray-900">₹1,000</div>
                   <div className="text-sm text-gray-500">Jan 15, 2024</div>
                 </div>
               </td>
               <td className="px-6 py-4">
                 <button className="text-[#F7A31C] hover:text-[#E69016] text-sm font-medium">
                   View Details
                 </button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>

     {/* Pagination */}
     <div className="flex justify-between items-center">
       <div className="text-sm text-gray-500">
         Showing 1-5 of 127 customers
       </div>
       <div className="flex gap-2">
         <button className="px-3 py-1 border rounded hover:bg-gray-50">Previous</button>
         <button className="px-3 py-1 border rounded bg-[#F7A31C] text-white">1</button>
         <button className="px-3 py-1 border rounded hover:bg-gray-50">2</button>
         <button className="px-3 py-1 border rounded hover:bg-gray-50">3</button>
         <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
       </div>
     </div>
   </div>
 );
};

export default CustomerSection;