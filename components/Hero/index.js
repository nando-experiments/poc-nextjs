import React from 'react'
import styles from './Hero.styl'

const Hero = (props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        {props.children}
      </div>
    </div>
  )
}

export default Hero
