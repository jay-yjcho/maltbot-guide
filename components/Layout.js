import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/layout.module.css';

export default function Layout({ children, title = 'MaltBot Guide' }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title} - MaltBot Guide</title>
        <meta name="description" content="Comprehensive MaltBot documentation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.navContainer}>
          <Link href="/">
            <a className={styles.logo}>MaltBot Guide</a>
          </Link>
          <nav className={styles.nav}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/getting-started"><a>Getting Started</a></Link>
            <Link href="/configuration"><a>Configuration</a></Link>
            <Link href="/features"><a>Features</a></Link>
            <Link href="/troubleshooting"><a>Troubleshooting</a></Link>
            <Link href="/advanced"><a>Advanced</a></Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 MaltBot Guide. All rights reserved.</p>
      </footer>
    </div>
  );
}