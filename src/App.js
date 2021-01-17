import React, { Component } from 'react'
import TicTacToe from './components/Game/TicTacToe'
import { Ads } from './components/Ads/Ads'
import { Mute } from './components/Mute/Mute'
import { Scores } from './components/Scores/Scores'

//Styles
import styles from './App.module.css'

export default class App extends Component {
  render() {
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
}
