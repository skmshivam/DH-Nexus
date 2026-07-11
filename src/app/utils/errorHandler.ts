/**
 * Global error handler to suppress Supabase connection errors
 * These are expected when the backend is not yet deployed
 */

// Suppress specific console errors
const originalConsoleError = console.error;

console.error = (...args: any[]) => {
  // Check if the error is related to Supabase/fetch failures
  const errorString = args.join(' ');
  
  // Suppress these common errors
  const suppressPatterns = [
    'supabase.co',
    'Failed to fetch',
    'API not available',
    'NetworkError',
    'TypeError: Failed to fetch',
    'net::ERR_',
  ];
  
  const shouldSuppress = suppressPatterns.some(pattern => 
    errorString.toLowerCase().includes(pattern.toLowerCase())
  );
  
  if (!shouldSuppress) {
    originalConsoleError.apply(console, args);
  }
};

// Handle unhandled promise rejections (network errors)
window.addEventListener('unhandledrejection', (event) => {
  const errorString = event.reason?.toString() || '';
  
  // Suppress Supabase-related errors
  if (
    errorString.includes('supabase') ||
    errorString.includes('Failed to fetch') ||
    errorString.includes('API not available')
  ) {
    event.preventDefault(); // Prevent the error from showing
  }
});

export {};
