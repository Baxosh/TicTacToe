import React from 'react'
import styles from './Mute.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp} from '@fortawesome/free-solid-svg-icons'

export const Mute = () => {
  return (
    <div className={styles.mute}>
      <FontAwesomeIcon icon={faVolumeUp} size="xl" />{' '}
    </div>
  )
}
