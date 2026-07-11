import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft, Compass, AlertCircle, Sparkles } from 'lucide-react';
import { DHNexusLogo } from '../components/DHNexusLogo';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';

export function NotFoundPage() {
  const quickLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/jobs', label: 'Job Board', icon: Search },
    { to: '/global-dh', label: 'Global Programs', icon: Compass },
    { to: '/talent-directory', label: 'Talent Directory', icon: Sparkles },
  ];

  return (
    <>
      <SEO 
        title="404 - Page Not Found | DH Nexus"
        description="The page you're looking for doesn't exist. Explore DH Nexus job board, global programs, and talent directory."
        keywords="404, not found, DH Nexus"
      />
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full text-center">
          {/* Animated Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse"></div>
              <DHNexusLogo variant="hero" className="relative animate-bounce" />
            </div>
          </div>

          {/* 404 Error */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <AlertCircle className="w-16 h-16 text-cyan-400 animate-pulse" />
              <h1 className="text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                404
              </h1>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            
            <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off into the digital humanities void.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Go Back Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 border border-slate-700 text-white rounded-xl hover:bg-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
            
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 group"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Back to Home
            </Link>
          </div>

          {/* Search Suggestion */}
          <div className="mt-12 p-6 bg-slate-800/30 border border-slate-700 rounded-xl">
            <p className="text-slate-400 text-sm">
              Looking for something specific? Try searching for{' '}
              <Link to="/jobs" className="text-cyan-400 hover:text-cyan-300 underline">
                DH jobs
              </Link>,{' '}
              <Link to="/global-dh" className="text-cyan-400 hover:text-cyan-300 underline">
                global programs
              </Link>, or{' '}
              <Link to="/resources" className="text-cyan-400 hover:text-cyan-300 underline">
                resources
              </Link>.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
