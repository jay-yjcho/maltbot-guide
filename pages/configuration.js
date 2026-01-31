import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Configuration() {
  return (
    <Layout title="Configuration">
      <Head>
        <title>Configuration - MaltBot Guide</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg prose-blue max-w-none dark:prose-invert">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">MaltBot Configuration</h1>
          
          <div className="card p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Initial Setup</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The configuration process involves several key components that determine how MaltBot operates within your environment.
            </p>
          </div>
          
          <div className="card p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core Settings</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Authentication</h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-6">
              <li>API keys</li>
              <li>Access tokens</li>
              <li>Permission levels</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Functional Parameters</h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-6">
              <li>Operating modes</li>
              <li>Response behaviors</li>
              <li>Integration settings</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Customization Options</h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Appearance settings</li>
              <li>Notification preferences</li>
              <li>User interface adjustments</li>
            </ul>
          </div>
          
          <div className="card p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Environment Variables</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              MaltBot uses several environment variables for operation:
            </p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm">MALTBOT_API_KEY=your_api_key_here
MALTBOT_MODE=production
MALTBOT_LOG_LEVEL=info</code>
            </pre>
          </div>
          
          <div className="card p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Best Practices</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Always backup your configuration before making changes</li>
              <li>Test changes in a non-production environment first</li>
              <li>Regularly review and update security settings</li>
              <li>Monitor performance metrics to optimize settings</li>
            </ul>
          </div>
          
          <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
            <Link href="/getting-started">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                ← Getting Started
              </a>
            </Link>
            <Link href="/features">
              <a className="btn-primary">
                Features →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}