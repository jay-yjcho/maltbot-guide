import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="MaltBot Guide">
      <Head>
        <title>MaltBot Guide - Comprehensive Documentation</title>
        <meta name="description" content="Your comprehensive resource for mastering MaltBot technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero-pattern min-h-screen">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Welcome to the <span className="text-blue-600">MaltBot Guide</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-10">
              Your comprehensive resource for mastering MaltBot technology
            </p>
            <div className="flex justify-center">
              <Link href="/getting-started">
                <a className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3">
                  Get Started
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Link href="/getting-started">
              <a className="card h-full flex flex-col p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Getting Started</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow text-sm sm:text-base">Learn the basics and get MaltBot up and running quickly.</p>
                <span className="mt-3 sm:mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">Learn more →</span>
              </a>
            </Link>

            <Link href="/configuration">
              <a className="card h-full flex flex-col p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Configuration</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow text-sm sm:text-base">Set up and customize your MaltBot instance.</p>
                <span className="mt-3 sm:mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">Learn more →</span>
              </a>
            </Link>

            <Link href="/features">
              <a className="card h-full flex flex-col p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Features</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow text-sm sm:text-base">Explore the powerful capabilities of MaltBot.</p>
                <span className="mt-3 sm:mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">Learn more →</span>
              </a>
            </Link>

            <Link href="/troubleshooting">
              <a className="card h-full flex flex-col p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Troubleshooting</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow text-sm sm:text-base">Solutions to common issues and diagnostic procedures.</p>
                <span className="mt-3 sm:mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">Learn more →</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}