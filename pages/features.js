import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Features() {
  return (
    <Layout title="Features">
      <Head>
        <title>Features - MaltBot Guide</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg prose-blue max-w-none dark:prose-invert">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">MaltBot Features</h1>
          
          <div className="card p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core Capabilities</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              MaltBot offers a range of powerful features designed to streamline your workflow and enhance productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Automation</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Automated task execution</li>
                <li>Scheduled operations</li>
                <li>Conditional responses</li>
                <li>Workflow optimization</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Integration</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Multi-platform compatibility</li>
                <li>API connectivity</li>
                <li>Data synchronization</li>
                <li>Third-party service integration</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Analytics</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Performance monitoring</li>
                <li>Usage statistics</li>
                <li>Behavior tracking</li>
                <li>Insights generation</li>
              </ul>
            </div>
          </div>
          
          <div className="card p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Advanced Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Customization</h3>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Personalized workflows</li>
                  <li>Custom command creation</li>
                  <li>Interface modifications</li>
                  <li>Role-based access controls</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Security</h3>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Encrypted communications</li>
                  <li>Access logging</li>
                  <li>Permission management</li>
                  <li>Audit trails</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Scalability</h3>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Multi-user support</li>
                  <li>Resource optimization</li>
                  <li>Load balancing</li>
                  <li>Performance tuning</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="card p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Feature Activation</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Most features are enabled by default, but some require specific configuration in your settings file. Refer to the <Link href="/configuration"><a className="text-blue-600 dark:text-blue-400 hover:underline">Configuration</a></Link> guide for activation instructions.
            </p>
          </div>
          
          <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
            <Link href="/configuration">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                ← Configuration
              </a>
            </Link>
            <Link href="/troubleshooting">
              <a className="btn-primary">
                Troubleshooting →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}