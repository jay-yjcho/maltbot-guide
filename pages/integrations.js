import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Integrations() {
  return (
    <Layout title="Integrations">
      <Head>
        <title>Integrations - MaltBot Guide</title>
        <meta name="description" content="Supported integrations for MaltBot" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">MaltBot Integrations</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Overview</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              MaltBot seamlessly connects with hundreds of popular services and platforms. Our integration ecosystem continues to grow with new connections added regularly. All integrations are designed to maintain security and reliability while providing maximum flexibility.
            </p>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">CRM Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Salesforce</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  Sync contacts, leads, and opportunities with your Salesforce org.
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>Contact synchronization</li>
                  <li>Lead scoring updates</li>
                  <li>Opportunity tracking</li>
                  <li>Custom field mapping</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">HubSpot</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  Connect marketing, sales, and service data with HubSpot.
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>Deal pipeline sync</li>
                  <li>Email campaign triggers</li>
                  <li>Customer data enrichment</li>
                  <li>Task automation</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Microsoft Dynamics</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  Integrate with Microsoft's enterprise CRM solution.
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>Account management</li>
                  <li>Activity tracking</li>
                  <li>Document association</li>
                  <li>Workflow triggers</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Pipedrive</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  Connect deal pipelines and sales activities.
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>Pipeline management</li>
                  <li>Sales activity logging</li>
                  <li>Lead qualification</li>
                  <li>Commission calculations</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Communication Platforms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Slack</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  Connect workflows to your team's primary communication platform.
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>Automated notifications</li>
                  <li>Workflow status updates</li>
                  <li>Approval requests</li>
                  <li>Custom slash commands</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Microsoft Teams</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  Integrate with Microsoft's collaboration platform.
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>Team notifications</li>
                  <li>Meeting scheduling</li>
                  <li>File sharing workflows</li>
                  <li>Chatbot integration</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Storage & Productivity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Google Workspace</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  Connect with Gmail, Drive, Sheets, and other Google services.
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>Email automation</li>
                  <li>Spreadsheet updates</li>
                  <li>Document generation</li>
                  <li>Calendar integration</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Dropbox</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  Automate file management and sharing workflows.
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>File synchronization</li>
                  <li>Folder organization</li>
                  <li>Sharing permissions</li>
                  <li>Backup automation</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Development Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  Connect development workflows with GitHub repositories.
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>Issue automation</li>
                  <li>Pull request workflows</li>
                  <li>Deployment triggers</li>
                  <li>Code review notifications</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Jira</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  Integrate project management with development processes.
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>Issue creation and updates</li>
                  <li>Sprint automation</li>
                  <li>Status synchronization</li>
                  <li>Reporting workflows</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/changelog">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← Changelog
              </a>
            </Link>
            <Link href="/security">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                Security →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}