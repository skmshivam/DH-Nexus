import { Instagram, Linkedin, Twitter, ExternalLink, Heart, MessageCircle, Share2, Users, Link2, RefreshCw, AlertCircle } from 'lucide-react';
import { useSocialPosts } from '../hooks/useSocialPosts';

// Custom Threads icon (SVG)
function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.186 3.998a8.95 8.95 0 0 0-6.388 2.64 9.011 9.011 0 0 0-2.64 6.388c0 2.418.952 4.736 2.64 6.388a9.011 9.011 0 0 0 6.388 2.64 8.95 8.95 0 0 0 6.388-2.64 9.011 9.011 0 0 0 2.64-6.388 8.95 8.95 0 0 0-2.64-6.388 9.011 9.011 0 0 0-6.388-2.64zm0-2c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm.36 13.33c-.08-.13-.16-.27-.23-.41-.32-.63-.49-1.33-.49-2.08 0-2.42 1.72-4.44 4-4.92v-.92c-2.93.5-5.14 3.04-5.14 6.09 0 1.71.69 3.26 1.81 4.38.29-.77.72-1.46 1.26-2.04-.41-.31-.77-.68-1.07-1.1-.47-.65-.73-1.42-.73-2.24 0-1.87 1.36-3.42 3.14-3.74v3.74c0 .65.13 1.26.36 1.82.11.27.24.52.39.76.42.68 1.03 1.22 1.75 1.56.27.13.56.23.86.3v-3.86c-.3-.07-.58-.17-.84-.3-.49-.23-.89-.6-1.16-1.05z"/>
    </svg>
  );
}

// Custom YouTube icon (SVG)
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export function SocialFeed() {
  const { posts, loading, error, refresh } = useSocialPosts();

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'threads':
        return <ThreadsIcon className="w-5 h-5" />;
      case 'youtube':
        return <YouTubeIcon className="w-5 h-5" />;
      default:
        return <Share2 className="w-5 h-5" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return 'from-blue-600 to-blue-700';
      case 'instagram':
        return 'from-pink-600 to-rose-600';
      case 'twitter':
        return 'from-blue-400 to-blue-500';
      case 'threads':
        return 'from-black to-gray-900';
      case 'youtube':
        return 'from-red-500 to-red-600';
      default:
        return 'from-slate-600 to-slate-700';
    }
  };

  const getPlatformName = (platform: string) => {
    return platform.charAt(0).toUpperCase() + platform.slice(1);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full mb-6">
            <Share2 className="w-5 h-5" />
            <span className="text-sm font-semibold">Latest Updates</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 text-slate-900">
            Follow Our Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Stay updated with the latest from DH Nexus - real posts from our LinkedIn and Instagram
          </p>

          {/* Social Media Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://linktr.ee/DHNexus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-500 hover:to-emerald-600 text-white px-6 py-3 rounded-xl transition-all shadow-lg hover:scale-105"
            >
              <Link2 className="w-5 h-5" />
              <span className="font-semibold">All Links</span>
            </a>
            <a
              href="https://www.linkedin.com/company/dh-nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-xl transition-all shadow-lg hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-semibold">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/dh_nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white px-6 py-3 rounded-xl transition-all shadow-lg hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-semibold">Instagram</span>
            </a>
            <a
              href="https://www.threads.com/@dh_nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-black to-gray-900 hover:from-gray-900 hover:to-black text-white px-6 py-3 rounded-xl transition-all shadow-lg hover:scale-105"
            >
              <ThreadsIcon className="w-5 h-5" />
              <span className="font-semibold">Threads</span>
            </a>
            <a
              href="https://youtube.com/@dhnexus26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white px-6 py-3 rounded-xl transition-all shadow-lg hover:scale-105"
            >
              <YouTubeIcon className="w-5 h-5" />
              <span className="font-semibold">YouTube</span>
            </a>
            <a
              href="https://twitter.com/dhnexus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 text-white px-6 py-3 rounded-xl transition-all shadow-lg hover:scale-105"
            >
              <Twitter className="w-5 h-5" />
              <span className="font-semibold">Twitter</span>
            </a>
            <button
              onClick={refresh}
              disabled={loading}
              className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-xl transition-all shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Refresh posts"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
              <span className="font-semibold">Refresh</span>
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-sm text-blue-800">
                    <strong>Showing Latest Posts</strong>
                  </p>
                  <p className="text-xs text-blue-700 mt-1">
                    Posts are displayed from our social media. For automatic updates, see{' '}
                    <code className="bg-blue-100 px-1 rounded text-xs">/QUICK_START_SOCIAL_FEED.md</code>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && posts.length === 0 && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden animate-pulse">
                <div className="h-64 bg-slate-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-slate-200 rounded mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Real Social Media Posts */}
        {!loading && posts.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {posts.map((post, index) => (
              <a
                key={post.id || index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-indigo-300 transition-all duration-300"
              >
                {/* Post Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={post.image}
                    alt="Social media post"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Platform Badge */}
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${getPlatformColor(post.platform)} text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2`}>
                    {getPlatformIcon(post.platform)}
                    <span className="text-sm font-semibold">{getPlatformName(post.platform)}</span>
                  </div>

                  {/* View Post Button */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-indigo-600 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg flex items-center gap-2">
                    <span className="text-sm font-semibold">View Post</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <p className="text-slate-700 mb-4 leading-relaxed line-clamp-3">
                    {post.content}
                  </p>

                  {/* Post Stats */}
                  <div className="flex items-center gap-6 text-sm text-slate-500 border-t border-slate-200 pt-4">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-blue-500" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="ml-auto text-xs text-slate-400">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl lg:text-4xl mb-4">
            Join Our Growing Community
          </h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Connect with Digital Humanities professionals, students, and industry partners. Stay updated with opportunities, events, and insights.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/dh-nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl transition-all shadow-lg hover:scale-105 font-semibold"
            >
              <Linkedin className="w-5 h-5" />
              Follow on LinkedIn
            </a>
            <a
              href="https://www.instagram.com/dh_nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white/30 text-white px-8 py-4 rounded-xl transition-all"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}