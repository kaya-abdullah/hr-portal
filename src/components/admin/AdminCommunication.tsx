import React, { useState } from 'react';
import { Plus, Edit, Trash2, Send, Eye, Filter, Calendar, Users, Megaphone, MessageSquare, Heart } from 'lucide-react';

export const AdminCommunication: React.FC = () => {
  const [activeTab, setActiveTab] = useState('announcements');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const tabs = [
    { id: 'announcements', label: 'Manage Announcements', icon: Megaphone },
    { id: 'news', label: 'Manage News', icon: MessageSquare },
    { id: 'forum', label: 'Forum Moderation', icon: Users },
    { id: 'celebrations', label: 'Celebrations', icon: Heart },
  ];

  const announcements = [
    {
      id: 1,
      title: 'Mandatory Safety Training - All Sites',
      content: 'All employees must attend the safety training session scheduled for this Friday...',
      author: 'Admin',
      date: '2025-01-08',
      priority: 'high',
      sites: ['All Sites'],
      category: 'Safety',
      status: 'Published',
      views: 142
    },
    {
      id: 2,
      title: 'New Equipment Delivery Schedule',
      content: 'Heavy machinery will be delivered to Site A on January 12th...',
      author: 'Admin',
      date: '2025-01-07',
      priority: 'medium',
      sites: ['Site A', 'Site B'],
      category: 'Operations',
      status: 'Draft',
      views: 0
    },
  ];

  const news = [
    {
      id: 1,
      title: 'XRAY Construction Wins Major Infrastructure Contract',
      content: 'We are proud to announce that XRAY has been awarded...',
      author: 'Communications Team',
      date: '2025-01-05',
      status: 'Published',
      views: 256,
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Sustainability Initiative Launch',
      content: 'XRAY is launching a comprehensive sustainability program...',
      author: 'Environmental Team',
      date: '2025-01-03',
      status: 'Published',
      views: 189,
      image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?w=400&h=200&fit=crop'
    },
  ];

  const forumPosts = [
    {
      id: 1,
      title: 'Best practices for concrete mixing in cold weather',
      author: 'Mike Johnson',
      date: '2025-01-08',
      replies: 5,
      status: 'Approved',
      flagged: false
    },
    {
      id: 2,
      title: 'New safety equipment recommendations',
      author: 'Sarah Williams',
      date: '2025-01-07',
      replies: 8,
      status: 'Pending Review',
      flagged: true
    },
  ];

  const celebrations = [
    {
      id: 1,
      type: 'birthday',
      title: 'Happy Birthday Maria!',
      date: '2025-01-08',
      status: 'Active',
      employeeName: 'Maria Rodriguez'
    },
    {
      id: 2,
      type: 'anniversary',
      title: '5 Years with XRAY Construction',
      date: '2025-01-06',
      status: 'Active',
      employeeName: 'David Chen'
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Pending Review': return 'bg-yellow-100 text-yellow-800';
      case 'Active': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderAnnouncementManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Announcement Management</h3>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Filter size={20} />
              <span>Filter</span>
            </button>
            <button 
              onClick={() => setShowCreateModal(true)}
              className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Plus size={16} />
              <span>New Announcement</span>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{announcement.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(announcement.priority)}`}>
                      {announcement.priority.toUpperCase()}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(announcement.status)}`}>
                      {announcement.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>{announcement.date}</span>
                    <span>•</span>
                    <span>{announcement.category}</span>
                    <span>•</span>
                    <span>{announcement.views} views</span>
                  </div>
                  <p className="text-gray-700 mb-3">{announcement.content}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Sites:</span>
                    {announcement.sites.map((site, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {site}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <button className="p-2 text-blue-500 hover:text-blue-700" title="Preview">
                    <Eye size={16} />
                  </button>
                  <button className="p-2 text-orange-500 hover:text-orange-700" title="Edit">
                    <Edit size={16} />
                  </button>
                  <button className="p-2 text-red-500 hover:text-red-700" title="Delete">
                    <Trash2 size={16} />
                  </button>
                  {announcement.status === 'Draft' && (
                    <button className="p-2 text-green-500 hover:text-green-700" title="Publish">
                      <Send size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNewsManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">News Management</h3>
          <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            <Plus size={16} />
            <span>New Article</span>
          </button>
        </div>

        <div className="p-6 space-y-4">
          {news.map((article) => (
            <div key={article.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <img src={article.image} alt={article.title} className="w-20 h-20 object-cover rounded-lg" />
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{article.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(article.status)}`}>
                      {article.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>By {article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.views} views</span>
                  </div>
                  <p className="text-gray-700">{article.content}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-blue-500 hover:text-blue-700">
                    <Eye size={16} />
                  </button>
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
  );

  const renderForumModeration = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Forum Moderation</h3>
        </div>

        <div className="p-6 space-y-4">
          {forumPosts.map((post) => (
            <div key={post.id} className={`border rounded-lg p-6 ${post.flagged ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-900">{post.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                      {post.status}
                    </span>
                    {post.flagged && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        FLAGGED
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.replies} replies</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200">
                    Approve
                  </button>
                  <button className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200">
                    Remove
                  </button>
                  <button className="p-2 text-orange-500 hover:text-orange-700">
                    <Edit size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCelebrationManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Celebration Management</h3>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
              <Calendar size={16} />
              <span>Schedule Event</span>
            </button>
            <button className="flex items-center space-x-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
              <Plus size={16} />
              <span>Add Celebration</span>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {celebrations.map((celebration) => (
            <div key={celebration.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">
                    {celebration.type === 'birthday' ? '🎂' : '🎉'}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{celebration.title}</h4>
                    <p className="text-sm text-gray-600">{celebration.employeeName}</p>
                    <div className="flex items-center space-x-3 mt-1">
                      <span className="text-sm text-gray-500">{celebration.date}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(celebration.status)}`}>
                        {celebration.status}
                      </span>
                    </div>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'announcements': return renderAnnouncementManagement();
      case 'news': return renderNewsManagement();
      case 'forum': return renderForumModeration();
      case 'celebrations': return renderCelebrationManagement();
      default: return renderAnnouncementManagement();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Communication Management</h1>
        <p className="text-gray-600 mt-2">Manage announcements, news, forum content, and celebrations.</p>
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