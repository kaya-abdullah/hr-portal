import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { About } from './components/About';
import { EmployeeInfo } from './components/EmployeeInfo';
import { Communication } from './components/Communication';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AdminAbout } from './components/admin/AdminAbout';
import { AdminEmployees } from './components/admin/AdminEmployees';
import { AdminCommunication } from './components/admin/AdminCommunication';

export type UserRole = 'employee' | 'admin';
export type ActivePage = 'dashboard' | 'about' | 'employee-info' | 'communication' | 
                         'admin-dashboard' | 'admin-about' | 'admin-employees' | 'admin-communication';

function App() {
  const [userRole, setUserRole] = useState<UserRole>('employee');
  const [activePage, setActivePage] = useState<ActivePage>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'about':
        return <About />;
      case 'employee-info':
        return <EmployeeInfo />;
      case 'communication':
        return <Communication />;
      case 'admin-dashboard':
        return <AdminDashboard />;
      case 'admin-about':
        return <AdminAbout />;
      case 'admin-employees':
        return <AdminEmployees />;
      case 'admin-communication':
        return <AdminCommunication />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        userRole={userRole}
        activePage={activePage}
        setActivePage={setActivePage}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      <div className="flex-1 flex flex-col">
        <Header 
          userRole={userRole}
          setUserRole={setUserRole}
          setSidebarOpen={setSidebarOpen}
        />
        
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;