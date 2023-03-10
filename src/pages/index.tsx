import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Landing from '@/components/Landing'

export default function Home() {
  return (
    <main>
      <Head>
        <title>JP Science Bowl</title>
      </Head>

      <Landing />
    </main>
  )
}
