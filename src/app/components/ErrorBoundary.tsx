import React from 'react';
import { AlertTriangle, Home, RefreshCw, Mail } from 'lucide-react';
import { DHNexusLogo } from './DHNexusLogo';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    console.error('Error Boundary caught an error:', error, errorInfo);
    
    // Update state with error details
    this.setState({
      error,
      errorInfo,
    });

    // In production, you could send error to logging service
    // Example: logErrorToService(error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-4 py-20">
          <div className="max-w-2xl w-full text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 blur-3xl animate-pulse"></div>
                <DHNexusLogo variant="hero" className="relative" />
              </div>
            </div>

            {/* Error Icon */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500/20 blur-xl animate-pulse"></div>
                  <AlertTriangle className="w-20 h-20 text-red-400 relative animate-bounce" />
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">
                Oops! Something Went Wrong
              </h1>
              
              <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto">
                We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
              </p>
            </div>

            {/* Error Details (Development Mode) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-8 bg-slate-900/50 border border-red-500/30 rounded-xl p-6 text-left">
                <h3 className="text-red-400 font-semibold mb-2 text-sm">Error Details (Development Mode):</h3>
                <pre className="text-xs text-slate-300 overflow-auto max-h-40 whitespace-pre-wrap">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 group"
              >
                <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                Reload Page
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 border border-slate-700 text-white rounded-xl hover:bg-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Go to Homepage
              </button>
            </div>

            {/* Support */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
              <p className="text-slate-400 text-sm mb-3">
                If this problem persists, please contact our support team:
              </p>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a 
                  href="mailto:m24id1009@iitj.ac.in"
                  className="text-cyan-400 hover:text-cyan-300 underline text-sm"
                >
                  m24id1009@iitj.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
