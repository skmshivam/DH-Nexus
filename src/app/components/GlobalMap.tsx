import { Globe, MapPin, Users, TrendingUp } from 'lucide-react';

const locations = [
  { country: 'India', users: 1247, jobs: 45, top: '45%', left: '72%', color: 'from-orange-500 to-rose-600' },
  { country: 'USA', users: 623, jobs: 38, top: '38%', left: '18%', color: 'from-blue-500 to-indigo-600' },
  { country: 'UK', users: 312, jobs: 18, top: '32%', left: '48%', color: 'from-purple-500 to-pink-600' },
  { country: 'Germany', users: 198, jobs: 12, top: '34%', left: '52%', color: 'from-green-500 to-emerald-600' },
  { country: 'Australia', users: 156, jobs: 8, top: '72%', left: '88%', color: 'from-yellow-500 to-amber-600' },
  { country: 'Canada', users: 134, jobs: 6, top: '28%', left: '22%', color: 'from-red-500 to-pink-600' },
  { country: 'Singapore', users: 89, jobs: 4, top: '52%', left: '78%', color: 'from-teal-500 to-cyan-600' },
  { country: 'Netherlands', users: 67, jobs: 3, top: '32%', left: '50%', color: 'from-indigo-500 to-purple-600' }
];

export function GlobalMap() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 rounded-3xl p-8 border border-indigo-500/30 overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Globe className="w-7 h-7 text-white animate-pulse" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Global Reach</h3>
              <p className="text-indigo-300">DH community spanning multiple countries</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-white">Global</div>
            <div className="text-indigo-300 text-sm">Community</div>
          </div>
        </div>

        {/* World Map Visualization */}
        <div className="relative h-96 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-2xl border border-indigo-500/30 mb-8 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)] animate-pulse" />
          
          {/* Location Markers */}
          {locations.map((location, index) => (
            <div
              key={location.country}
              className="absolute group cursor-pointer"
              style={{ top: location.top, left: location.left }}
            >
              {/* Pulse Animation */}
              <div className="absolute inset-0 w-4 h-4 bg-cyan-500 rounded-full animate-ping opacity-75" />
              
              {/* Marker */}
              <div className={`relative w-4 h-4 bg-gradient-to-br ${location.color} rounded-full border-2 border-white shadow-lg transform transition-all duration-300 group-hover:scale-150 z-10`}>
                <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse" />
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                <div className="bg-white rounded-xl p-4 shadow-2xl border-2 border-indigo-200 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <span className="font-bold text-slate-900">{location.country}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 text-sm flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        Region:
                      </span>
                      <span className="font-bold text-indigo-600">Active</span>
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                  <div className="w-3 h-3 bg-white border-r-2 border-b-2 border-indigo-200 transform rotate-45" />
                </div>
              </div>
            </div>
          ))}

          {/* Connection Lines (decorative) */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <line x1="18%" y1="38%" x2="72%" y2="45%" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
            </line>
            <line x1="48%" y1="32%" x2="72%" y2="45%" stroke="url(#gradient2)" strokeWidth="1" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
            </line>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Top Locations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {locations.slice(0, 4).map((location, index) => (
            <div
              key={location.country}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-indigo-400 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 bg-gradient-to-br ${location.color} rounded-lg flex items-center justify-center text-lg`}>
                  #{index + 1}
                </div>
                <span className="text-white font-semibold">{location.country}</span>
              </div>
              <div className="text-sm text-indigo-300 mt-1">DH Community</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
