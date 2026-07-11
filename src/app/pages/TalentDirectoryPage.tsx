import { useState, useEffect } from 'react';
import { Users, MapPin, GraduationCap, Code, Linkedin, Github, Globe, Mail, Loader2, Search, AlertCircle, FileText, Building2 } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { Link } from 'react-router-dom';
import { SEO, SEOConfig } from '../components/SEO';
import { StructuredData, structuredDataSchemas } from '../components/StructuredData';
import { DHNexusLogo, DHNexusWatermark } from '../components/DHNexusLogo';
import { DHCommunityShowcase } from '../components/DHCommunityShowcase';

interface StudentProfile {
  id: string;
  name: string;
  email: string;
  institute: string;
  program: string;
  graduationYear: string;
  skills: string[];
  bio: string;
  linkedin: string;
  github: string;
  portfolio: string;
  resume: string;
  lookingFor: string;
  location: string;
  interests: string[];
}

export function TalentDirectoryPage() {
  const [profiles, setProfiles] = useState<StudentProfile[]>([]);
  const [filteredProfiles, setFilteredProfiles] = useState<StudentProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [skillFilter, setSkillFilter] = useState('');

  useEffect(() => {
    fetchProfiles();
  }, []);

  useEffect(() => {
    filterProfiles();
  }, [profiles, searchQuery, skillFilter]);

  const fetchProfiles = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-abd08d6c/api/students/all`,
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

      // Combine backend profiles with sample data
      const backendProfiles = data.profiles || [];
      const allProfiles = [...backendProfiles];
      
      setProfiles(allProfiles);
      setLoading(false);
    } catch (err) {
      // Silently handle API errors - profiles will be empty until data is available
      setProfiles([]);
      setLoading(false);
    }
  };

  const filterProfiles = () => {
    let filtered = [...profiles];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(profile =>
        profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.institute.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Skill filter
    if (skillFilter) {
      filtered = filtered.filter(profile =>
        profile.skills.some(skill =>
          skill.toLowerCase().includes(skillFilter.toLowerCase())
        )
      );
    }

    setFilteredProfiles(filtered);
  };

  // Get all unique skills from all profiles
  const allSkills = Array.from(
    new Set(profiles.flatMap(p => p.skills))
  ).sort();

  return (
    <div className="relative">
      {/* Subtle watermark background */}
      <DHNexusWatermark />
      
      <SEO {...SEOConfig.talent} />
      <StructuredData data={structuredDataSchemas.talentDirectory} />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 py-20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <DHNexusLogo variant="default" className="h-14" />
          </div>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 border border-white/30">
            <Users className="w-5 h-5" />
            <span className="text-sm">DH Talent Network</span>
          </div>
          <h1 className="text-5xl lg:text-7xl text-white mb-6">
            Discover DH Talent
          </h1>
          <p className="text-xl lg:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Browse {profiles.length}+ profiles of skilled Digital Humanities professionals ready to join your team
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-1">{profiles.length}+</div>
              <div className="text-sm text-slate-600">Active Profiles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-1">{allSkills.length}+</div>
              <div className="text-sm text-slate-600">Unique Skills</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-1">15+</div>
              <div className="text-sm text-slate-600">Institutions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-600 mb-1">Global</div>
              <div className="text-sm text-slate-600">Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, institute, skills, bio..."
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Skill Filter */}
            <div>
              <select
                value={skillFilter}
                onChange={(e) => setSkillFilter(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                <option value="">All Skills</option>
                {allSkills.slice(0, 20).map((skill) => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-600">
            Showing <span className="font-semibold text-purple-600">{filteredProfiles.length}</span> of {profiles.length} profiles
          </div>
        </div>
      </section>

      {/* Talent Directory */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
              <span className="ml-3 text-slate-600">Loading profiles...</span>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <div>
                <p className="text-red-800 font-medium">Failed to load profiles</p>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          ) : filteredProfiles.length === 0 ? (
            <div className="text-center py-20">
              <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-2xl text-slate-900 mb-2">No profiles found</h3>
              <p className="text-slate-600">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfiles.map((profile) => (
                <div
                  key={profile.id}
                  className="bg-white border-2 border-slate-200 hover:border-purple-400 rounded-2xl p-6 transition-all hover:shadow-xl"
                >
                  {/* Profile Header */}
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl text-white font-bold">
                        {profile.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{profile.name}</h3>
                    {profile.institute && (
                      <div className="flex items-center justify-center gap-2 text-slate-600 text-sm mb-2">
                        <Building2 className="w-4 h-4" />
                        <span>{profile.institute}</span>
                      </div>
                    )}
                    {profile.location && (
                      <div className="flex items-center justify-center gap-2 text-slate-600 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{profile.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Bio */}
                  {profile.bio && (
                    <p className="text-slate-700 text-sm mb-4 line-clamp-3">{profile.bio}</p>
                  )}

                  {/* Program & Graduation */}
                  {(profile.program || profile.graduationYear) && (
                    <div className="flex items-center gap-2 text-slate-600 text-sm mb-4">
                      <GraduationCap className="w-4 h-4" />
                      <span>{profile.program} {profile.graduationYear && `'${profile.graduationYear.slice(-2)}`}</span>
                    </div>
                  )}

                  {/* Looking For */}
                  {profile.lookingFor && (
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                        Looking for: {profile.lookingFor}
                      </span>
                    </div>
                  )}

                  {/* Skills */}
                  {profile.skills && profile.skills.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-xs text-slate-600 mb-2">
                        <Code className="w-3 h-3" />
                        <span className="font-medium">Skills</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {profile.skills.slice(0, 4).map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                        {profile.skills.length > 4 && (
                          <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs">
                            +{profile.skills.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-2 pt-4 border-t border-slate-200">
                    {profile.linkedin && (
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded-lg transition-all text-sm"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {profile.github && (
                      <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg transition-all text-sm"
                        title="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {profile.portfolio && (
                      <a
                        href={profile.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-2 rounded-lg transition-all text-sm"
                        title="Portfolio"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    {profile.resume && (
                      <a
                        href={profile.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 px-3 py-2 rounded-lg transition-all text-sm"
                        title="Resume"
                      >
                        <FileText className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Contact Button */}
                  <a
                    href={`mailto:${profile.email}?subject=DH Opportunity from DH Nexus`}
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-3 rounded-xl font-semibold transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Contact
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* DH Student Community Directory */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
              <GraduationCap className="w-4 h-4" />
              DH Student Community
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
              Students & Scholars Directory
            </h2>
            <p className="text-slate-500 text-sm max-w-2xl">
              DH students from IIT Jodhpur, IIT (ISM) Dhanbad, CHRIST University, and more — all part of the growing DH NEXUS community. Not affiliated to any single institution.
            </p>
          </div>
          <DHCommunityShowcase />
        </div>
      </section>

      {/* CTA for Students */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Are You a DH Student?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Create your profile and get discovered by top companies!
          </p>
          <Link
            to="/join-talent"
            className="inline-flex items-center gap-2 bg-white text-purple-600 hover:bg-purple-50 px-10 py-4 rounded-xl transition-all transform hover:scale-105 shadow-xl text-lg font-semibold"
          >
            <Users className="w-5 h-5" />
            Join Talent Network
          </Link>
        </div>
      </section>
    </div>
  );
}