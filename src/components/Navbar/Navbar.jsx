import React from 'react'

import urlImg from 'https://picsum.photos.200/50'

//Styles 
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.navbar__container}>
      <img className={styles.navbar__imgFirst} src={urlImg} alt="Person One"/>
      <h3 className={styles.versus}>VS</h3>
      <img className={styles.navbar__imgSecond} src={urlImg} alt="Person two"/>
    </div>
  )
}
