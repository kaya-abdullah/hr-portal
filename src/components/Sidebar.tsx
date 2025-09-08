import React from 'react';
import { X, Home, Info, User, MessageSquare, BarChart3, Users, Megaphone, Settings } from 'lucide-react';
import { UserRole, ActivePage } from '../App';

interface SidebarProps {
  userRole: UserRole;
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  userRole, 
  activePage, 
  setActivePage, 
  isOpen, 
  setIsOpen 
}) => {
  const employeeMenuItems = [
    { id: 'dashboard' as ActivePage, icon: Home, label: 'Dashboard' },
    { id: 'about' as ActivePage, icon: Info, label: 'About Company' },
    { id: 'employee-info' as ActivePage, icon: User, label: 'My Information' },
    { id: 'communication' as ActivePage, icon: MessageSquare, label: 'Communication' },
  ];

  const adminMenuItems = [
    { id: 'admin-dashboard' as ActivePage, icon: BarChart3, label: 'Admin Dashboard' },
    { id: 'admin-about' as ActivePage, icon: Settings, label: 'Manage Company Info' },
    { id: 'admin-employees' as ActivePage, icon: Users, label: 'Manage Employees' },
    { id: 'admin-communication' as ActivePage, icon: Megaphone, label: 'Manage Communication' },
  ];

  const menuItems = userRole === 'admin' ? adminMenuItems : employeeMenuItems;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:relative inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Mobile header */}
          <div className="lg:hidden flex items-center justify-between p-4 border-b">
            <span className="text-lg font-semibold text-gray-900">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsOpen(false);
                  }}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors
                    ${activePage === item.id
                      ? 'bg-orange-50 text-orange-700 border-r-4 border-orange-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${userRole === 'admin' ? 'bg-red-500' : 'bg-green-500'}`} />
              <span className="text-sm text-gray-600">
                {userRole === 'admin' ? 'Administrator Mode' : 'Employee Mode'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};