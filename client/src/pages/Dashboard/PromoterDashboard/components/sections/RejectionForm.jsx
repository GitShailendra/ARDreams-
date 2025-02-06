const RejectionForm = ({ isOpen, onClose, onSubmit }) => {
    const reasons = [
      'Document not clear',
      'Document expired',
      'Information mismatch',
      'Document incomplete',
      'Other'
    ];
   
    return (
      <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-4">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Reject Document</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Reason for Rejection</label>
                <select className="w-full border rounded-lg p-2">
                  {reasons.map(reason => (
                    <option key={reason} value={reason}>{reason}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Additional Comments</label>
                <textarea 
                  rows="3" 
                  className="w-full border rounded-lg p-2"
                  placeholder="Provide details about rejection..."
                />
              </div>
              <div className="flex gap-3 justify-end">
                <button type="button" onClick={onClose} className="px-4 py-2 text-gray-500">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded-lg">
                  Confirm Rejection
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
   };
   
   export { ImagePreviewModal, RejectionForm };