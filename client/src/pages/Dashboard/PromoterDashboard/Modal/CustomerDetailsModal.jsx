// CustomerDetailsModal.jsx
const CustomerDetailsModal = ({ isOpen, onClose, customer }) => {
    const tabItems = ['Details', 'KYC', 'Payments', 'Activity'];
    const [activeTab, setActiveTab] = useState('Details');
   
    return (
      <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white rounded-xl shadow-xl">
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Customer Details</h3>
                <p className="text-sm text-gray-500">ID: {customer?.id}</p>
              </div>
              <button onClick={onClose}>
                <X className="w-5 h-5" />
              </button>
            </div>
   
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex gap-6">
                {tabItems.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 relative ${
                      activeTab === tab ? 'text-[#F7A31C]' : 'text-gray-500'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F7A31C]" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
   
            {/* Content based on active tab */}
            {activeTab === 'Details' && (
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500">Full Name</label>
                    <p className="text-gray-900">{customer?.name}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Mobile</label>
                    <p className="text-gray-900">{customer?.mobile}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Email</label>
                    <p className="text-gray-900">{customer?.email}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500">Registration Date</label>
                    <p className="text-gray-900">{customer?.registrationDate}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Status</label>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            )}
   
            {activeTab === 'KYC' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">KYC Documents</h4>
                    <p className="text-sm text-gray-500">Verify customer documents</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg">
                      Reject
                    </button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                      Approve
                    </button>
                  </div>
                </div>
   
                <div className="grid grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h5 className="text-sm font-medium mb-2">Aadhar Card</h5>
                    <div className="aspect-video bg-gray-100 rounded-lg"></div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h5 className="text-sm font-medium mb-2">Pan Card</h5>
                    <div className="aspect-video bg-gray-100 rounded-lg"></div>
                  </div>
                </div>
              </div>
            )}
   
            {activeTab === 'Payments' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-900">Payment History</h4>
                  <button className="text-sm text-[#F7A31C]">Download Statement</button>
                </div>
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Date</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Amount</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* Add payment rows */}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    );
   };
   
   export default CustomerDetailsModal;