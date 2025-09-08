import React, { useState } from 'react';
import { Search, Plus, Filter, Edit, Trash2, MapPin, Award, Calendar, User } from 'lucide-react';

export const AdminEmployees: React.FC = () => {
  const [activeTab, setActiveTab] = useState('employees');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'employees', label: 'Employee Management', icon: User },
    { id: 'assignments', label: 'Project Assignments', icon: MapPin },
    { id: 'certificates', label: 'Certificates & Training', icon: Award },
  ];

  const employees = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@xray.com',
      position: 'Senior Site Engineer',
      department: 'Engineering',
      site: 'Downtown Office Complex',
      startDate: '2022-03-15',
      status: 'Active',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      email: 'maria.rodriguez@xray.com',
      position: 'Safety Coordinator',
      department: 'Safety',
      site: 'Residential Tower Phase 2',
      startDate: '2023-01-10',
      status: 'Active',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'David Chen',
      email: 'david.chen@xray.com',
      position: 'Project Manager',
      department: 'Operations',
      site: 'Infrastructure Development',
      startDate: '2021-08-20',
      status: 'Active',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=150&h=150&fit=crop'
    },
  ];

  const assignments = [
    {
      id: 1,
      project: 'Downtown Office Complex',
      site: 'Site A - Foundation',
      employees: 15,
      startDate: '2024-11-01',
      endDate: '2025-03-15',
      status: 'In Progress',
      progress: 75
    },
    {
      id: 2,
      project: 'Residential Tower Phase 2',
      site: 'Site C - Structure',
      employees: 22,
      startDate: '2024-08-15',
      endDate: '2025-01-30',
      status: 'Near Completion',
      progress: 90
    },
    {
      id: 3,
      project: 'Infrastructure Development',
      site: 'Highway Extension',
      employees: 35,
      startDate: '2024-06-01',
      endDate: '2025-12-31',
      status: 'In Progress',
      progress: 45
    },
  ];

  const certificates = [
    {
      id: 1,
      name: 'OSHA 30-Hour Construction Safety',
      totalEmployees: 45,
      certified: 38,
      expiringSoon: 7,
      expired: 0,
      nextExpiryDate: '2025-02-15'
    },
    {
      id: 2,
      name: 'First Aid & CPR Certification',
      totalEmployees: 45,
      certified: 32,
      expiringSoon: 5,
      expired: 8,
      nextExpiryDate: '2025-01-20'
    },
    {
      id: 3,
      name: 'Forklift Operation License',
      totalEmployees: 20,
      certified: 18,
      expiringSoon: 2,
      expired: 0,
      nextExpiryDate: '2025-03-10'
    },
  ];

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Near Completion': return 'bg-orange-100 text-orange-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderEmployeeManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <h3 className="text-lg font-semibold text-gray-900">Employee Database</h3>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search employees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <Filter size={20} />
                <span>Filter</span>
              </button>
              <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                <Plus size={16} />
                <span>Add Employee</span>
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Site</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={employee.image}
                        alt={employee.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                        <div className="text-sm text-gray-500">{employee.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.position}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.site}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(employee.status)}`}>
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-orange-600 hover:text-orange-900">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAssignmentManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Project Assignments</h3>
          <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            <Plus size={16} />
            <span>New Assignment</span>
          </button>
        </div>

        <div className="p-6 space-y-4">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{assignment.project}</h4>
                  <p className="text-orange-600 font-medium">{assignment.site}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>{assignment.employees} employees assigned</span>
                    <span>•</span>
                    <span>{assignment.startDate} - {assignment.endDate}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(assignment.status)}`}>
                    {assignment.status}
                  </span>
                  <button className="p-2 text-orange-500 hover:text-orange-700">
                    <Edit size={16} />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>Progress: {assignment.progress}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${assignment.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCertificateManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Certificate & Training Management</h3>
          <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            <Plus size={16} />
            <span>Schedule Training</span>
          </button>
        </div>

        <div className="p-6 space-y-4">
          {certificates.map((cert) => (
            <div key={cert.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{cert.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">Next expiry: {cert.nextExpiryDate}</p>
                </div>
                <button className="p-2 text-green-500 hover:text-green-700">
                  <Calendar size={16} />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">{cert.totalEmployees}</p>
                  <p className="text-sm text-gray-500">Total Employees</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{cert.certified}</p>
                  <p className="text-sm text-gray-500">Certified</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600">{cert.expiringSoon}</p>
                  <p className="text-sm text-gray-500">Expiring Soon</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600">{cert.expired}</p>
                  <p className="text-sm text-gray-500">Expired</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>Certification Rate: {Math.round((cert.certified / cert.totalEmployees) * 100)}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(cert.certified / cert.totalEmployees) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'employees': return renderEmployeeManagement();
      case 'assignments': return renderAssignmentManagement();
      case 'certificates': return renderCertificateManagement();
      default: return renderEmployeeManagement();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Employee Management</h1>
        <p className="text-gray-600 mt-2">Manage employee information, assignments, and certifications.</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-gray-200">
          <div className="flex flex-wrap">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {renderContent()}
    </div>
  );
};