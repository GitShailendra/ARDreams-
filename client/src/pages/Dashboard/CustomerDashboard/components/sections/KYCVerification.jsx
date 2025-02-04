// KYCVerification.jsx
const KYCVerification = () => {
    const documents = [
      {
        type: 'aadhar',
        title: 'Aadhar Card',
        frontImage: null,
        backImage: null,
        status: 'pending'
      },
      {
        type: 'pan',
        title: 'PAN Card',
        image: null,
        status: 'pending'
      },
      {
        type: 'photo',
        title: 'Recent Photo',
        image: null,
        status: 'pending'
      }
    ];
   
    return (
      <div className="bg-white rounded-xl p-6">
        <div className="border-b pb-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900">KYC Verification</h3>
              <p className="text-sm text-gray-500">Customer ID: AR001</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50">
                Reject
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Approve All
              </button>
            </div>
          </div>
        </div>
   
        <div className="grid grid-cols-2 gap-6">
          {documents.map((doc) => (
            <div key={doc.type} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 border-b">
                <h4 className="font-medium text-gray-900">{doc.title}</h4>
              </div>
              {doc.type === 'aadhar' ? (
                <div className="p-4 space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Front Side</p>
                    <div className="aspect-video bg-gray-100 rounded-lg"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Back Side</p>
                    <div className="aspect-video bg-gray-100 rounded-lg"></div>
                  </div>
                </div>
              ) : (
                <div className="p-4">
                  <div className="aspect-video bg-gray-100 rounded-lg"></div>
                </div>
              )}
              <div className="px-4 py-3 bg-gray-50 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Status: Pending</span>
                  <div className="flex gap-2">
                    <button className="text-red-500 hover:text-red-600">
                      <X className="w-5 h-5" />
                    </button>
                    <button className="text-green-500 hover:text-green-600">
                      <CheckCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
   
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Verification Notes</h4>
          <textarea 
            className="w-full p-3 border rounded-lg"
            placeholder="Add notes about verification..."
            rows="3"
          ></textarea>
        </div>
      </div>
    );
   };
   
   export default KYCVerification;