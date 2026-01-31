import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Advanced() {
  return (
    <Layout title="Advanced Usage">
      <Head>
        <title>Advanced Usage - MaltBot Guide</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg prose-blue max-w-none dark:prose-invert">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Advanced MaltBot Usage</h1>
          
          <div className="card p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Custom Workflows</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              For experienced users, MaltBot supports complex workflow definitions that can handle sophisticated automation scenarios.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Script Integration</h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-6">
              <li>Custom JavaScript/Python scripts</li>
              <li>External API interactions</li>
              <li>Data transformation processes</li>
              <li>Conditional logic implementation</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">API Usage</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Direct API access allows for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Programmatic control</li>
              <li>Custom integrations</li>
              <li>Real-time data processing</li>
              <li>Bulk operations</li>
            </ul>
          </div>
          
          <div className="card p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Performance Optimization</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Resource Management</h3>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Memory allocation tuning</li>
                  <li>Processing queue optimization</li>
                  <li>Caching strategies</li>
                  <li>Database connection pooling</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Scaling Strategies</h3>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Horizontal scaling approaches</li>
                  <li>Load distribution methods</li>
                  <li>Failover mechanisms</li>
                  <li>Monitoring and alerting</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="card p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Security Enhancements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Access Control</h3>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Multi-factor authentication</li>
                  <li>Role-based permissions</li>
                  <li>IP whitelisting</li>
                  <li>Session management</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Data Protection</h3>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Encryption at rest and in transit</li>
                  <li>Secure credential storage</li>
                  <li>Audit logging</li>
                  <li>Compliance measures</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="card p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Expert Tips</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Regularly update to the latest version for security patches</li>
              <li>Implement proper backup strategies</li>
              <li>Monitor performance metrics consistently</li>
              <li>Plan for disaster recovery scenarios</li>
            </ul>
          </div>
          
          <div className="card p-8 mb-10 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Congratulations! You've completed the comprehensive MaltBot guide. For additional resources, refer back to earlier sections as needed.
            </p>
          </div>
          
          <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
            <Link href="/troubleshooting">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                ← Troubleshooting
              </a>
            </Link>
            <Link href="/">
              <a className="btn-primary">
                Back to Home →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}