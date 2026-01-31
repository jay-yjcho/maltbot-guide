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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
              Welcome to the <span className="text-blue-600">MaltBot Guide</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              Your comprehensive resource for mastering MaltBot technology
            </p>
            <div className="flex justify-center">
              <Link href="/getting-started">
                <a className="btn-primary text-lg px-8 py-3">
                  Get Started
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/getting-started">
              <a className="card h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Getting Started</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">Learn the basics and get MaltBot up and running quickly.</p>
                <span className="mt-4 text-blue-600 dark:text-blue-400 font-medium">Learn more →</span>
              </a>
            </Link>

            <Link href="/configuration">
              <a className="card h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Configuration</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">Set up and customize your MaltBot instance.</p>
                <span className="mt-4 text-blue-600 dark:text-blue-400 font-medium">Learn more →</span>
              </a>
            </Link>

            <Link href="/features">
              <a className="card h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Features</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">Explore the powerful capabilities of MaltBot.</p>
                <span className="mt-4 text-blue-600 dark:text-blue-400 font-medium">Learn more →</span>
              </a>
            </Link>

            <Link href="/troubleshooting">
              <a className="card h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Troubleshooting</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">Solutions to common issues and diagnostic procedures.</p>
                <span className="mt-4 text-blue-600 dark:text-blue-400 font-medium">Learn more →</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}