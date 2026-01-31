import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Security() {
  return (
    <Layout title="Security">
      <Head>
        <title>Security - MaltBot Guide</title>
        <meta name="description" content="Security practices and compliance for MaltBot" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">MaltBot Security Framework</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Our Security Commitment</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Security is fundamental to MaltBot's design and operation. We implement comprehensive security measures throughout our platform to protect your data, workflows, and integrations. Our approach encompasses physical, operational, and digital safeguards aligned with industry best practices.
            </p>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Data Protection</h2>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Encryption</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                We employ industry-standard encryption protocols to protect your data:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>AES-256 encryption for data at rest</li>
                <li>TLS 1.3 for data in transit</li>
                <li>End-to-end encryption for sensitive communications</li>
                <li>Zero-knowledge architecture where applicable</li>
                <li>Key rotation and management according to NIST standards</li>
              </ul>
            </div>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Access Controls</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                Granular access controls ensure only authorized users can access specific resources:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Role-based access control (RBAC) with customizable permissions</li>
                <li>Multi-factor authentication (MFA) for all accounts</li>
                <li>Single sign-on (SSO) with SAML and OAuth 2.0 support</li>
                <li>IP whitelisting and geolocation restrictions</li>
                <li>Session management with automatic timeouts</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Data Residency</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Maintain control over where your data is stored and processed:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Regional data centers for compliance with local laws</li>
                <li>Customer-controlled data residency options</li>
                <li>Transparent data location reporting</li>
                <li>Compliance with cross-border transfer regulations</li>
              </ul>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Compliance Standards</h2>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">SOC 2 Type II</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Our SOC 2 Type II certification demonstrates our commitment to maintaining secure systems and protecting customer data. Annual audits verify our adherence to security, availability, and confidentiality criteria.
              </p>
            </div>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">GDPR Compliance</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                MaltBot fully complies with GDPR requirements, offering EU customers data portability, right to deletion, consent management, and breach notification capabilities within required timeframes.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Additional Certifications</h3>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>ISO 27001 Information Security Management</li>
                <li>PCI DSS for payment processing workflows</li>
                <li>HIPAA compliance for healthcare applications</li>
                <li>FINRA compliance for financial services</li>
              </ul>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Security Monitoring</h2>
            
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Threat Detection</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                Our security operations center monitors the platform 24/7 using advanced threat detection systems:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Behavioral analysis to identify anomalous activities</li>
                <li>Network intrusion detection and prevention systems</li>
                <li>Real-time log analysis and correlation</li>
                <li>Automated incident response procedures</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Vulnerability Management</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                We maintain a comprehensive vulnerability management program including regular penetration testing, automated security scanning, and participation in responsible disclosure programs.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/integrations">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← Integrations
              </a>
            </Link>
            <Link href="/performance">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                Performance →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}