import React, { useState } from 'react';
import { User, MapPin, Award, FileText, Edit, Save, X, Plus } from 'lucide-react';

export const EmployeeInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@xray.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, City, State 12345',
    emergencyContact: 'Jane Doe - +1 (555) 987-6543',
    position: 'Senior Site Engineer',
    department: 'Engineering',
    startDate: '2022-03-15',
  });

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'assignments', label: 'Project Assignments', icon: MapPin },
    { id: 'skills', label: 'Skills & Resume', icon: FileText },
    { id: 'certificates', label: 'Certificates & Training', icon: Award },
  ];

  const assignments = [
    {
      id: 1,
      project: 'Downtown Office Complex',
      site: 'Site A - Foundation',
      role: 'Lead Engineer',
      startDate: '2024-11-01',
      status: 'Active',
      progress: 75
    },
    {
      id: 2,
      project: 'Residential Tower Phase 2',
      site: 'Site C - Structure',
      role: 'Quality Inspector',
      startDate: '2024-08-15',
      status: 'Completed',
      progress: 100
    },
  ];

  const skills = [
    { category: 'Technical Skills', items: ['Structural Design', 'AutoCAD', 'Project Management', 'Quality Control'] },
    { category: 'Certifications', items: ['PE License', 'PMP Certified', 'OSHA 30-Hour', 'First Aid/CPR'] },
    { category: 'Software Proficiency', items: ['AutoCAD', 'Revit', 'MS Project', 'Excel Advanced'] },
  ];

  const certificates = [
    {
      name: 'Professional Engineer License',
      issuer: 'State Engineering Board',
      issueDate: '2021-06-15',
      expiryDate: '2025-06-15',
      status: 'Valid'
    },
    {
      name: 'OSHA 30-Hour Construction',
      issuer: 'OSHA Training Institute',
      issueDate: '2024-01-10',
      expiryDate: '2027-01-10',
      status: 'Valid'
    },
    {
      name: 'First Aid & CPR Certification',
      issuer: 'American Red Cross',
      issueDate: '2024-03-20',
      expiryDate: '2026-03-20',
      status: 'Valid'
    },
  ];

  const handleSave = () => {
    setEditMode(false);
    // Here you would typically save to backend
    console.log('Saving data:', formData);
  };

  const handleCancel = () => {
    setEditMode(false);
    // Reset form data to original values
  };

  const renderPersonalInfo = () => (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
        {!editMode ? (
          <button
            onClick={() => setEditMode(true)}
            className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            <Edit size={16} />
            <span>Edit</span>
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <Save size={16} />
              <span>Save</span>
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center space-x-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <X size={16} />
              <span>Cancel</span>
            </button>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            {editMode ? (
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              />
            ) : (
              <p className="text-gray-900">{formData.firstName}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            {editMode ? (
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              />
            ) : (
              <p className="text-gray-900">{formData.lastName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            {editMode ? (
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              />
            ) : (
              <p className="text-gray-900">{formData.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            {editMode ? (
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              />
            ) : (
              <p className="text-gray-900">{formData.phone}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            {editMode ? (
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              />
            ) : (
              <p className="text-gray-900">{formData.address}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
            {editMode ? (
              <input
                type="text"
                value={formData.emergencyContact}
                onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              />
            ) : (
              <p className="text-gray-900">{formData.emergencyContact}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-4">
      {assignments.map((assignment) => (
        <div key={assignment.id} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{assignment.project}</h3>
              <p className="text-orange-600 font-medium">{assignment.site}</p>
              <p className="text-sm text-gray-500">Role: {assignment.role}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              assignment.status === 'Active' 
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {assignment.status}
            </span>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
            <span>Start Date: {assignment.startDate}</span>
            <span>Progress: {assignment.progress}%</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${assignment.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderSkills = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {skills.map((skillGroup, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
          <div className="space-y-2">
            {skillGroup.items.map((skill, skillIndex) => (
              <div key={skillIndex} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderCertificates = () => (
    <div className="space-y-4">
      {certificates.map((cert, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
              <p className="text-gray-600 mt-1">Issued by: {cert.issuer}</p>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <p className="text-sm text-gray-500">Issue Date</p>
                  <p className="text-gray-900 font-medium">{cert.issueDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Expiry Date</p>
                  <p className="text-gray-900 font-medium">{cert.expiryDate}</p>
                </div>
              </div>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {cert.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'personal': return renderPersonalInfo();
      case 'assignments': return renderAssignments();
      case 'skills': return renderSkills();
      case 'certificates': return renderCertificates();
      default: return renderPersonalInfo();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Information</h1>
        <p className="text-gray-600 mt-2">Manage your personal information, skills, and certifications.</p>
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