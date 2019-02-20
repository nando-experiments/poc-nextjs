import Head from 'next/head'
import Hero from '../components/Hero'

import './global.styl'
import styles from './Home.styl'

function Home () {
  return (
    <Hero>
      <Head>
        <title>Welcome to next.js!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className={styles.h1}>
        Welcome to <a href="https://nextjs.org" target="_blank">next.js</a>!
      </h1>
    </Hero>
  )
}

export default Home
