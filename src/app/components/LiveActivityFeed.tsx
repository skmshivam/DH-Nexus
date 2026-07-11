import { useEffect, useState } from 'react';
import { Activity, Briefcase, User, BookOpen, Award, TrendingUp } from 'lucide-react';

interface ActivityItem {
  id: string;
  type: 'job' | 'profile' | 'application' | 'resource' | 'hire';
  icon: string;
  title: string;
  subtitle: string;
  time: string;
  color: string;
}

const activities: ActivityItem[] = [
  {
    id: '1',
    type: 'hire',
    icon: '🎉',
    title: 'Priya Sharma hired!',
    subtitle: 'Joined Google Arts & Culture as DH Researcher',
    time: 'Just now',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: '2',
    type: 'job',
    icon: '💼',
    title: 'New Job Posted',
    subtitle: 'Microsoft Research - AI for Historical Archives',
    time: '2 min ago',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: '3',
    type: 'profile',
    icon: '👤',
    title: 'Rahul Desai joined',
    subtitle: 'JNU Delhi - MA Digital Humanities',
    time: '5 min ago',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: '4',
    type: 'application',
    icon: '📝',
    title: 'Ananya applied',
    subtitle: 'Digital Curator at British Library',
    time: '12 min ago',
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: '5',
    type: 'resource',
    icon: '📚',
    title: 'New Resource Shared',
    subtitle: 'Introduction to Text Mining with Python',
    time: '18 min ago',
    color: 'from-teal-500 to-cyan-600'
  },
  {
    id: '6',
    type: 'hire',
    icon: '🌟',
    title: 'Vikram Singh hired!',
    subtitle: 'Joined ConsenSys as Blockchain Developer',
    time: '25 min ago',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: '7',
    type: 'job',
    icon: '💼',
    title: 'New Job Posted',
    subtitle: 'Netflix - Content Analyst, Cultural Trends',
    time: '32 min ago',
    color: 'from-red-500 to-rose-600'
  },
  {
    id: '8',
    type: 'profile',
    icon: '👤',
    title: 'Meera Krishnan joined',
    subtitle: 'Ashoka University - BA Liberal Arts',
    time: '45 min ago',
    color: 'from-indigo-500 to-purple-600'
  }
];

export function LiveActivityFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % activities.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentActivity = activities[currentIndex];

  return (
    <div className="bg-gradient-to-r from-slate-900 to-indigo-900 border border-indigo-500/30 rounded-2xl p-6 overflow-hidden relative">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-pulse" />
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <Activity className="w-6 h-6 text-white animate-pulse" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Live Activity</h3>
            <p className="text-indigo-300 text-sm">Happening right now on DH Nexus</p>
          </div>
        </div>

        {/* Activity Item */}
        <div
          className={`transition-all duration-300 ${
            isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${currentActivity.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                {currentActivity.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold mb-1">{currentActivity.title}</h4>
                <p className="text-indigo-200 text-sm mb-2">{currentActivity.subtitle}</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-indigo-300 text-xs">{currentActivity.time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Counter */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="bg-white/5 rounded-lg p-2 text-center">
            <div className="text-white font-bold">{activities.filter(a => a.type === 'hire').length}</div>
            <div className="text-indigo-300 text-xs">Hires Today</div>
          </div>
          <div className="bg-white/5 rounded-lg p-2 text-center">
            <div className="text-white font-bold">{activities.filter(a => a.type === 'job').length}</div>
            <div className="text-indigo-300 text-xs">New Jobs</div>
          </div>
          <div className="bg-white/5 rounded-lg p-2 text-center">
            <div className="text-white font-bold">{activities.filter(a => a.type === 'profile').length}</div>
            <div className="text-indigo-300 text-xs">New Members</div>
          </div>
        </div>
      </div>
    </div>
  );
}
