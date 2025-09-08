import React from 'react';
import { Users, FileText, MessageSquare, Calendar, TrendingUp, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Total Employees', value: '248', change: '+12', color: 'bg-blue-500' },
    { icon: FileText, label: 'Active Projects', value: '15', change: '+3', color: 'bg-green-500' },
    { icon: MessageSquare, label: 'Pending Approvals', value: '7', change: '-2', color: 'bg-orange-500' },
    { icon: Calendar, label: 'Upcoming Training', value: '23', change: '+8', color: 'bg-purple-500' },
  ];

  const recentActivities = [
    { id: 1, type: 'employee', action: 'New employee added', details: 'Sarah Wilson - Site Engineer', time: '2 hours ago' },
    { id: 2, type: 'training', action: 'Training completed', details: 'OSHA 30-Hour Safety - 15 employees', time: '4 hours ago' },
    { id: 3, type: 'announcement', action: 'Announcement posted', details: 'Safety Training Schedule - All Sites', time: '6 hours ago' },
    { id: 4, type: 'certificate', action: 'Certificate renewal', details: 'First Aid Certification - 8 employees', time: '1 day ago' },
  ];

  const pendingTasks = [
    { id: 1, task: 'Review certificate renewals', priority: 'high', dueDate: '2025-01-10' },
    { id: 2, task: 'Approve training requests', priority: 'medium', dueDate: '2025-01-12' },
    { id: 3, task: 'Update employee handbook', priority: 'low', dueDate: '2025-01-15' },
    { id: 4, task: 'Process new hire documentation', priority: 'high', dueDate: '2025-01-09' },
  ];

  const upcomingTrainings = [
    { id: 1, title: 'Safety Refresher Course', date: '2025-01-15', attendees: 25 },
    { id: 2, title: 'Equipment Operation Training', date: '2025-01-20', attendees: 12 },
    { id: 3, title: 'First Aid & CPR Certification', date: '2025-01-25', attendees: 18 },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'employee': return <Users className="h-4 w-4 text-blue-600" />;
      case 'training': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'announcement': return <MessageSquare className="h-4 w-4 text-orange-600" />;
      case 'certificate': return <FileText className="h-4 w-4 text-purple-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Monitor and manage HR operations across all sites.</p>
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
                  <div className="flex items-center mt-2">
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <span className={`ml-2 text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                  </div>
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
        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">{activity.action}</h3>
                  <p className="text-sm text-gray-600 mt-1">{activity.details}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <h2 className="text-lg font-semibold text-gray-900">Pending Tasks</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {pendingTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">{task.task}</h3>
                  <p className="text-xs text-gray-500 mt-1">Due: {task.dueDate}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Trainings */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-purple-500" />
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Training Sessions</h2>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingTrainings.map((training) => (
              <div key={training.id} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{training.title}</h3>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Date: {training.date}</p>
                  <p className="text-sm text-gray-600">Attendees: {training.attendees}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};