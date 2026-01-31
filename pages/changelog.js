import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Changelog() {
  return (
    <Layout title="Changelog">
      <Head>
        <title>Changelog - MaltBot Guide</title>
        <meta name="description" content="Release notes and updates for MaltBot" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">MaltBot Changelog</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Version 3.2.0 - January 2026</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              <span className="font-semibold">Release Date:</span> January 31, 2026
            </p>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">New Features</h3>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Enhanced analytics dashboard with customizable widgets</li>
                <li>Improved workflow designer with drag-and-drop interface</li>
                <li>New connector for popular e-commerce platforms</li>
                <li>Advanced scheduling options with recurring patterns</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Improvements</h3>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>30% performance improvement in workflow execution</li>
                <li>Enhanced error reporting with detailed diagnostics</li>
                <li>Improved mobile interface for monitoring</li>
                <li>Better integration with third-party authentication providers</li>
              </ul>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Version 3.1.5 - December 2025</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              <span className="font-semibold">Release Date:</span> December 15, 2025
            </p>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Bug Fixes</h3>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Fixed issue with data synchronization delays</li>
                <li>Resolved memory leak in long-running workflows</li>
                <li>Corrected timezone handling in scheduled tasks</li>
                <li>Fixed authentication token expiration bug</li>
              </ul>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Version 3.1.0 - November 2025</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              <span className="font-semibold">Release Date:</span> November 20, 2025
            </p>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">New Features</h3>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Advanced workflow branching and conditional logic</li>
                <li>New data transformation functions</li>
                <li>Enhanced security scanning for workflows</li>
                <li>Team collaboration features with role management</li>
              </ul>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Version 3.0.0 - October 2025</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              <span className="font-semibold">Release Date:</span> October 5, 2025
            </p>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Major Release</h3>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Complete redesign of user interface</li>
                <li>New workflow engine with improved performance</li>
                <li>Expanded API with additional endpoints</li>
                <li>Enhanced monitoring and debugging tools</li>
                <li>Migration tools for legacy workflows</li>
              </ul>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Version 2.5.3 - September 2025</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              <span className="font-semibold">Release Date:</span> September 10, 2025
            </p>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Improvements</h3>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Enhanced error handling and recovery</li>
                <li>Improved documentation and examples</li>
                <li>Better integration with cloud services</li>
                <li>Performance optimizations for large datasets</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/api-reference">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← API Reference
              </a>
            </Link>
            <Link href="/integrations">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                Integrations →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}