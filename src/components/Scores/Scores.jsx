import React from 'react'
import styles from './Scores.module.css'
import TicTacToe from '../Game/TicTacToe'

const Scores = (props) => {
  console.log(props)
  return (
    <div className={styles.scores__container}>
      <div className={styles.scores__box}>
        <p>Player-(X)</p>
        <h2>0</h2>
      </div>
      <div className={styles.scores__box}>
        <p>Tie</p>
        <h2>0</h2>
      </div>
      <div className={styles.scores__box}>
        <p>Computer-(0)</p>
        <h2>0</h2>
      </div>
    </div>
  )
}

export default TicTacToe(Scores)