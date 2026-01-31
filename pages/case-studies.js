import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function CaseStudies() {
  return (
    <Layout title="Case Studies">
      <Head>
        <title>Case Studies - MaltBot Guide</title>
        <meta name="description" content="Real-world examples of MaltBot implementations" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">MaltBot Case Studies</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Explore real-world implementations of MaltBot across various industries and use cases. These case studies demonstrate practical applications and measurable outcomes achieved by organizations using MaltBot.
            </p>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Enterprise Implementation</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              <span className="font-semibold">Company:</span> TechCorp Industries<br />
              <span className="font-semibold">Challenge:</span> Streamline customer support operations and reduce response times<br />
              <span className="font-semibold">Solution:</span> Implemented MaltBot to handle routine inquiries and automate ticket routing<br />
              <span className="font-semibold">Results:</span> 40% reduction in average response time, 25% increase in customer satisfaction
            </p>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">E-commerce Integration</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              <span className="font-semibold">Company:</span> ShopEasy Retail<br />
              <span className="font-semibold">Challenge:</span> Automate order processing and inventory management<br />
              <span className="font-semibold">Solution:</span> Used MaltBot to connect e-commerce platform with inventory system<br />
              <span className="font-semibold">Results:</span> 60% reduction in processing errors, 30% improvement in order fulfillment speed
            </p>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Healthcare Application</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              <span className="font-semibold">Organization:</span> MediCare Health Systems<br />
              <span className="font-semibold">Challenge:</span> Automate appointment scheduling and patient communication<br />
              <span className="font-semibold">Solution:</span> Deployed MaltBot with HIPAA-compliant communication protocols<br />
              <span className="font-semibold">Results:</span> 50% reduction in administrative workload, improved patient engagement
            </p>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Educational Institution</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              <span className="font-semibold">Institution:</span> University of Innovation<br />
              <span className="font-semibold">Challenge:</span> Automate student inquiry handling and course enrollment<br />
              <span className="font-semibold">Solution:</span> Configured MaltBot for multilingual support and academic calendar integration<br />
              <span className="font-semibold">Results:</span> 35% decrease in administrative staff workload, faster enrollment process
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/best-practices">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← Best Practices
              </a>
            </Link>
            <Link href="/tutorials">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                Tutorials →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}