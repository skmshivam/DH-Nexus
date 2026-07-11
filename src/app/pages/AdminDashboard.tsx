import { useState, useEffect } from 'react';
import { Mail, Users, Briefcase, Calendar, MessageSquare, ExternalLink, Eye, Loader2, CheckCircle, Clock, AlertCircle, RefreshCw } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  userType: string;
  timestamp: string;
  status: string;
}

interface TalentProfile {
  id: string;
  name: string;
  email: string;
  institution: string;
  graduationYear: string;
  skills: string[];
  profileCreatedAt: string;
}

interface Job {
  id: string;
  companyName: string;
  jobTitle: string;
  location: string;
  jobType: string;
  postedAt: string;
}

interface Resource {
  id: string;
  title: string;
  category: string;
  submittedBy: string;
  submittedAt: string;
}

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'contacts' | 'links'>('overview');
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [talents, setTalents] = useState<TalentProfile[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<ContactMessage | null>(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      // Fetch contacts
      const contactsRes = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-abd08d6c/api/contact/all`,
        { headers: { 'Authorization': `Bearer ${publicAnonKey}` } }
      );
      const contactsData = await contactsRes.json();
      setContacts(contactsData.contacts || []);

      // Fetch talents
      const talentsRes = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-abd08d6c/api/talent/all`,
        { headers: { 'Authorization': `Bearer ${publicAnonKey}` } }
      );
      const talentsData = await talentsRes.json();
      setTalents(talentsData.talents || []);

      // Fetch jobs
      const jobsRes = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-abd08d6c/api/jobs/all`,
        { headers: { 'Authorization': `Bearer ${publicAnonKey}` } }
      );
      const jobsData = await jobsRes.json();
      setJobs(jobsData.jobs || []);

      // Fetch resources
      const resourcesRes = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-abd08d6c/api/resources/all`,
        { headers: { 'Authorization': `Bearer ${publicAnonKey}` } }
      );
      const resourcesData = await resourcesRes.json();
      setResources(resourcesData.resources || []);

      setLoading(false);
    } catch (error) {
      // Silently handle API errors - admin will see empty data until backend is available
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // All external links used in the platform
  const externalLinks = [
    { name: 'Student Registration', url: 'https://forms.gle/BRnw51wzHxXp9jVS6', category: 'Forms', page: 'Contact, Join Network' },
    { name: 'Employer Registration', url: 'https://forms.gle/71BLiGAPnbvDaFfD6', category: 'Forms', page: 'Contact, For Recruiters' },
    { name: 'Feedback/Ideas Form', url: 'https://forms.gle/cRF4MUkGMzSsLocW8', category: 'Forms', page: 'Help Us Build' },
    { name: 'Workshop Registration', url: 'https://forms.gle/KWnkAUwFTBeYgH4Z9', category: 'Forms', page: 'Contact' },
    { name: 'Operations Team Application', url: 'https://forms.gle/bhv57KaTLdVehiDg9', category: 'Forms', page: 'Help Us Build, Team' },
    { name: 'DH Nexus LinkedIn', url: 'https://www.linkedin.com/company/dh-nexus', category: 'Social', page: 'Multiple pages' },
    { name: 'DH Nexus Instagram', url: 'https://www.instagram.com/dh_nexus/', category: 'Social', page: 'Multiple pages' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mx-auto mb-4" />
          <p className="text-slate-600">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl lg:text-5xl text-white mb-2">
                Admin Dashboard
              </h1>
              <p className="text-lg text-indigo-100">
                View all submissions, messages, and manage platform links
              </p>
            </div>
            <button
              onClick={fetchAllData}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl transition-all border border-white/30"
            >
              <RefreshCw className="w-5 h-5" />
              Refresh
            </button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 py-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'overview'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'contacts'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Contact Messages ({contacts.length})
            </button>
            <button
              onClick={() => setActiveTab('links')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'links'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Links
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-3xl text-slate-900 mb-8">Platform Overview</h2>
              
              {/* Stats Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                  <MessageSquare className="w-10 h-10 text-blue-600 mb-3" />
                  <div className="text-3xl font-bold text-slate-900 mb-1">{contacts.length}</div>
                  <div className="text-slate-600">Contact Messages</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                  <Users className="w-10 h-10 text-purple-600 mb-3" />
                  <div className="text-3xl font-bold text-slate-900 mb-1">{talents.length}</div>
                  <div className="text-slate-600">Talent Profiles</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                  <Briefcase className="w-10 h-10 text-green-600 mb-3" />
                  <div className="text-3xl font-bold text-slate-900 mb-1">{jobs.length}</div>
                  <div className="text-slate-600">Job Listings</div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200">
                  <Calendar className="w-10 h-10 text-orange-600 mb-3" />
                  <div className="text-3xl font-bold text-slate-900 mb-1">{resources.length}</div>
                  <div className="text-slate-600">Resources Submitted</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Recent Contacts */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                    Recent Contact Messages
                  </h3>
                  <div className="space-y-3">
                    {contacts.slice(0, 5).map((contact) => (
                      <div key={contact.id} className="border-l-4 border-blue-600 pl-4 py-2">
                        <div className="font-semibold text-slate-900">{contact.name}</div>
                        <div className="text-sm text-slate-600">{contact.email}</div>
                        <div className="text-xs text-slate-500">{formatDate(contact.timestamp)}</div>
                      </div>
                    ))}
                    {contacts.length === 0 && (
                      <p className="text-slate-500 text-center py-8">No contact messages yet</p>
                    )}
                  </div>
                </div>

                {/* Recent Talents */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-purple-600" />
                    Recent Talent Registrations
                  </h3>
                  <div className="space-y-3">
                    {talents.slice(0, 5).map((talent) => (
                      <div key={talent.id} className="border-l-4 border-purple-600 pl-4 py-2">
                        <div className="font-semibold text-slate-900">{talent.name}</div>
                        <div className="text-sm text-slate-600">{talent.institution}</div>
                        <div className="text-xs text-slate-500">{formatDate(talent.profileCreatedAt)}</div>
                      </div>
                    ))}
                    {talents.length === 0 && (
                      <p className="text-slate-500 text-center py-8">No talent profiles yet</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contacts Tab */}
          {activeTab === 'contacts' && (
            <div>
              <h2 className="text-3xl text-slate-900 mb-8">Contact Form Submissions</h2>
              
              {contacts.length === 0 ? (
                <div className="bg-slate-50 rounded-2xl p-12 text-center border-2 border-dashed border-slate-300">
                  <MessageSquare className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-xl text-slate-600">No contact messages yet</p>
                  <p className="text-slate-500 mt-2">Messages from the contact form will appear here</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className="bg-white rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-slate-900">{contact.name}</h3>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                              {contact.userType}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                            <span className="flex items-center gap-1">
                              <Mail className="w-4 h-4" />
                              {contact.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {formatDate(contact.timestamp)}
                            </span>
                          </div>
                          {contact.subject && (
                            <div className="text-sm font-semibold text-slate-700 mb-2">
                              Subject: {contact.subject}
                            </div>
                          )}
                        </div>
                        <button
                          onClick={() => setSelectedContact(selectedContact?.id === contact.id ? null : contact)}
                          className="flex items-center gap-2 px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg transition-all"
                        >
                          <Eye className="w-4 h-4" />
                          {selectedContact?.id === contact.id ? 'Hide' : 'View'}
                        </button>
                      </div>
                      
                      {selectedContact?.id === contact.id && (
                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <div className="bg-slate-50 rounded-lg p-4">
                            <p className="text-sm font-medium text-slate-700 mb-2">Message:</p>
                            <p className="text-slate-900 whitespace-pre-wrap">{contact.message}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Links Tab */}
          {activeTab === 'links' && (
            <div>
              <h2 className="text-3xl text-slate-900 mb-8">All External Links & Forms</h2>
              
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">Link Status</h3>
                    <p className="text-blue-800 text-sm">
                      All links below are integrated into the platform. Click "Test Link" to verify each one is working correctly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Forms Section */}
                <div className="mb-8">
                  <h3 className="text-2xl text-slate-900 mb-4 font-bold">📋 Google Forms</h3>
                  {externalLinks
                    .filter(link => link.category === 'Forms')
                    .map((link, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-all mb-3"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">{link.name}</h4>
                            <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                              <span className="flex items-center gap-1">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                Active
                              </span>
                              <span>Used on: {link.page}</span>
                            </div>
                            <code className="text-xs bg-slate-100 px-3 py-1 rounded text-slate-700 block break-all">
                              {link.url}
                            </code>
                          </div>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all ml-4"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Test Link
                          </a>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-2xl text-slate-900 mb-4 font-bold">🌐 Social Media</h3>
                  {externalLinks
                    .filter(link => link.category === 'Social')
                    .map((link, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-all mb-3"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">{link.name}</h4>
                            <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                              <span className="flex items-center gap-1">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                Active
                              </span>
                              <span>Used on: {link.page}</span>
                            </div>
                            <code className="text-xs bg-slate-100 px-3 py-1 rounded text-slate-700 block break-all">
                              {link.url}
                            </code>
                          </div>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all ml-4"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Visit
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}