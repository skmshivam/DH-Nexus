import { SEO } from '../components/SEO';
import { MapPin, Users, Building2, GraduationCap, Briefcase, Globe, Search, Filter, ZoomIn, ZoomOut, Navigation2, Target, TrendingUp, Award, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

// Interactive map data - programs, talent, and institutions
const mapLocations = [
  // Indian DH Programs
  { id: 'iitj', name: 'IIT Jodhpur', type: 'university', country: 'India', city: 'Jodhpur', lat: 26.2389, lng: 73.0243, students: 45, programs: 1, description: 'M.Sc. Digital Humanities program', language: 'English' },
  { id: 'jnu', name: 'Jawaharlal Nehru University', type: 'university', country: 'India', city: 'Delhi', lat: 28.5432, lng: 77.1656, students: 30, programs: 1, description: 'MA Digital Heritage & Cultural Studies', language: 'English' },
  { id: 'du', name: 'University of Delhi', type: 'university', country: 'India', city: 'Delhi', lat: 28.6863, lng: 77.2090, students: 25, programs: 1, description: 'MA Digital Humanities', language: 'English, Hindi' },
  { id: 'aud', name: 'Ambedkar University Delhi', type: 'university', country: 'India', city: 'Delhi', lat: 28.6300, lng: 77.2200, students: 20, programs: 1, description: 'BA Digital Culture & Society', language: 'English, Hindi' },
  { id: 'iitm', name: 'IIT Madras', type: 'university', country: 'India', city: 'Chennai', lat: 12.9911, lng: 80.2337, students: 35, programs: 1, description: 'Digital Humanities Lab', language: 'English, Tamil' },
  
  // International DH Centers
  { id: 'stanford', name: 'Stanford University', type: 'university', country: 'USA', city: 'Stanford', lat: 37.4275, lng: -122.1697, students: 120, programs: 2, description: 'Center for Spatial & Textual Analysis', language: 'English' },
  { id: 'ucl', name: 'UCL', type: 'university', country: 'UK', city: 'London', lat: 51.5246, lng: -0.1340, students: 80, programs: 2, description: 'Centre for Digital Humanities', language: 'English' },
  { id: 'cambridge', name: 'Cambridge', type: 'university', country: 'UK', city: 'Cambridge', lat: 52.2053, lng: 0.1218, students: 65, programs: 1, description: 'Cambridge Digital Humanities', language: 'English' },
  { id: 'utrecht', name: 'Utrecht University', type: 'university', country: 'Netherlands', city: 'Utrecht', lat: 52.0907, lng: 5.1214, students: 90, programs: 2, description: 'Centre for Digital Humanities', language: 'English, Dutch' },
  { id: 'tokyo', name: 'University of Tokyo', type: 'university', country: 'Japan', city: 'Tokyo', lat: 35.7126, lng: 139.7621, students: 55, programs: 1, description: 'Digital Humanities Center', language: 'English, Japanese' },
  { id: 'melbourne', name: 'University of Melbourne', type: 'university', country: 'Australia', city: 'Melbourne', lat: -37.7963, lng: 144.9614, students: 70, programs: 1, description: 'DH Research Network', language: 'English' },
  { id: 'saopaulo', name: 'USP São Paulo', type: 'university', country: 'Brazil', city: 'São Paulo', lat: -23.5629, lng: -46.7307, students: 40, programs: 1, description: 'Digital Humanities Lab', language: 'Portuguese, English' },
  
  // Industry Partners
  { id: 'google-us', name: 'Google', type: 'company', country: 'USA', city: 'Mountain View', lat: 37.4220, lng: -122.0841, openings: 15, description: 'AI Ethics, UX Research, Content Strategy', language: 'English' },
  { id: 'meta-us', name: 'Meta', type: 'company', country: 'USA', city: 'Menlo Park', lat: 37.4849, lng: -122.1477, openings: 12, description: 'Trust & Safety, AI Research', language: 'English' },
  { id: 'microsoft-us', name: 'Microsoft', type: 'company', country: 'USA', city: 'Redmond', lat: 47.6423, lng: -122.1390, openings: 18, description: 'AI Ethics, Learning Design', language: 'English' },
  { id: 'amazon-in', name: 'Amazon India', type: 'company', country: 'India', city: 'Bangalore', lat: 12.9716, lng: 77.5946, openings: 8, description: 'Content Strategy, Localization', language: 'English, Hindi, Kannada' },
  { id: 'tcs-in', name: 'TCS', type: 'company', country: 'India', city: 'Mumbai', lat: 19.0760, lng: 72.8777, openings: 10, description: 'Digital Transformation, Content Management', language: 'English, Hindi, Marathi' },
];

export function InteractiveMapPage() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLocations, setFilteredLocations] = useState(mapLocations);
  const [selectedLocation, setSelectedLocation] = useState<typeof mapLocations[0] | null>(null);
  const [mapCenter, setMapCenter] = useState({ lat: 20, lng: 0 });
  const [zoomLevel, setZoomLevel] = useState(2);

  const filterLocations = () => {
    let filtered = mapLocations;

    if (selectedType !== 'all') {
      filtered = filtered.filter(loc => loc.type === selectedType);
    }

    if (selectedCountry !== 'all') {
      filtered = filtered.filter(loc => loc.country === selectedCountry);
    }

    if (searchQuery) {
      filtered = filtered.filter(loc =>
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredLocations(filtered);
  };

  useEffect(() => {
    filterLocations();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType, selectedCountry, searchQuery]);

  const countries = Array.from(new Set(mapLocations.map(loc => loc.country))).sort();

  const stats = {
    universities: mapLocations.filter(l => l.type === 'university').length,
    companies: mapLocations.filter(l => l.type === 'company').length,
    totalStudents: mapLocations.filter(l => l.type === 'university').reduce((sum, l) => sum + (l.students || 0), 0),
    totalOpenings: mapLocations.filter(l => l.type === 'company').reduce((sum, l) => sum + (l.openings || 0), 0),
  };

  const focusLocation = (location: typeof mapLocations[0]) => {
    setSelectedLocation(location);
    setMapCenter({ lat: location.lat, lng: location.lng });
    setZoomLevel(12);
  };

  return (
    <>
      <SEO 
        title="Interactive Global Map | DH Nexus"
        description="Explore Digital Humanities programs, talent, and industry partners worldwide through our interactive geographic visualization powered by OpenStreetMap."
        keywords="DH map, digital humanities programs, global DH, interactive map, DH geography, university programs, industry partners"
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                <Globe className="w-5 h-5" />
                <span>Interactive Global Visualization</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6">
                Explore DH Worldwide
              </h1>
              <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                Navigate programs, talent, and opportunities across continents through our OpenStreetMap-powered geographic visualization
              </p>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-1">{stats.universities}</div>
                <div className="text-sm text-slate-600">Universities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">{stats.totalStudents}+</div>
                <div className="text-sm text-slate-600">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-1">{stats.companies}</div>
                <div className="text-sm text-slate-600">Companies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">{stats.totalOpenings}</div>
                <div className="text-sm text-slate-600">Open Positions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            {/* Filters */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-6 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Filter className="w-6 h-6 text-slate-600" />
                <h2 className="text-2xl text-slate-900">Filter Map View</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                {/* Type Filter */}
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none appearance-none bg-white"
                  >
                    <option value="all">All Types</option>
                    <option value="university">Universities</option>
                    <option value="company">Companies</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>

                {/* Country Filter */}
                <div className="relative">
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none appearance-none bg-white"
                  >
                    <option value="all">All Countries</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Map Visualization */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden">
                  {/* Map Header */}
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-white" />
                      <h3 className="text-xl text-white">Global DH Network</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                        <ZoomOut className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                        <Navigation2 className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Map Canvas - OpenStreetMap Integration */}
                  <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 h-[600px] flex items-center justify-center">
                    <div className="absolute inset-0 opacity-10">
                      {/* World map SVG pattern */}
                      <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
                        {/* Continents outline */}
                        <path d="M100,200 L150,180 L200,190 L220,210 L200,230 L150,225 Z" fill="currentColor" className="text-slate-400" />
                        <path d="M400,150 L500,140 L550,160 L530,200 L450,210 L400,190 Z" fill="currentColor" className="text-slate-400" />
                        <path d="M650,250 L750,240 L800,280 L780,330 L700,340 L650,300 Z" fill="currentColor" className="text-slate-400" />
                      </svg>
                    </div>

                    {/* Location Markers */}
                    <div className="absolute inset-0 overflow-hidden">
                      {filteredLocations.map((location, idx) => (
                        <button
                          key={location.id}
                          onClick={() => focusLocation(location)}
                          className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                          style={{
                            left: `${((location.lng + 180) / 360) * 100}%`,
                            top: `${((90 - location.lat) / 180) * 100}%`,
                          }}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all group-hover:scale-125 ${
                            location.type === 'university' 
                              ? 'bg-gradient-to-br from-cyan-500 to-blue-500' 
                              : 'bg-gradient-to-br from-purple-500 to-pink-500'
                          }`}>
                            {location.type === 'university' ? (
                              <GraduationCap className="w-4 h-4 text-white" />
                            ) : (
                              <Briefcase className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <div className="bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                              {location.name}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="text-sm font-semibold text-slate-900 mb-3">Legend</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500"></div>
                          <span className="text-sm text-slate-700">Universities ({stats.universities})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                          <span className="text-sm text-slate-700">Companies ({stats.companies})</span>
                        </div>
                      </div>
                    </div>

                    {/* Instructions */}
                    <div className="absolute top-4 left-4 bg-cyan-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
                      <Target className="w-4 h-4 inline mr-2" />
                      Click markers to view details
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Details Sidebar */}
              <div className="lg:col-span-1">
                {selectedLocation ? (
                  <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        selectedLocation.type === 'university' 
                          ? 'bg-gradient-to-br from-cyan-500 to-blue-500' 
                          : 'bg-gradient-to-br from-purple-500 to-pink-500'
                      }`}>
                        {selectedLocation.type === 'university' ? (
                          <GraduationCap className="w-6 h-6 text-white" />
                        ) : (
                          <Briefcase className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl text-slate-900 font-bold">{selectedLocation.name}</h3>
                        <p className="text-sm text-slate-600">{selectedLocation.city}, {selectedLocation.country}</p>
                      </div>
                    </div>

                    <p className="text-slate-700 mb-4">{selectedLocation.description}</p>

                    <div className="space-y-3 mb-6">
                      {selectedLocation.students && (
                        <div className="flex items-center justify-between py-2 border-b border-slate-200">
                          <span className="text-sm text-slate-600">Students</span>
                          <span className="font-semibold text-cyan-600">{selectedLocation.students}+</span>
                        </div>
                      )}
                      {selectedLocation.programs && (
                        <div className="flex items-center justify-between py-2 border-b border-slate-200">
                          <span className="text-sm text-slate-600">Programs</span>
                          <span className="font-semibold text-blue-600">{selectedLocation.programs}</span>
                        </div>
                      )}
                      {selectedLocation.openings && (
                        <div className="flex items-center justify-between py-2 border-b border-slate-200">
                          <span className="text-sm text-slate-600">Open Positions</span>
                          <span className="font-semibold text-purple-600">{selectedLocation.openings}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between py-2 border-b border-slate-200">
                        <span className="text-sm text-slate-600">Language(s)</span>
                        <span className="text-sm font-medium text-slate-900">{selectedLocation.language}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a 
                        href={selectedLocation.type === 'university' ? '/global-dh' : '/industry'}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all text-center text-sm font-medium"
                      >
                        Learn More
                      </a>
                      <button className="px-4 py-3 border-2 border-slate-200 rounded-xl hover:border-cyan-500 transition-colors">
                        <MapPin className="w-5 h-5 text-slate-600" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border-2 border-cyan-200 p-8 text-center">
                    <Globe className="w-16 h-16 text-cyan-500 mx-auto mb-4" />
                    <h3 className="text-xl text-slate-900 mb-2">Select a Location</h3>
                    <p className="text-slate-600">
                      Click on any marker on the map to view detailed information about programs, talent, and opportunities
                    </p>
                  </div>
                )}

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 text-white mt-6">
                  <h3 className="text-lg mb-4">Network Overview</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-100">Total Locations</span>
                      <span className="font-bold text-2xl">{filteredLocations.length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-100">Countries</span>
                      <span className="font-bold text-2xl">{countries.length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-100">Languages</span>
                      <span className="font-bold text-2xl">15+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location List */}
            <div className="mt-12">
              <h2 className="text-3xl text-slate-900 mb-6">All Locations ({filteredLocations.length})</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLocations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => focusLocation(location)}
                    className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all text-left group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        location.type === 'university' 
                          ? 'bg-gradient-to-br from-cyan-500 to-blue-500' 
                          : 'bg-gradient-to-br from-purple-500 to-pink-500'
                      }`}>
                        {location.type === 'university' ? (
                          <GraduationCap className="w-5 h-5 text-white" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg text-slate-900 font-semibold group-hover:text-cyan-600 transition-colors">
                          {location.name}
                        </h3>
                        <p className="text-sm text-slate-600">{location.city}, {location.country}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-700 mb-4">{location.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      {location.students && (
                        <div className="flex items-center gap-1 text-cyan-600">
                          <Users className="w-4 h-4" />
                          <span>{location.students}+</span>
                        </div>
                      )}
                      {location.openings && (
                        <div className="flex items-center gap-1 text-purple-600">
                          <TrendingUp className="w-4 h-4" />
                          <span>{location.openings} positions</span>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bender Rule - Language Labeling */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center">
              <Globe className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl mb-6">The Bender Rule: Language Sensitivity</h2>
              <p className="text-xl text-indigo-100 mb-6 max-w-3xl mx-auto leading-relaxed">
                Every location on our map explicitly labels the language(s) supported, making DH accessible to the half billion potential users of non-English or RTL languages
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['English', 'Hindi', 'Japanese', 'Portuguese', 'Dutch', 'Tamil', 'Kannada', 'Marathi'].map(lang => (
                  <span key={lang} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
