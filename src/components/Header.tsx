import React from 'react';
import { Menu, HardHat, Users, Settings } from 'lucide-react';
import { UserRole } from '../App';

interface HeaderProps {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  setSidebarOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ userRole, setUserRole, setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-4 lg:px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          >
            <Menu size={24} />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="bg-orange-500 p-2 rounded-lg">
              <HardHat className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">XRAY</h1>
              <p className="text-sm text-gray-500">Construction HR Portal</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setUserRole('employee')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                userRole === 'employee'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Users size={16} className="inline mr-2" />
              Employee
            </button>
            <button
              onClick={() => setUserRole('admin')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                userRole === 'admin'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Settings size={16} className="inline mr-2" />
              Admin
            </button>
          </div>

          <div className="hidden sm:flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">{userRole === 'admin' ? 'HR Manager' : 'Site Engineer'}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};