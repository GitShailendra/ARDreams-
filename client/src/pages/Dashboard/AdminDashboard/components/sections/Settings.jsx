import React from 'react';
import { Settings as SettingsIcon, Shield, Bell, Users } from 'lucide-react';

export const AdminSettings = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* General Settings */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">General Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <SettingsIcon className="h-5 w-5 text-gray-400" />
              <div>
                <h4 className="font-medium">Platform Settings</h4>
                <p className="text-sm text-gray-500">Configure basic platform settings</p>
              </div>
            </div>
            <button className="text-orange-500 hover:text-orange-600">
              Configure
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-gray-400" />
              <div>
                <h4 className="font-medium">Security Settings</h4>
                <p className="text-sm text-gray-500">Manage security preferences</p>
              </div>
            </div>
            <button className="text-orange-500 hover:text-orange-600">
              Configure
            </button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Bell className="h-5 w-5 text-gray-400" />
              <div>
                <h4 className="font-medium">Notification Settings</h4>
                <p className="text-sm text-gray-500">Configure notification preferences</p>
              </div>
            </div>
            <button className="text-orange-500 hover:text-orange-600">
              Configure
            </button>
          </div>
        </div>
      </div>

      {/* User Management */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">User Management</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-gray-400" />
              <div>
                <h4 className="font-medium">Admin Users</h4>
                <p className="text-sm text-gray-500">Manage admin access and permissions</p>
              </div>
            </div>
            <button className="text-orange-500 hover:text-orange-600">
              Manage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;