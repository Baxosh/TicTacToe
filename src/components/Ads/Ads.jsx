import React from 'react'
import styles from './Ads.module.css'

export const Ads = () => {
  const imgUrl = 'https://picsum.photos/250/800'
  return (
    <div className={styles.adsService}>
      <img src={imgUrl} width="200" height="600" alt="Advertisement" />
    </div>
  )
}
