import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Damián Ricobelli - Frontend Engineer</title>
        <meta
          name="description"
          content="I'm a Frontend Developer with more than 5 years of experience, focused on React, Next JS and development of libraries for the Styled System of products. Currently working on GuruHotel, using Next JS and GraphQL as core."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
