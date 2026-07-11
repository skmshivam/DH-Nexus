import { TrendingUp, Users, Briefcase, DollarSign, Globe, Award, BarChart3, ArrowUp, Activity } from 'lucide-react';
import { platformStats, skillsTrending, topCompanies, recentActivity } from '../utils/sampleData';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { LiveActivityFeed } from '../components/LiveActivityFeed';
import { GlobalMap } from '../components/GlobalMap';
import { SalaryCalculator } from '../components/SalaryCalculator';

export function AnalyticsDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Platform Analytics</h1>
          </div>
          <p className="text-xl text-indigo-100">Real-time insights into the DH Nexus ecosystem</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 mb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-cyan-200">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-10 h-10 text-cyan-600" />
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                +<AnimatedCounter end={platformStats.weeklyGrowth} decimals={1} suffix="%" />
              </span>
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-1">
              <AnimatedCounter end={platformStats.totalUsers} />
            </div>
            <div className="text-sm text-slate-600">Total Users</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-green-200">
            <div className="flex items-center justify-between mb-4">
              <Briefcase className="w-10 h-10 text-green-600" />
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                Active
              </span>
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-1">
              <AnimatedCounter end={platformStats.activeJobs} />
            </div>
            <div className="text-sm text-slate-600">Job Openings</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-purple-200">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-10 h-10 text-purple-600" />
              <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">
                USD
              </span>
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-1">
              $<AnimatedCounter end={platformStats.averageSalary / 1000} />K
            </div>
            <div className="text-sm text-slate-600">Avg Salary</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-amber-200">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-10 h-10 text-amber-600" />
              <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-semibold">
                Success
              </span>
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-1">
              <AnimatedCounter end={platformStats.successfulHires} />
            </div>
            <div className="text-sm text-slate-600">Hires Made</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-pink-200">
            <div className="flex items-center justify-between mb-4">
              <Globe className="w-10 h-10 text-pink-600" />
              <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-semibold">
                Global
              </span>
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-1">
              <AnimatedCounter end={platformStats.countriesRepresented} />
            </div>
            <div className="text-sm text-slate-600">Countries</div>
          </div>
        </div>
      </div>

      {/* Live Activity Feed */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <LiveActivityFeed />
      </div>

      {/* Global Map */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <GlobalMap />
      </div>

      {/* Salary Calculator */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SalaryCalculator />
      </div>

      {/* Charts Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Trending Skills */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900">Trending Skills</h2>
            </div>
            <div className="space-y-4">
              {skillsTrending.map((skill, index) => (
                <div key={skill.skill}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-slate-400">#{index + 1}</span>
                      <span className="font-semibold text-slate-900">{skill.skill}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">{skill.count} students</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                        <ArrowUp className="w-3 h-3" />
                        {skill.growth}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all"
                      style={{ width: `${(skill.count / 342) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Hiring Companies */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-slate-900">Top Hiring Companies</h2>
            </div>
            <div className="space-y-4">
              {topCompanies.map((company, index) => (
                <div
                  key={company.name}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-200 hover:border-green-300 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">#{index + 1}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{company.name}</div>
                      <div className="text-sm text-slate-600">{company.jobs} open positions</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">
                      ${(company.avgSalary / 1000).toFixed(0)}K
                    </div>
                    <div className="text-xs text-slate-600">avg salary</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">Recent Activity</h2>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-200 hover:border-purple-300 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <div className="text-slate-900">
                    <span className="font-semibold">{activity.company || activity.user}</span>
                    {' '}
                    <span className="text-slate-600">{activity.action}</span>
                    {' '}
                    <span className="font-semibold">{activity.title}</span>
                  </div>
                  <div className="text-sm text-slate-500 mt-1">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border-2 border-cyan-200">
            <div className="text-5xl font-bold text-cyan-600 mb-2">
              <AnimatedCounter end={platformStats.placementRate} />%
            </div>
            <div className="text-slate-700 font-semibold mb-1">Placement Rate</div>
            <div className="text-sm text-slate-600">Students hired within 6 months of joining</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
            <div className="text-5xl font-bold text-purple-600 mb-2">
              <AnimatedCounter end={platformStats.institutionsPartnered} />+
            </div>
            <div className="text-slate-700 font-semibold mb-1">Partner Institutions</div>
            <div className="text-sm text-slate-600">Universities and research centers</div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
            <div className="text-5xl font-bold text-amber-600 mb-2">
              <AnimatedCounter end={platformStats.resourcesShared} />+
            </div>
            <div className="text-slate-700 font-semibold mb-1">Resources Shared</div>
            <div className="text-sm text-slate-600">Community-contributed learning materials</div>
          </div>
        </div>
      </div>

      {/* Growth Chart Visualization */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Platform Growth</h2>
            <p className="text-xl text-indigo-100">12.5% weekly growth in active users</p>
          </div>
          
          {/* Simple bar chart visualization */}
          <div className="flex items-end justify-center gap-4 h-64">
            {[65, 72, 78, 85, 91, 98, 100].map((height, index) => (
              <div key={index} className="flex flex-col items-center gap-2 flex-1 max-w-[100px]">
                <div className="w-full bg-white/20 backdrop-blur-sm rounded-t-xl relative" style={{ height: `${height}%` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold bg-white text-indigo-600 px-3 py-1 rounded-full">
                    {height}%
                  </div>
                </div>
                <div className="text-sm text-indigo-200">
                  Week {index + 1}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">+{platformStats.weeklyGrowth}%</div>
              <div className="text-indigo-200">Weekly Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">{platformStats.companiesHiring}</div>
              <div className="text-indigo-200">Companies Hiring</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">{platformStats.totalUsers.toLocaleString()}</div>
              <div className="text-indigo-200">Total Community</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}