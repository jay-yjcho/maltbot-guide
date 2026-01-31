import Head from 'next/head';
import Layout from '../components/Layout';

export default function Troubleshooting() {
  return (
    <Layout title="Troubleshooting">
      <Head>
        <title>Troubleshooting - MaltBot Guide</title>
      </Head>

      <article className="content">
        <h1>Troubleshooting MaltBot</h1>
        
        <h2>Common Issues</h2>
        
        <h3>Connection Problems</h3>
        <p><strong>Issue</strong>: MaltBot fails to connect to services<br />
        <strong>Solution</strong>:</p>
        <ul>
          <li>Verify network connectivity</li>
          <li>Check authentication credentials</li>
          <li>Ensure firewall settings allow connections</li>
          <li>Review API endpoint availability</li>
        </ul>
        
        <h3>Performance Issues</h3>
        <p><strong>Issue</strong>: Slow response times<br />
        <strong>Solution</strong>:</p>
        <ul>
          <li>Check system resources</li>
          <li>Review concurrent operation limits</li>
          <li>Optimize configuration settings</li>
          <li>Consider scaling options</li>
        </ul>
        
        <h3>Configuration Errors</h3>
        <p><strong>Issue</strong>: Settings not applying correctly<br />
        <strong>Solution</strong>:</p>
        <ul>
          <li>Validate JSON/YAML syntax</li>
          <li>Verify permission levels</li>
          <li>Restart services after changes</li>
          <li>Check for conflicting settings</li>
        </ul>
        
        <h2>Diagnostic Steps</h2>
        <ol>
          <li>Check system logs for error messages</li>
          <li>Verify all required dependencies are installed</li>
          <li>Confirm network connectivity to required services</li>
          <li>Validate configuration file integrity</li>
          <li>Test individual components separately</li>
        </ol>
        
        <h2>Support Resources</h2>
        <ul>
          <li>Review the <a href="/features">Features</a> section for proper usage</li>
          <li>Check the <a href="/advanced">Advanced Usage</a> guide for complex scenarios</li>
          <li>Contact support with detailed error descriptions</li>
          <li>Search the community forums for similar issues</li>
        </ul>
        
        <div className="navigation-links">
          <a href="/features">&larr; Features</a>
          <a href="/advanced">Advanced Usage &rarr;</a>
        </div>
      </article>
    </Layout>
  );
}