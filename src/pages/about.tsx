import AboutInfo from '@/components/AboutInfo'
import AboutParagraph from '@/components/AboutParagraph'
import Head from 'next/head'

export default function About() {
  return (
    <main>
      <Head>
        <title>JP Science Bowl - About</title>
      </Head>

      <AboutParagraph />
      <AboutInfo />
    </main>
  )
}
