import Head from 'next/head';
import Layout from '../components/Layout';

export default function GettingStarted() {
  return (
    <Layout title="Getting Started">
      <Head>
        <title>Getting Started - MaltBot Guide</title>
      </Head>

      <article className="content">
        <h1>Getting Started with MaltBot</h1>
        
        <h2>Introduction</h2>
        <p>MaltBot is a sophisticated system designed to enhance your workflow and automate various tasks. This guide will walk you through the initial setup and basic usage patterns.</p>
        
        <h2>Prerequisites</h2>
        <p>Before getting started with MaltBot, ensure you have:</p>
        <ul>
          <li>Basic understanding of the platform it integrates with</li>
          <li>Appropriate permissions for configuration</li>
          <li>Stable internet connection</li>
        </ul>
        
        <h2>Installation</h2>
        <p>To begin using MaltBot:</p>
        <ol>
          <li>Obtain your credentials</li>
          <li>Configure the initial settings</li>
          <li>Verify connectivity</li>
          <li>Test basic functionality</li>
        </ol>
        
        <h2>First Steps</h2>
        <p>Once installed, we recommend:</p>
        <ul>
          <li>Familiarizing yourself with the core features</li>
          <li>Setting up your preferred configurations</li>
          <li>Exploring the customization options</li>
        </ul>
        
        <div className="navigation-links">
          <a href="/">&larr; Back to Home</a>
          <a href="/configuration">Configuration &rarr;</a>
        </div>
      </article>
    </Layout>
  );
}