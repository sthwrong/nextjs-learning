import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
<<<<<<< Updated upstream
      <h1>process.env.NODE_ENV {process.env.NODE_ENV}</h1>
      <h1>process.env.CUSTOM {process.env.CUSTOM}</h1>
      <h1>process.env.NEXT_PUBLIC_CHECK_ENV {process.env.NEXT_PUBLIC_CHECK_ENV}</h1>
      <h1>process.env.NEXT_ENV {process.env.NEXT_ENV}</h1>
      <h1>process.env.HIEP_TEST_ENV {process.env.HIEP_TEST_ENV}</h1>
      Test config vars
=======
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href={{ pathname: "/message/1" }}>
          <a>Message 1</a>
        </Link>
        <Link href={{ pathname: "/book/1" }}>
          <a>Book 1</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
>>>>>>> Stashed changes
    </div>
  );
}
