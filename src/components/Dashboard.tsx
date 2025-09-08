import React from 'react';
import { Calendar, Users, AlertTriangle, Award, Clock, MessageCircle, MapPin, TrendingUp } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Projects', value: '12', color: 'bg-blue-500' },
    { icon: MapPin, label: 'Active Sites', value: '8', color: 'bg-green-500' },
    { icon: Clock, label: 'Hours This Month', value: '168', color: 'bg-orange-500' },
    { icon: Award, label: 'Certifications', value: '6', color: 'bg-purple-500' },
  ];

  const recentAnnouncements = [
    { id: 1, title: 'Safety Training Session - Downtown Site', date: '2025-01-08', type: 'Safety' },
    { id: 2, title: 'New Equipment Delivery Schedule', date: '2025-01-07', type: 'Operations' },
    { id: 3, title: 'Monthly Team Meeting - All Sites', date: '2025-01-06', type: 'General' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'First Aid Certification', date: '2025-01-15', time: '09:00 AM' },
    { id: 2, title: 'Safety Inspection - Site A', date: '2025-01-18', time: '02:00 PM' },
    { id: 3, title: 'Equipment Maintenance Training', date: '2025-01-22', time: '10:00 AM' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back, John!</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your work today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Announcements */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-orange-500" />
              <h2 className="text-lg font-semibold text-gray-900">Recent Announcements</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {recentAnnouncements.map((announcement) => (
              <div key={announcement.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0">
                  <span className={`inline-block w-2 h-2 rounded-full ${
                    announcement.type === 'Safety' ? 'bg-red-500' :
                    announcement.type === 'Operations' ? 'bg-blue-500' : 'bg-green-500'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">{announcement.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{announcement.date} • {announcement.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">{event.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{event.date} at {event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety Alert */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-6">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-600" />
          <div>
            <h3 className="text-lg font-semibold text-red-900">Safety Reminder</h3>
            <p className="text-red-700 mt-1">
              Remember to complete your weekly safety check-in and report any hazards immediately.
              Your safety is our priority!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};