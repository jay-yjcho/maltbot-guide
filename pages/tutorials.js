import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Tutorials() {
  return (
    <Layout title="Tutorials">
      <Head>
        <title>Tutorials - MaltBot Guide</title>
        <meta name="description" content="Step-by-step tutorials for MaltBot features" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">MaltBot Tutorials</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Our comprehensive tutorial series guides you through step-by-step implementations of MaltBot features. From basic setup to advanced configurations, these tutorials provide hands-on experience with practical examples.
            </p>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Tutorial 1: Basic Setup</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Learn how to install and configure MaltBot for your environment:
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>Download and install MaltBot</li>
              <li>Configure basic settings</li>
              <li>Set up authentication</li>
              <li>Connect to your data sources</li>
              <li>Verify installation with test operations</li>
            </ol>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Tutorial 2: Creating Custom Workflows</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Build automated workflows tailored to your specific needs:
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>Identify automation opportunities</li>
              <li>Design workflow logic</li>
              <li>Implement triggers and actions</li>
              <li>Test and refine the workflow</li>
              <li>Deploy to production environment</li>
            </ol>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Tutorial 3: Integrating with Third-Party Services</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Connect MaltBot with external services and APIs:
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>Configure API connections</li>
              <li>Set up authentication for external services</li>
              <li>Create data mapping rules</li>
              <li>Handle error responses and retries</li>
              <li>Monitor integration performance</li>
            </ol>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Tutorial 4: Advanced Analytics</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Leverage MaltBot's analytics capabilities for insights:
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>Configure data collection points</li>
              <li>Set up custom metrics and KPIs</li>
              <li>Create automated reports</li>
              <li>Visualize data with dashboards</li>
              <li>Set up alerts for anomalies</li>
            </ol>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/case-studies">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← Case Studies
              </a>
            </Link>
            <Link href="/faq">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                FAQ →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}