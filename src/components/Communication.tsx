import React, { useState } from 'react';
import { MessageSquare, Megaphone, Users, Calendar, Heart, Send, Filter } from 'lucide-react';

export const Communication: React.FC = () => {
  const [activeTab, setActiveTab] = useState('announcements');
  const [newMessage, setNewMessage] = useState('');

  const tabs = [
    { id: 'announcements', label: 'Announcements', icon: Megaphone },
    { id: 'news', label: 'News & Updates', icon: MessageSquare },
    { id: 'forum', label: 'Discussion Forum', icon: Users },
    { id: 'celebrations', label: 'Celebrations', icon: Heart },
  ];

  const announcements = [
    {
      id: 1,
      title: 'Mandatory Safety Training - All Sites',
      content: 'All employees must attend the safety training session scheduled for this Friday. Please confirm your attendance with your site supervisor.',
      author: 'Safety Department',
      date: '2025-01-08',
      priority: 'high',
      sites: ['All Sites'],
      category: 'Safety'
    },
    {
      id: 2,
      title: 'New Equipment Delivery Schedule',
      content: 'Heavy machinery will be delivered to Site A on January 12th. Please ensure the delivery area is clear and accessible.',
      author: 'Operations Manager',
      date: '2025-01-07',
      priority: 'medium',
      sites: ['Site A', 'Site B'],
      category: 'Operations'
    },
    {
      id: 3,
      title: 'Weekly Progress Meeting',
      content: 'Join us for the weekly progress meeting this Monday at 9:00 AM in the main conference room.',
      author: 'Project Manager',
      date: '2025-01-06',
      priority: 'low',
      sites: ['Downtown Office'],
      category: 'General'
    },
  ];

  const news = [
    {
      id: 1,
      title: 'XRAY Construction Wins Major Infrastructure Contract',
      content: 'We are proud to announce that XRAY has been awarded the contract for the new city bridge project, valued at $50 million.',
      author: 'Communications Team',
      date: '2025-01-05',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Sustainability Initiative Launch',
      content: 'XRAY is launching a comprehensive sustainability program to reduce our environmental impact across all projects.',
      author: 'Environmental Team',
      date: '2025-01-03',
      image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?w=400&h=200&fit=crop'
    },
  ];

  const forumPosts = [
    {
      id: 1,
      title: 'Best practices for concrete mixing in cold weather',
      content: 'With winter approaching, I wanted to share some tips for maintaining concrete quality in low temperatures...',
      author: 'Mike Johnson',
      role: 'Senior Engineer',
      date: '2025-01-08',
      replies: 5,
      likes: 12
    },
    {
      id: 2,
      title: 'New safety equipment recommendations',
      content: 'Has anyone tried the new hard hats from SafeTech? Looking for feedback before we make a bulk purchase...',
      author: 'Sarah Williams',
      role: 'Safety Coordinator',
      date: '2025-01-07',
      replies: 8,
      likes: 6
    },
  ];

  const celebrations = [
    {
      id: 1,
      type: 'birthday',
      title: 'Happy Birthday Maria!',
      description: 'Wishing Maria Rodriguez from Site C a wonderful birthday today!',
      date: '2025-01-08',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150&h=150&fit=crop'
    },
    {
      id: 2,
      type: 'anniversary',
      title: '5 Years with XRAY Construction',
      description: 'Congratulations to David Chen on completing 5 successful years with our team!',
      date: '2025-01-06',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=150&h=150&fit=crop'
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const renderAnnouncements = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Recent Announcements</h3>
        <button className="flex items-center space-x-2 text-orange-600 hover:text-orange-700">
          <Filter size={16} />
          <span>Filter</span>
        </button>
      </div>
      
      {announcements.map((announcement) => (
        <div key={announcement.id} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{announcement.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(announcement.priority)}`}>
                  {announcement.priority.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                <span>By {announcement.author}</span>
                <span>•</span>
                <span>{announcement.date}</span>
                <span>•</span>
                <span>{announcement.category}</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">{announcement.content}</p>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Sites:</span>
            {announcement.sites.map((site, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                {site}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderNews = () => (
    <div className="space-y-4">
      {news.map((article) => (
        <div key={article.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
              <span>By {article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
            <p className="text-gray-700">{article.content}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderForum = () => (
    <div className="space-y-6">
      {/* New Post Form */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Start a Discussion</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Discussion title..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
          />
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 h-24 resize-none"
          />
          <div className="flex justify-end">
            <button className="flex items-center space-x-2 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              <Send size={16} />
              <span>Post</span>
            </button>
          </div>
        </div>
      </div>

      {/* Forum Posts */}
      <div className="space-y-4">
        {forumPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="font-semibold text-gray-900">{post.author}</h3>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{post.role}</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{post.title}</h4>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <button className="hover:text-orange-600">❤️ {post.likes}</button>
                  <button className="hover:text-orange-600">💬 {post.replies} replies</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCelebrations = () => (
    <div className="space-y-4">
      {celebrations.map((celebration) => (
        <div key={celebration.id} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-4">
            <img 
              src={celebration.image} 
              alt={celebration.title}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="text-lg font-semibold text-gray-900">{celebration.title}</h3>
                <span className="text-2xl">
                  {celebration.type === 'birthday' ? '🎂' : '🎉'}
                </span>
              </div>
              <p className="text-gray-700 mb-2">{celebration.description}</p>
              <p className="text-sm text-gray-500">{celebration.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'announcements': return renderAnnouncements();
      case 'news': return renderNews();
      case 'forum': return renderForum();
      case 'celebrations': return renderCelebrations();
      default: return renderAnnouncements();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Communication Hub</h1>
        <p className="text-gray-600 mt-2">Stay connected with announcements, news, and team discussions.</p>
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