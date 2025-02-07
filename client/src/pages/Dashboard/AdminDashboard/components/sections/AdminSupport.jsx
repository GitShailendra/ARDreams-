export const AdminSupport = () => {
  return (
    <div className="space-y-6">
      {/* Ticket Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold">Open Tickets</h3>
          <p className="text-3xl font-bold mt-2">24</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold">Average Response</h3>
          <p className="text-3xl font-bold mt-2">2.5h</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold">Resolved Today</h3>

          <p className="text-3xl font-bold mt-2">18</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold">Customer Satisfaction</h3>
          <p className="text-3xl font-bold mt-2">94%</p>
        </div>
      </div>

      {/* Support Tickets */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Support Tickets</h3>
        <div className="space-y-4">
          {/* Ticket items would go here */}
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">Payment Issue</h4>
                <p className="text-sm text-gray-500">Ticket #1234</p>
                <p className="text-sm mt-2">Customer reporting payment not reflecting in account</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                In Progress
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSupport;