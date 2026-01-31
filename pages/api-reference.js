import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function APIReference() {
  return (
    <Layout title="API Reference">
      <Head>
        <title>API Reference - MaltBot Guide</title>
        <meta name="description" content="Complete API reference for MaltBot" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">MaltBot API Reference</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Overview</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              The MaltBot API provides programmatic access to all platform features, enabling seamless integration with external systems and custom applications. Our RESTful API follows industry-standard practices and supports JSON for request/response formats.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              <span className="font-semibold">Base URL:</span> https://api.maltbot.com/v1<br />
              <span className="font-semibold">Authentication:</span> Bearer tokens<br />
              <span className="font-semibold">Rate Limits:</span> 1000 requests per hour per token
            </p>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Authentication</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              All API requests require authentication using a Bearer token:
            </p>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs sm:text-sm">
              <code>curl -X GET https://api.maltbot.com/v1/workflows \\<br />
  -H "Authorization: Bearer YOUR_API_TOKEN"</code>
            </pre>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Workflows API</h2>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">List Workflows</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-2">
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded mr-2">GET</span>
                <span className="font-mono text-sm">/workflows</span>
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Retrieve a list of all workflows accessible to the authenticated user.
              </p>
            </div>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Create Workflow</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-2">
                <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded mr-2">POST</span>
                <span className="font-mono text-sm">/workflows</span>
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Create a new workflow with the provided configuration.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Execute Workflow</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-2">
                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded mr-2">POST</span>
                <span className="font-mono text-sm">/workflows/{'{id}'}/execute</span>
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Execute a specific workflow by its ID.
              </p>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Data API</h2>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Query Data</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-2">
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded mr-2">GET</span>
                <span className="font-mono text-sm">/data/query</span>
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Execute queries against stored data using SQL-like syntax.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Store Data</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-2">
                <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded mr-2">POST</span>
                <span className="font-mono text-sm">/data/store</span>
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Store data in the MaltBot data layer for later retrieval and analysis.
              </p>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Error Handling</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              The API returns standard HTTP status codes:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><span className="font-mono">200 OK</span> - Request successful</li>
              <li><span className="font-mono">400 Bad Request</span> - Invalid request parameters</li>
              <li><span className="font-mono">401 Unauthorized</span> - Invalid or missing authentication</li>
              <li><span className="font-mono">403 Forbidden</span> - Insufficient permissions</li>
              <li><span className="font-mono">404 Not Found</span> - Requested resource doesn't exist</li>
              <li><span className="font-mono">429 Too Many Requests</span> - Rate limit exceeded</li>
              <li><span className="font-mono">500 Internal Server Error</span> - Server error</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/faq">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← FAQ
              </a>
            </Link>
            <Link href="/changelog">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                Changelog →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}