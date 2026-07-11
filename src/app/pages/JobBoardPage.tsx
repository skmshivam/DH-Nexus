import { ArrowRight, Briefcase, Building2, CheckCircle2, Clock, DollarSign, ExternalLink, Globe, Loader2, MapPin, Rocket, Search, TrendingUp } from 'lucide-react';
import { HiringMarketplace } from '../components/HiringMarketplace';
import { CommunityInput } from '../components/CommunityInput';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { StructuredData, structuredDataSchemas } from '../components/StructuredData';
import dhNexusLogo from 'figma:asset/951d00fc723ae8912305f3fb955112353119ba55.png';

interface Job {
  id: string;
  companyName: string;
  jobTitle: string;
  description: string;
  requirements: string[];
  location: string;
  jobType: string;
  salary: string;
  applyUrl: string;
  contactEmail: string;
  postedAt: string;
  applicationsCount: number;
}

export function JobBoardPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [jobs, searchQuery, filterType, filterLocation]);

  const fetchJobs = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-abd08d6c/api/jobs/all`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`
          }
        }
      );

      if (!response.ok) {
        throw new Error('API not available');
      }

      const data = await response.json();
      const backendJobs = data.jobs || [];
      
      setJobs(backendJobs);
      setLoading(false);
    } catch (err) {
      // Silently handle API errors - jobs will be empty until data is available
      setJobs([]);
      setLoading(false);
    }
  };

  const filterJobs = () => {
    let filtered = [...jobs];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(job =>
        job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Job type filter
    if (filterType !== 'all') {
      filtered = filtered.filter(job => job.jobType === filterType);
    }

    // Location filter
    if (filterLocation !== 'all') {
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(filterLocation.toLowerCase())
      );
    }

    setFilteredJobs(filtered);
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'Posted today';
    if (diffDays === 2) return 'Posted yesterday';
    if (diffDays <= 7) return `Posted ${diffDays} days ago`;
    if (diffDays <= 30) return `Posted ${Math.floor(diffDays / 7)} weeks ago`;
    return `Posted ${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <div>
      <SEO {...SEOConfig.jobs} />
      <StructuredData data={structuredDataSchemas.jobBoard} />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img 
              src={dhNexusLogo} 
              alt="DH Nexus Logo" 
              className="h-14 w-auto object-contain"
            />
          </div>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 border border-white/30">
            <Briefcase className="w-5 h-5" />
            <span className="text-sm">DH Job Opportunities</span>
          </div>
          <h1 className="text-5xl lg:text-7xl text-white mb-6">
            Find Your Dream DH Job
          </h1>
          <p className="text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Browse {jobs.length}+ opportunities from companies hiring Digital Humanities professionals worldwide
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">{jobs.length}</div>
              <div className="text-sm text-slate-600">Active Jobs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-1">50+</div>
              <div className="text-sm text-slate-600">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-1">$120K+</div>
              <div className="text-sm text-slate-600">Avg Salary</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-1">Global</div>
              <div className="text-sm text-slate-600">Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jobs, companies, keywords..."
                  className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Job Type Filter */}
            <div>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              >
                <option value="all">All Job Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              >
                <option value="all">All Locations</option>
                <option value="remote">Remote</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="europe">Europe</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-600">
            Showing <span className="font-semibold text-green-600">{filteredJobs.length}</span> of {jobs.length} jobs
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-green-600 animate-spin" />
              <span className="ml-3 text-slate-600">Loading jobs...</span>
            </div>
          ) : jobs.length === 0 ? (
            // Coming Soon - No Jobs Yet
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border-2 border-green-200 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
                  We Are Bringing Verified DH Job Opportunities
                </h2>
                
                <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
                  We're currently partnering with companies, research institutions, and cultural organizations to list <span className="text-green-700 font-semibold">authentic Digital Humanities job opportunities</span>.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-white rounded-2xl p-6 border border-green-200">
                    <Building2 className="w-8 h-8 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg text-slate-900 mb-2">Verified Companies</h3>
                    <p className="text-sm text-slate-600">
                      Only listing jobs from legitimate organizations actively hiring DH talent
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border border-emerald-200">
                    <Globe className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-lg text-slate-900 mb-2">Global Reach</h3>
                    <p className="text-sm text-slate-600">
                      Connecting DH professionals with opportunities worldwide
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border border-teal-200">
                    <CheckCircle2 className="w-8 h-8 text-teal-600 mx-auto mb-4" />
                    <h3 className="text-lg text-slate-900 mb-2">Quality First</h3>
                    <p className="text-sm text-slate-600">
                      Curating roles that value DH skills and offer meaningful work
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border-2 border-green-300 max-w-2xl mx-auto mb-8">
                  <h3 className="text-2xl text-slate-900 mb-4">Are You Hiring DH Talent?</h3>
                  <p className="text-slate-700 mb-6">
                    Post your verified DH job opportunities and connect with qualified professionals skilled in tech + humanities.
                  </p>
                  <Link
                    to="/for-recruiters"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl hover:from-green-500 hover:to-emerald-500 transition-all text-lg font-semibold"
                  >
                    Post a Job
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <p className="text-sm text-slate-500">
                  We're committed to listing only verified opportunities. Check back soon or join our talent network to get notified!
                </p>
              </div>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-2xl text-slate-900 mb-2">No jobs found</h3>
              <p className="text-slate-600">Try adjusting your filters or search query</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white border-2 border-slate-200 hover:border-green-400 rounded-2xl p-6 transition-all hover:shadow-xl"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">{job.jobTitle}</h3>
                          <p className="text-slate-600">{job.companyName}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                        {job.jobType}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-700 mb-4 line-clamp-2">{job.description}</p>

                  {/* Job Details */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    {job.salary && (
                      <div className="flex items-center gap-2 text-slate-600">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-sm">{job.salary}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{getTimeAgo(job.postedAt)}</span>
                    </div>
                    {job.applicationsCount > 0 && (
                      <div className="flex items-center gap-2 text-slate-600">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm">{job.applicationsCount} applicants</span>
                      </div>
                    )}
                  </div>

                  {/* Requirements */}
                  {job.requirements && job.requirements.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.slice(0, 5).map((req, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm"
                          >
                            {req}
                          </span>
                        ))}
                        {job.requirements.length > 5 && (
                          <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm">
                            +{job.requirements.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Apply Button */}
                  <div className="flex gap-3">
                    {job.applyUrl ? (
                      <a
                        href={job.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                      >
                        Apply Now
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <a
                        href={`mailto:${job.contactEmail}?subject=Application for ${job.jobTitle}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                      >
                        Apply via Email
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <button className="px-6 py-3 border-2 border-slate-300 hover:border-green-500 text-slate-700 hover:text-green-700 rounded-xl font-semibold transition-all">
                      Save Job
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Don't See the Right Job?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join our talent network and let companies find you!
          </p>
          <Link
            to="/join-talent"
            className="inline-flex items-center gap-2 bg-white text-green-600 hover:bg-green-50 px-10 py-4 rounded-xl transition-all transform hover:scale-105 shadow-xl text-lg font-semibold"
          >
            Join Talent Network
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}