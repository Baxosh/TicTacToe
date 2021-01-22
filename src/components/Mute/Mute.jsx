import React, { useState } from 'react'
import styles from './Mute.module.css'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons'

export const Mute = () => {
  const [volume, setVolume] = useState(false)

  return (
    <div className={styles.mute} onClick={() => setVolume(!volume)}>
      <FontAwesomeIcon icon={volume ? faVolumeMute : faVolumeUp} size="xl" />
    </div>
  )
}
