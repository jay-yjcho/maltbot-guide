import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/main.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MaltBot Guide - Comprehensive Documentation</title>
        <meta name="description" content="Your comprehensive resource for mastering MaltBot technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Welcome to the MaltBot Guide</h1>
          <p className={styles.description}>
            Your comprehensive resource for mastering MaltBot technology
          </p>
          <div className={styles.grid}>
            <Link href="/getting-started">
              <a className={styles.card}>
                <h3>Getting Started &rarr;</h3>
                <p>Learn the basics and get MaltBot up and running quickly.</p>
              </a>
            </Link>

            <Link href="/configuration">
              <a className={styles.card}>
                <h3>Configuration &rarr;</h3>
                <p>Set up and customize your MaltBot instance.</p>
              </a>
            </Link>

            <Link href="/features">
              <a className={styles.card}>
                <h3>Features &rarr;</h3>
                <p>Explore the powerful capabilities of MaltBot.</p>
              </a>
            </Link>

            <Link href="/troubleshooting">
              <a className={styles.card}>
                <h3>Troubleshooting &rarr;</h3>
                <p>Solutions to common issues and diagnostic procedures.</p>
              </a>
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 MaltBot Guide. All rights reserved.</p>
      </footer>
    </div>
  );
}