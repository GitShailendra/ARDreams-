import React from 'react';
import { Upload, X, Check, Image } from 'lucide-react';

const Documents = ({ formData = {}, updateForm }) => {
  // Document types configuration
  const documents = [
    {
      id: 'aadharFront',
      title: 'Aadhar Card Front',
      description: 'Front side of your Aadhar card',
      required: true
    },
    {
      id: 'aadharBack',
      title: 'Aadhar Card Back',
      description: 'Back side of your Aadhar card',
      required: true
    },
    {
      id: 'panCard',
      title: 'PAN Card',
      description: 'Your PAN card',
      required: true
    },
    {
      id: 'photo',
      title: 'Recent Photograph',
      description: 'Passport size photo with white background',
      required: true
    },
    {
      id: 'signature',
      title: 'Digital Signature',
      description: 'Clear signature on white paper',
      required: true
    },
    {
      id: 'addressProof',
      title: 'Address Proof',
      description: 'Any government issued address proof',
      required: true
    }
  ];

  // File validation helper
  const validateFile = (file) => {
    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert('File size should be less than 2MB');
      return false;
    }

    // Check file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a valid image file (JPG or PNG)');
      return false;
    }

    return true;
  };

  const handleFileChange = (documentId, file) => {
    if (file && validateFile(file)) {
      updateForm?.(documentId, file);
    }
  };

  const removeFile = (documentId) => {
    updateForm?.(documentId, null);
  };

  // Safe URL creation with cleanup
  const getFilePreview = (file) => {
    if (file instanceof File) {
      const url = URL.createObjectURL(file);
      // Cleanup URL when component updates
      React.useEffect(() => {
        return () => URL.revokeObjectURL(url);
      }, [url]);
      return url;
    }
    return null;
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <p className="text-sm text-blue-700">
          Please upload clear, readable images of your documents. Maximum file size: 2MB
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <div key={doc.id} className="rounded-lg border border-gray-200 p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-gray-900 font-medium">{doc.title}</h3>
                <p className="text-sm text-gray-500">{doc.description}</p>
              </div>
              {doc.required && (
                <span className="text-xs text-red-500 font-medium">Required</span>
              )}
            </div>

            {!formData[doc.id] ? (
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Click to upload</p>
                  <p className="text-xs text-gray-400 mt-1">JPG or PNG only</p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/jpeg,image/png"
                  onChange={(e) => handleFileChange(doc.id, e.target.files?.[0])}
                />
              </label>
            ) : (
              <div className="relative w-full h-32 rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={getFilePreview(formData[doc.id])}
                  alt={doc.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => removeFile(doc.id)}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-green-500 text-white text-xs py-1 px-2 flex items-center">
                  <Check className="w-3 h-3 mr-1" />
                  Uploaded
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-2">Document Guidelines:</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>All documents should be clear and readable</li>
          <li>Upload only JPG or PNG files</li>
          <li>Each file should be less than 2MB</li>
          <li>Documents should not be expired</li>
          <li>Avoid uploading blurry or incomplete documents</li>
        </ul>
      </div>
    </div>
  );
};

export default Documents;