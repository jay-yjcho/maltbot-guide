import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title = 'MaltBot Guide' }) {
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
            <nav className="hidden md:flex space-x-4 lg:space-x-6 overflow-x-auto">
              <Link href="/"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-sm">Home</a></Link>
              <Link href="/getting-started"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-sm">Getting Started</a></Link>
              <Link href="/configuration"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-sm">Configuration</a></Link>
              <Link href="/features"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-sm">Features</a></Link>
              <Link href="/troubleshooting"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-sm">Troubleshooting</a></Link>
              <Link href="/advanced"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-sm">Advanced</a></Link>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
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