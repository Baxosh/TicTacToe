import React, { Component } from 'react'
import TicTacToe from './components/Game/TicTacToe'
import { Mute } from './components/Mute/Mute'
import Scores from './components/Scores/Scores'

//Styles
import styles from './App.module.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        
        <ToastContainer />

        <div className={styles.game__container}>
          <TicTacToe />
          <Scores />
        </div>

        <Mute />

      </div>
    )
  }
}
