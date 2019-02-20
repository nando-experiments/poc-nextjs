import './global.styl'
import Hero from '../components/Hero'
import styles from './Home.styl'

function Home () {
  return (
    <Hero>
      <h1 className={styles.h1}>
        Welcome to <a href="https://nextjs.org" target="_blank">next.js</a>!
      </h1>
    </Hero>
  )
}

export default Home
