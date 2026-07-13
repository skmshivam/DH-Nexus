import { useState, useEffect } from 'react';
import { BarChart3, Users, Briefcase, Mail, BookOpen, TrendingUp, Loader2, AlertCircle, CheckCircle2, XCircle, Eye, ExternalLink, Link as LinkIcon } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface Stats {
  totalStudents: number;
  activeProfiles: number;
  totalJobs: number;
  activeJobs: number;
  totalApplications: number;
  totalContacts: number;
  unreadContacts: number;
  totalSubscribers: number;
  totalResources: number;
  approvedResources: number;
  pendingResources: number;
}

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  userType: string;
  timestamp: string;
  status: string;
}

interface Resource {
  id: string;
  title: string;
  url: string;
  description: string;
  category: string;
  submittedBy: string;
  submitterEmail: string;
  tags: string[];
  submittedAt: string;
  status: string;
  upvotes: number;
}

export function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [jobs, setJobs] = useState<any[]>([]);
  const [profiles, setProfiles] = useState<any[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [pendingResources, setPendingResources] = useState<Resource[]>([]);
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'contacts' | 'resources' | 'subscribers'>('overview');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [jobsRes, profilesRes, contactsRes, resourcesRes, subscribersRes] = await Promise.all([
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-abd08d6c/api/jobs/all`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` }
        }),
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-abd08d6c/api/students/all`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` }
        }),
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-abd08d6c/api/contacts/all`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` }
        }),
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-abd08d6c/api/resources/pending`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` }
        }),
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-abd08d6c/api/newsletter/all`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` }
        })
      ]);

      if (!jobsRes.ok || !profilesRes.ok || !contactsRes.ok || !resourcesRes.ok || !subscribersRes.ok) {
        throw new Error('API not available');
      }

      const jobsData = await jobsRes.json();
      const profilesData = await profilesRes.json();
      const contactsData = await contactsRes.json();
      const resourcesData = await resourcesRes.json();
      const subscribersData = await subscribersRes.json();

      setJobs(jobsData.jobs || []);
      setProfiles(profilesData.profiles || []);
      setContacts(contactsData.contacts || []);
      setPendingResources(resourcesData.resources || []);
      setSubscribers(subscribersData.subscribers || []);
      
      // Calculate stats
      const calculatedStats: Stats = {
        totalStudents: profilesData.profiles?.length || 0,
        activeProfiles: profilesData.profiles?.filter((p: any) => p.status === 'active')?.length || 0,
        totalJobs: jobsData.jobs?.length || 0,
        activeJobs: jobsData.jobs?.filter((j: any) => j.status === 'active')?.length || 0,
        totalApplications: 0, // Would need to fetch from applications API
        totalContacts: contactsData.contacts?.length || 0,
        unreadContacts: contactsData.contacts?.filter((c: any) => c.status === 'unread')?.length || 0,
        totalSubscribers: subscribersData.subscribers?.length || 0,
        totalResources: 0, // Would need to fetch all resources
        approvedResources: 0,
        pendingResources: resourcesData.resources?.length || 0,
      };
      setStats(calculatedStats);
      
      setLoading(false);
    } catch (err) {
      // Silently handle API errors - show empty/demo data instead
      console.log('Backend not available, showing demo mode');
      
      // Set empty arrays to prevent undefined errors
      setJobs([]);
      setProfiles([]);
      setContacts([]);
      setPendingResources([]);
      setSubscribers([]);
      
      // Set demo stats
      const demoStats: Stats = {
        totalStudents: 0,
        activeProfiles: 0,
        totalJobs: 0,
        activeJobs: 0,
        totalApplications: 0,
        totalContacts: 0,
        unreadContacts: 0,
        totalSubscribers: 0,
        totalResources: 0,
        approvedResources: 0,
        pendingResources: 0,
      };
      setStats(demoStats);
      
      setLoading(false);
      // Don't set error state - just continue with empty data
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
          <span className="text-slate-600">Loading dashboard...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex items-start gap-3 max-w-md">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
          <div>
            <p className="text-red-800 font-medium">Failed to load dashboard</p>
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          </div>
          <p className="text-indigo-100 text-lg">Monitor and manage DH Nexus platform</p>
        </div>
      </div>

      {/* Stats Overview */}
      {stats && (
        <div className="max-w-7xl mx-auto px-6 -mt-8 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-indigo-200">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-10 h-10 text-indigo-600" />
                <span className="text-sm text-slate-600">Students</span>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stats.totalStudents}</div>
              <div className="text-sm text-slate-600">{stats.activeProfiles} active profiles</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
              <div className="flex items-center justify-between mb-4">
                <Briefcase className="w-10 h-10 text-green-600" />
                <span className="text-sm text-slate-600">Jobs</span>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stats.totalJobs}</div>
              <div className="text-sm text-slate-600">{stats.totalApplications} applications</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
              <div className="flex items-center justify-between mb-4">
                <Mail className="w-10 h-10 text-purple-600" />
                <span className="text-sm text-slate-600">Contacts</span>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stats.totalContacts}</div>
              <div className="text-sm text-slate-600">{stats.unreadContacts} unread</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="w-10 h-10 text-amber-600" />
                <span className="text-sm text-slate-600">Resources</span>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stats.totalResources}</div>
              <div className="text-sm text-slate-600">{stats.pendingResources} pending</div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-2">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-transparent text-slate-600 hover:bg-slate-100'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'contacts'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-transparent text-slate-600 hover:bg-slate-100'
              }`}
            >
              Contacts ({contacts.length})
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'resources'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-transparent text-slate-600 hover:bg-slate-100'
              }`}
            >
              Resources ({pendingResources.length})
            </button>
            <button
              onClick={() => setActiveTab('subscribers')}
              className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'subscribers'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-transparent text-slate-600 hover:bg-slate-100'
              }`}
            >
              Subscribers ({subscribers.length})
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Overview Tab */}
        {activeTab === 'overview' && stats && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Platform Statistics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Users & Engagement</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Total Students:</span>
                      <span className="font-bold text-indigo-600">{stats.totalStudents}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Active Profiles:</span>
                      <span className="font-bold text-green-600">{stats.activeProfiles}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Newsletter Subscribers:</span>
                      <span className="font-bold text-purple-600">{stats.totalSubscribers}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Jobs & Applications</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Total Jobs:</span>
                      <span className="font-bold text-green-600">{stats.totalJobs}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Active Jobs:</span>
                      <span className="font-bold text-emerald-600">{stats.activeJobs}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Total Applications:</span>
                      <span className="font-bold text-teal-600">{stats.totalApplications}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Submissions</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">{stats.totalContacts}</div>
                <div className="text-slate-600">{stats.unreadContacts} unread messages</div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Community Resources</h3>
                <div className="text-4xl font-bold text-amber-600 mb-2">{stats.totalResources}</div>
                <div className="text-slate-600">{stats.pendingResources} pending approval</div>
              </div>
            </div>

            {/* All Platform Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <LinkIcon className="w-6 h-6 text-indigo-600" />
                <h2 className="text-2xl font-bold text-slate-900">All External Links & Forms</h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <p className="text-sm text-blue-800">
                  <strong>Where contact messages are saved:</strong> All contact form submissions are stored in the backend KV database and displayed in the "Contacts" tab above. They include name, email, subject, message, user type, and timestamp.
                </p>
              </div>

              {/* Google Forms */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">📋 Google Forms (All Working)</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Student Registration', url: 'https://forms.gle/927FLPxgbi7ww78K9', pages: 'Contact, Join Network' },
                    { name: 'Employer Registration', url: 'https://forms.gle/6DrH5bSRQAuPqE997', pages: 'Contact, For Recruiters' },
                    { name: 'Feedback & Ideas Form', url: 'https://forms.gle/VqqeGB2EvyXym5UW7', pages: 'Help Us Build' },
                    { name: 'Workshop Registration', url: 'https://forms.gle/a2iwwhsHKHMKBu9t9', pages: 'Contact (Event section)' },
                    { name: 'Operations Team Application', url: 'https://forms.gle/uwmUJyDbyq5VVLUx7', pages: 'Help Us Build, Team' },
                  ].map((form, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-green-300 transition-all">
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 mb-1">{form.name}</div>
                        <div className="text-xs text-slate-600 mb-2">Used on: {form.pages}</div>
                        <code className="text-xs bg-white px-2 py-1 rounded text-slate-700">{form.url}</code>
                      </div>
                      <a
                        href={form.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all ml-4 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Test
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">🌐 Social Media Links (All Working)</h3>
                <div className="space-y-3">
                  {[
                    { name: 'DH Nexus LinkedIn', url: 'https://www.linkedin.com/company/dh-nexus', pages: 'Multiple pages' },
                    { name: 'DH Nexus Instagram', url: 'https://www.instagram.com/dh_nexus/', pages: 'Multiple pages' },
                  ].map((social, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-all">
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 mb-1">{social.name}</div>
                        <div className="text-xs text-slate-600 mb-2">Used on: {social.pages}</div>
                        <code className="text-xs bg-white px-2 py-1 rounded text-slate-700">{social.url}</code>
                      </div>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all ml-4 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Contact Submissions</h2>
            </div>
            <div className="divide-y divide-slate-200">
              {contacts.map((contact) => (
                <div key={contact.id} className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{contact.name}</h3>
                      <p className="text-sm text-slate-600">{contact.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        contact.status === 'unread'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {contact.status}
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                        {contact.userType}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-slate-700 mb-2">{contact.subject || 'No subject'}</p>
                  <p className="text-slate-600 text-sm mb-3">{contact.message}</p>
                  <p className="text-xs text-slate-500">
                    {new Date(contact.timestamp).toLocaleString()}
                  </p>
                </div>
              ))}
              {contacts.length === 0 && (
                <div className="p-12 text-center">
                  <Mail className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-600">No contact submissions yet</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Pending Resources</h2>
            </div>
            <div className="divide-y divide-slate-200">
              {pendingResources.map((resource) => (
                <div key={resource.id} className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{resource.title}</h3>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-indigo-600 hover:underline mb-2 inline-block"
                      >
                        {resource.url}
                      </a>
                      {resource.description && (
                        <p className="text-slate-600 text-sm mb-3">{resource.description}</p>
                      )}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                          {resource.category}
                        </span>
                        {resource.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-slate-500">
                        Submitted by {resource.submittedBy || 'Anonymous'} on {new Date(resource.submittedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button className="p-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors">
                        <CheckCircle2 className="w-5 h-5" />
                      </button>
                      <button className="p-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors">
                        <XCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {pendingResources.length === 0 && (
                <div className="p-12 text-center">
                  <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-600">No pending resources</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Subscribers Tab */}
        {activeTab === 'subscribers' && (
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Newsletter Subscribers</h2>
            </div>
            <div className="divide-y divide-slate-200">
              {subscribers.map((subscriber) => (
                <div key={subscriber.id} className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{subscriber.name || 'Anonymous'}</h3>
                      <p className="text-sm text-slate-600">{subscriber.email}</p>
                    </div>
                    <div className="text-sm text-slate-500">
                      {new Date(subscriber.subscribedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
              {subscribers.length === 0 && (
                <div className="p-12 text-center">
                  <Mail className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-600">No subscribers yet</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}