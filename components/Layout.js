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

      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <a className="text-xl font-bold text-blue-600 dark:text-blue-400">MaltBot Guide</a>
            </Link>
            <nav className="flex space-x-8">
              <Link href="/"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</a></Link>
              <Link href="/getting-started"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Getting Started</a></Link>
              <Link href="/configuration"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Configuration</a></Link>
              <Link href="/features"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Features</a></Link>
              <Link href="/troubleshooting"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Troubleshooting</a></Link>
              <Link href="/advanced"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Advanced</a></Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white dark:bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">&copy; 2026 MaltBot Guide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}