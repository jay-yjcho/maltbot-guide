import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Troubleshooting() {
  return (
    <Layout title="Troubleshooting">
      <Head>
        <title>Troubleshooting - MaltBot Guide</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg prose-blue max-w-none dark:prose-invert">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Troubleshooting MaltBot</h1>
          
          <div className="card p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Common Issues</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Connection Problems</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <span className="font-semibold">Issue</span>: MaltBot fails to connect to services<br />
                <span className="font-semibold">Solution</span>:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Verify network connectivity</li>
                <li>Check authentication credentials</li>
                <li>Ensure firewall settings allow connections</li>
                <li>Review API endpoint availability</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Performance Issues</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <span className="font-semibold">Issue</span>: Slow response times<br />
                <span className="font-semibold">Solution</span>:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Check system resources</li>
                <li>Review concurrent operation limits</li>
                <li>Optimize configuration settings</li>
                <li>Consider scaling options</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Configuration Errors</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <span className="font-semibold">Issue</span>: Settings not applying correctly<br />
                <span className="font-semibold">Solution</span>:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Validate JSON/YAML syntax</li>
                <li>Verify permission levels</li>
                <li>Restart services after changes</li>
                <li>Check for conflicting settings</li>
              </ul>
            </div>
          </div>
          
          <div className="card p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Diagnostic Steps</h2>
            <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Check system logs for error messages</li>
              <li>Verify all required dependencies are installed</li>
              <li>Confirm network connectivity to required services</li>
              <li>Validate configuration file integrity</li>
              <li>Test individual components separately</li>
            </ol>
          </div>
          
          <div className="card p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Support Resources</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Review the <Link href="/features"><a className="text-blue-600 dark:text-blue-400 hover:underline">Features</a></Link> section for proper usage</li>
              <li>Check the <Link href="/advanced"><a className="text-blue-600 dark:text-blue-400 hover:underline">Advanced Usage</a></Link> guide for complex scenarios</li>
              <li>Contact support with detailed error descriptions</li>
              <li>Search the community forums for similar issues</li>
            </ul>
          </div>
          
          <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
            <Link href="/features">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                ← Features
              </a>
            </Link>
            <Link href="/advanced">
              <a className="btn-primary">
                Advanced Usage →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}