import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Support() {
  return (
    <Layout title="Support">
      <Head>
        <title>Support - MaltBot Guide</title>
        <meta name="description" content="Support resources for MaltBot users" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">MaltBot Support Resources</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Getting Help</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              We're committed to providing excellent support to help you succeed with MaltBot. Our comprehensive resources and support team are here to assist you at every stage of your journey with our platform.
            </p>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Self-Service Resources</h2>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Documentation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                Our comprehensive documentation covers all aspects of MaltBot:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Getting started guides for beginners</li>
                <li>Detailed API documentation</li>
                <li>Tutorials for common use cases</li>
                <li>Best practices and optimization guides</li>
                <li>Troubleshooting articles</li>
                <li>Video tutorials and webinars</li>
              </ul>
            </div>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Community Forum</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Connect with other MaltBot users and experts in our community forum. Share experiences, ask questions, and discover new ways to use the platform. Our product team actively participates in discussions and gathers feedback for future improvements.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Knowledge Base</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Search our extensive knowledge base for solutions to common issues. Articles are regularly updated with new insights and solutions discovered by our support team and community members. The knowledge base includes step-by-step guides, video demonstrations, and troubleshooting procedures.
              </p>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Direct Support Channels</h2>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Standard Support</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                Available to all users with response times within 24 business hours:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Email support at support@maltbot.com</li>
                <li>Submit tickets through your account dashboard</li>
                <li>Priority based on issue severity</li>
                <li>Access to support team expertise</li>
                <li>Guidance on best practices</li>
              </ul>
            </div>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Premium Support</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                Enhanced support for Pro and Enterprise customers with faster response times:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Phone support for critical issues</li>
                <li>Response time within 4 hours for critical issues</li>
                <li>Direct access to senior engineers</li>
                <li>Proactive monitoring and alerts</li>
                <li>Dedicated customer success manager</li>
                <li>Quarterly business reviews</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Enterprise Support</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Comprehensive support for enterprise customers with 24/7 availability:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>24/7 phone and email support</li>
                <li>Response time within 1 hour for critical issues</li>
                <li>On-site support when needed</li>
                <li>Custom training programs</li>
                <li>Implementation consulting services</li>
                <li>SLA guarantees</li>
              </ul>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Submitting Effective Support Requests</h2>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Information to Include</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                Providing detailed information helps us resolve your issue faster:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Steps to reproduce the issue</li>
                <li>Expected vs. actual results</li>
                <li>Screenshots or screen recordings</li>
                <li>Error messages or codes</li>
                <li>Browser and operating system information</li>
                <li>Time and frequency of occurrence</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Best Practices</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Follow these best practices for the fastest resolution:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Check our knowledge base before submitting a request</li>
                <li>Try reproducing the issue in a different browser</li>
                <li>Clear browser cache and cookies</li>
                <li>Disable browser extensions temporarily</li>
                <li>Test with sample data to isolate the issue</li>
                <li>Provide access to a test environment if possible</li>
              </ul>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Training and Onboarding</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Take advantage of our training resources to get the most out of MaltBot:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 mt-3 text-sm sm:text-base">
              <li>Live onboarding sessions for new customers</li>
              <li>Weekly office hours with product experts</li>
              <li>Customized training for your team</li>
              <li>Certification programs for power users</li>
              <li>Webinar series on advanced topics</li>
              <li>Best practice workshops</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/performance">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← Performance
              </a>
            </Link>
            <Link href="/">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                Home →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}