import React from 'react'
import TicTacToe from './components/TicTacToe'
import {Ads} from './components/Ads'
import {Mute} from './components/Mute'
import { Scores } from './components/Scores'

//Styles
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <Ads />
      <div className={styles.game__container}>
        <TicTacToe />
        <Scores />
      </div>
      <Ads />
      <Mute />
    </div>
  )
}

export default App
