import Head from 'next/head'
import styles from "@/styles/Contact.module.css"

export default function Contact() {
  return (
    <main>
      <Head>
        <title>JP Science Bowl - Contact Us</title>
      </Head>

      <div className={styles.container}>
      <h1>Contact Us</h1>
      <ul>
        <li>jpsciencebowl@gmail.com</li>
      </ul></div>
    </main>
  )
}
