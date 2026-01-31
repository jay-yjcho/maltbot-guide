import Head from 'next/head';
import Layout from '../components/Layout';

export default function Features() {
  return (
    <Layout title="Features">
      <Head>
        <title>Features - MaltBot Guide</title>
      </Head>

      <article className="content">
        <h1>MaltBot Features</h1>
        
        <h2>Core Capabilities</h2>
        <p>MaltBot offers a range of powerful features designed to streamline your workflow and enhance productivity.</p>
        
        <h3>Automation</h3>
        <ul>
          <li>Automated task execution</li>
          <li>Scheduled operations</li>
          <li>Conditional responses</li>
          <li>Workflow optimization</li>
        </ul>
        
        <h3>Integration</h3>
        <ul>
          <li>Multi-platform compatibility</li>
          <li>API connectivity</li>
          <li>Data synchronization</li>
          <li>Third-party service integration</li>
        </ul>
        
        <h3>Analytics</h3>
        <ul>
          <li>Performance monitoring</li>
          <li>Usage statistics</li>
          <li>Behavior tracking</li>
          <li>Insights generation</li>
        </ul>
        
        <h2>Advanced Features</h2>
        
        <h3>Customization</h3>
        <ul>
          <li>Personalized workflows</li>
          <li>Custom command creation</li>
          <li>Interface modifications</li>
          <li>Role-based access controls</li>
        </ul>
        
        <h3>Security</h3>
        <ul>
          <li>Encrypted communications</li>
          <li>Access logging</li>
          <li>Permission management</li>
          <li>Audit trails</li>
        </ul>
        
        <h3>Scalability</h3>
        <ul>
          <li>Multi-user support</li>
          <li>Resource optimization</li>
          <li>Load balancing</li>
          <li>Performance tuning</li>
        </ul>
        
        <h2>Feature Activation</h2>
        <p>Most features are enabled by default, but some require specific configuration in your settings file. Refer to the <a href="/configuration">Configuration</a> guide for activation instructions.</p>
        
        <div className="navigation-links">
          <a href="/configuration">&larr; Configuration</a>
          <a href="/troubleshooting">Troubleshooting &rarr;</a>
        </div>
      </article>
    </Layout>
  );
}