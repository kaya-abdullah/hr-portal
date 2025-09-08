import React, { useState } from 'react';
import { Building, Users, Shield, Heart, Edit, Save, X, Upload, Plus, Trash2 } from 'lucide-react';

export const AdminAbout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('company');
  const [editMode, setEditMode] = useState(false);

  const tabs = [
    { id: 'company', label: 'Company Info', icon: Building },
    { id: 'team', label: 'Management Team', icon: Users },
    { id: 'policies', label: 'Policies & Guidelines', icon: Shield },
    { id: 'safety', label: 'Health & Safety', icon: Heart },
  ];

  const [companyInfo, setCompanyInfo] = useState({
    mission: 'To build exceptional construction projects while prioritizing safety, quality, and innovation.',
    vision: 'To be the leading construction company recognized for our commitment to excellence, sustainability, and positive impact on the communities we serve.',
    values: [
      'Safety First',
      'Quality Excellence', 
      'Integrity & Ethics',
      'Innovation & Growth',
      'Team Collaboration'
    ]
  });

  const [managementTeam, setManagementTeam] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      department: 'Executive',
      experience: '15 years',
      email: 'sarah.johnson@xray.com',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Chief Operations Officer',
      department: 'Operations',
      experience: '12 years',
      email: 'michael.chen@xray.com',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=200&h=200&fit=crop'
    }
  ]);

  const [policies, setPolicies] = useState([
    { id: 1, name: 'Employee Handbook', type: 'PDF', size: '2.1 MB', updated: '2025-01-01' },
    { id: 2, name: 'Code of Ethics', type: 'PDF', size: '1.5 MB', updated: '2024-12-15' },
  ]);

  const [safetyGuides, setSafetyGuides] = useState([
    { id: 1, name: 'General Safety Procedures', type: 'PDF', size: '3.2 MB', updated: '2025-01-05' },
    { id: 2, name: 'PPE Guidelines', type: 'PDF', size: '2.8 MB', updated: '2024-12-28' },
  ]);

  const renderCompanyInfo = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Company Information</h3>
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
                onClick={() => setEditMode(false)}
                className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Save size={16} />
                <span>Save</span>
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="flex items-center space-x-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <X size={16} />
                <span>Cancel</span>
              </button>
            </div>
          )}
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mission Statement</label>
            {editMode ? (
              <textarea
                value={companyInfo.mission}
                onChange={(e) => setCompanyInfo({...companyInfo, mission: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 h-24 resize-none"
              />
            ) : (
              <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{companyInfo.mission}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Vision Statement</label>
            {editMode ? (
              <textarea
                value={companyInfo.vision}
                onChange={(e) => setCompanyInfo({...companyInfo, vision: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 h-24 resize-none"
              />
            ) : (
              <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{companyInfo.vision}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Values</label>
            {editMode ? (
              <div className="space-y-2">
                {companyInfo.values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...companyInfo.values];
                        newValues[index] = e.target.value;
                        setCompanyInfo({...companyInfo, values: newValues});
                      }}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    />
                    <button
                      onClick={() => {
                        const newValues = companyInfo.values.filter((_, i) => i !== index);
                        setCompanyInfo({...companyInfo, values: newValues});
                      }}
                      className="p-2 text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => setCompanyInfo({...companyInfo, values: [...companyInfo.values, 'New Value']})}
                  className="flex items-center space-x-2 text-orange-600 hover:text-orange-700"
                >
                  <Plus size={16} />
                  <span>Add Value</span>
                </button>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-1">
                  {companyInfo.values.map((value, index) => (
                    <li key={index} className="text-gray-700">• {value}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTeamManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Management Team</h3>
          <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            <Plus size={16} />
            <span>Add Member</span>
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {managementTeam.map((member) => (
              <div key={member.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-orange-600 font-medium">{member.position}</p>
                    <p className="text-sm text-gray-500">{member.department}</p>
                    <p className="text-sm text-gray-500">{member.experience} experience</p>
                    <p className="text-sm text-gray-500">{member.email}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-orange-500 hover:text-orange-700">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 text-red-500 hover:text-red-700">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPoliciesManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Policies & Guidelines</h3>
          <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            <Upload size={16} />
            <span>Upload Document</span>
          </button>
        </div>

        <div className="p-6 space-y-4">
          {policies.map((policy) => (
            <div key={policy.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{policy.name}</h4>
                  <p className="text-sm text-gray-500">{policy.type} • {policy.size} • Updated {policy.updated}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-orange-500 hover:text-orange-700">
                  <Edit size={16} />
                </button>
                <button className="p-2 text-red-500 hover:text-red-700">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSafetyManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Health & Safety Guides</h3>
          <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            <Upload size={16} />
            <span>Upload Guide</span>
          </button>
        </div>

        <div className="p-6 space-y-4">
          {safetyGuides.map((guide) => (
            <div key={guide.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{guide.name}</h4>
                  <p className="text-sm text-gray-500">{guide.type} • {guide.size} • Updated {guide.updated}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-green-500 hover:text-green-700">
                  <Edit size={16} />
                </button>
                <button className="p-2 text-red-500 hover:text-red-700">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'company': return renderCompanyInfo();
      case 'team': return renderTeamManagement();
      case 'policies': return renderPoliciesManagement();
      case 'safety': return renderSafetyManagement();
      default: return renderCompanyInfo();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Manage Company Information</h1>
        <p className="text-gray-600 mt-2">Update company details, team information, and documentation.</p>
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