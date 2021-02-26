import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>process.env.NODE_ENV {process.env.NODE_ENV}</h1>
      <h1>process.env.CUSTOM {process.env.CUSTOM}</h1>
      <h1>process.env.NEXT_PUBLIC_CHECK_ENV {process.env.NEXT_PUBLIC_CHECK_ENV}</h1>
      <h1>process.env.NEXT_ENV {process.env.NEXT_ENV}</h1>
      <h1>process.env.HIEP_TEST_ENV {process.env.HIEP_TEST_ENV}</h1>
      Test env
    </div>
  )
}
