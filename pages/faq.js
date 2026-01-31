import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function FAQ() {
  return (
    <Layout title="FAQ">
      <Head>
        <title>FAQ - MaltBot Guide</title>
        <meta name="description" content="Frequently asked questions about MaltBot" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">Frequently Asked Questions</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">General Questions</h2>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">What is MaltBot?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                MaltBot is an innovative automation platform designed to streamline business processes, enhance productivity, and integrate seamlessly with various systems. It enables users to create automated workflows, manage data flows, and optimize operations with minimal technical expertise required.
              </p>
            </div>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Who is MaltBot designed for?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                MaltBot serves a diverse audience including small businesses looking to automate routine tasks, enterprise teams seeking to optimize complex workflows, developers wanting to integrate systems efficiently, and non-technical users who need to connect different applications without coding.
              </p>
            </div>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">How secure is MaltBot?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Security is paramount in MaltBot's design. It features end-to-end encryption for data transmission, role-based access controls, regular security audits, compliance with industry standards, and granular permission settings. All data is stored securely with backups and disaster recovery protocols in place.
              </p>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Technical Questions</h2>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">What platforms does MaltBot support?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                MaltBot offers extensive platform support including Windows, macOS, Linux, cloud environments like AWS, Azure, and Google Cloud, containerized deployments with Docker and Kubernetes, and can be integrated with virtually any system through APIs or standard protocols.
              </p>
            </div>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Can MaltBot integrate with my existing tools?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Yes, MaltBot is built with integration in mind. It provides connectors for popular CRM systems, databases, email platforms, project management tools, e-commerce platforms, and many other business applications. Custom connectors can be developed for proprietary systems.
              </p>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Support and Pricing</h2>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">What support options are available?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                MaltBot offers multiple support tiers including community forums, email support for all users, priority phone support for premium subscribers, dedicated account managers for enterprise customers, and comprehensive documentation with tutorials and examples.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">How is MaltBot priced?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                MaltBot follows a tiered pricing model starting with a free tier for basic usage, followed by professional and team plans with increasing features, and custom enterprise pricing for large organizations with specific requirements. Volume discounts are available for annual subscriptions.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/tutorials">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← Tutorials
              </a>
            </Link>
            <Link href="/api-reference">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                API Reference →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}