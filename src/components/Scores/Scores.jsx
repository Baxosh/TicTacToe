import React, { useState, useEffect } from 'react'
import TicTacToe from '../Game/TicTacToe'

// Styles
import styles from './Scores.module.css'

const Scores = ({ shareState }) => {
  const { numOfWinX, numOfWin0, draw} = shareState
  return (
    <div className={styles.scores__container}>
      <div className={styles.scores__box}>
        <p>Player-(X)</p>
        <h2>{numOfWinX ?? '0'}</h2>
      </div>
      <div className={styles.scores__box}>
        <p>Tie</p>
        <h2>{draw ?? '0'}</h2>
      </div>
      <div className={styles.scores__box}>
        <p>Computer-(0)</p>
        <h2>{numOfWin0 ?? '0'}</h2>
      </div>
    </div>
  )
}

export default TicTacToe(Scores)
