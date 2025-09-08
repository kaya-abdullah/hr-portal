import React, { useState } from 'react';
import { Building, Target, Heart, Shield, Users, ChevronRight, Download } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Company Overview', icon: Building },
    { id: 'team', label: 'Management Team', icon: Users },
    { id: 'policies', label: 'Policies & Guidelines', icon: Shield },
    { id: 'safety', label: 'Health & Safety', icon: Heart },
  ];

  const managementTeam = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      department: 'Executive',
      experience: '15 years',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=200&h=200&fit=crop'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Operations Officer',
      department: 'Operations',
      experience: '12 years',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=200&h=200&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      position: 'HR Director',
      department: 'Human Resources',
      experience: '10 years',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=200&h=200&fit=crop'
    },
    {
      name: 'David Thompson',
      position: 'Safety Manager',
      department: 'Health & Safety',
      experience: '8 years',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=200&h=200&fit=crop'
    },
  ];

  const policies = [
    { name: 'Employee Handbook', type: 'PDF', size: '2.1 MB', updated: '2025-01-01' },
    { name: 'Code of Ethics', type: 'PDF', size: '1.5 MB', updated: '2024-12-15' },
    { name: 'Anti-Harassment Policy', type: 'PDF', size: '800 KB', updated: '2024-12-10' },
    { name: 'Data Privacy Guidelines', type: 'PDF', size: '1.2 MB', updated: '2024-11-20' },
  ];

  const safetyGuides = [
    { name: 'General Safety Procedures', type: 'PDF', size: '3.2 MB', updated: '2025-01-05' },
    { name: 'Personal Protective Equipment Guide', type: 'PDF', size: '2.8 MB', updated: '2024-12-28' },
    { name: 'Emergency Response Procedures', type: 'PDF', size: '1.9 MB', updated: '2024-12-20' },
    { name: 'Equipment Safety Protocols', type: 'PDF', size: '2.5 MB', updated: '2024-12-15' },
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Target className="h-6 w-6 text-orange-500" />
            <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
          </div>
          <p className="text-gray-600">
            To build exceptional construction projects while prioritizing safety, quality, and innovation. 
            We are committed to creating lasting value for our clients and communities.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="h-6 w-6 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-900">Our Values</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Safety First</li>
            <li>• Quality Excellence</li>
            <li>• Integrity & Ethics</li>
            <li>• Innovation & Growth</li>
            <li>• Team Collaboration</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Building className="h-6 w-6 text-green-500" />
            <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
          </div>
          <p className="text-gray-600">
            To be the leading construction company recognized for our commitment to excellence, 
            sustainability, and positive impact on the communities we serve.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Organizational Structure</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="text-center">
            <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg inline-block mb-4 font-medium">
              CEO & Board of Directors
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg font-medium">Operations</div>
              <div className="text-sm text-gray-600 mt-2">Project Management<br/>Site Supervision</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg font-medium">Administration</div>
              <div className="text-sm text-gray-600 mt-2">HR & Finance<br/>Legal & Compliance</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg font-medium">Safety</div>
              <div className="text-sm text-gray-600 mt-2">Health & Safety<br/>Quality Control</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTeam = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {managementTeam.map((member, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-orange-600 font-medium">{member.position}</p>
              <p className="text-sm text-gray-500">{member.department} • {member.experience} experience</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPolicies = () => (
    <div className="space-y-4">
      {policies.map((policy, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="bg-red-100 p-3 rounded-lg">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{policy.name}</h3>
              <p className="text-sm text-gray-500">{policy.type} • {policy.size} • Updated {policy.updated}</p>
            </div>
          </div>
          <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            <Download size={16} />
            <span>Download</span>
          </button>
        </div>
      ))}
    </div>
  );

  const renderSafety = () => (
    <div className="space-y-4">
      {safetyGuides.map((guide, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Heart className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{guide.name}</h3>
              <p className="text-sm text-gray-500">{guide.type} • {guide.size} • Updated {guide.updated}</p>
            </div>
          </div>
          <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            <Download size={16} />
            <span>Download</span>
          </button>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'team': return renderTeam();
      case 'policies': return renderPolicies();
      case 'safety': return renderSafety();
      default: return renderOverview();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">About XRAY Construction</h1>
        <p className="text-gray-600 mt-2">Learn about our company, values, and leadership team.</p>
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

        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};