import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children, title = 'MaltBot Guide' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{title} - MaltBot Guide</title>
        <meta name="description" content="Comprehensive MaltBot documentation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <a className="text-xl font-bold text-blue-600 dark:text-blue-400 truncate">MaltBot Guide</a>
            </Link>
            <nav className="hidden md:flex space-x-2 lg:space-x-3 overflow-x-auto">
              <Link href="/"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">Home</a></Link>
              <Link href="/getting-started"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">Getting Started</a></Link>
              <Link href="/configuration"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">Configuration</a></Link>
              <Link href="/features"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">Features</a></Link>
              <Link href="/troubleshooting"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">Troubleshooting</a></Link>
              <Link href="/advanced"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">Advanced</a></Link>
              <Link href="/best-practices"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">Best Practices</a></Link>
              <Link href="/case-studies"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">Case Studies</a></Link>
              <Link href="/tutorials"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">Tutorials</a></Link>
              <Link href="/faq"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">FAQ</a></Link>
              <Link href="/api-reference"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">API Reference</a></Link>
              <Link href="/changelog"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">Changelog</a></Link>
              <Link href="/integrations"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">Integrations</a></Link>
              <Link href="/security"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">Security</a></Link>
              <Link href="/performance"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">Performance</a></Link>
              <Link href="/support"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">Support</a></Link>
            </nav>
            <div className="md:hidden">
              <button 
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 max-h-[70vh] overflow-y-auto">
              <div className="flex flex-col space-y-3">
                <Link href="/"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">Home</a></Link>
                <Link href="/getting-started"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">Getting Started</a></Link>
                <Link href="/configuration"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">Configuration</a></Link>
                <Link href="/features"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">Features</a></Link>
                <Link href="/troubleshooting"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">Troubleshooting</a></Link>
                <Link href="/advanced"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">Advanced</a></Link>
                <Link href="/best-practices"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">Best Practices</a></Link>
                <Link href="/case-studies"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">Case Studies</a></Link>
                <Link href="/tutorials"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">Tutorials</a></Link>
                <Link href="/faq"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">FAQ</a></Link>
                <Link href="/api-reference"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">API Reference</a></Link>
                <Link href="/changelog"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">Changelog</a></Link>
                <Link href="/integrations"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">Integrations</a></Link>
                <Link href="/security"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">Security</a></Link>
                <Link href="/performance"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">Performance</a></Link>
                <Link href="/support"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">Support</a></Link>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white dark:bg-gray-800 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">&copy; 2026 MaltBot Guide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}