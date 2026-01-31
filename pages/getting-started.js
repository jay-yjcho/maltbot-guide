import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function GettingStarted() {
  return (
    <Layout title="Getting Started">
      <Head>
        <title>Getting Started - MaltBot Guide</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">Getting Started with MaltBot</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              MaltBot is a sophisticated system designed to enhance your workflow and automate various tasks. This guide will walk you through the initial setup and basic usage patterns.
            </p>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Prerequisites</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Before getting started with MaltBot, ensure you have:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>Basic understanding of the platform it integrates with</li>
              <li>Appropriate permissions for configuration</li>
              <li>Stable internet connection</li>
            </ul>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Installation</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              To begin using MaltBot:
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>Obtain your credentials</li>
              <li>Configure the initial settings</li>
              <li>Verify connectivity</li>
              <li>Test basic functionality</li>
            </ol>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">First Steps</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Once installed, we recommend:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>Familiarizing yourself with the core features</li>
              <li>Setting up your preferred configurations</li>
              <li>Exploring the customization options</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← Back to Home
              </a>
            </Link>
            <Link href="/configuration">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                Configuration →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}