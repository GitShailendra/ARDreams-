const ImagePreviewModal = ({ isOpen, onClose, image, title }) => (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-3xl w-full p-4">
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="p-4 flex justify-between items-center border-b">
            <h3 className="font-medium">{title}</h3>
            <button onClick={onClose}><X className="w-5 h-5" /></button>
          </div>
          <div className="p-4">
            <img src={image} alt={title} className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </div>
   );