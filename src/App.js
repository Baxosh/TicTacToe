import React, { Component } from 'react'
import TicTacToe from './components/Game/TicTacToe'
import { Ads } from './components/Ads/Ads'
import { Mute } from './components/Mute/Mute'
import Scores from './components/Scores/Scores'

//Styles
import styles from './App.module.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default class App extends Component {
  render() {
    // const ScoresHOC = TicTacToe(Scores)
    return (
      <div className={styles.container}>
        <ToastContainer />
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
