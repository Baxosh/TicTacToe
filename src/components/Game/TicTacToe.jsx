import React, { Component } from 'react'
import { toast } from 'react-toastify'

// Styles
import styles from './TicTacToe.module.css'

export default class TicTacToe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elements: [
        { id: 1, value: '' },
        { id: 2, value: '' },
        { id: 3, value: '' },
        { id: 4, value: '' },
        { id: 5, value: '' },
        { id: 6, value: '' },
        { id: 7, value: '' },
        { id: 8, value: '' },
        { id: 9, value: '' },
      ],
      clickCounter: 0,
      winX: false,
      win0: false,
      restartGame: false
    }
  }

  handleClick = (item) => {
    let {elements, clickCounter, winX, win0} = this.state
    const index = elements.findIndex((x) => x.id === item.id)

    let elemIdx = elements[index]

    if (win0 || winX || clickCounter === 9) {
      elements.map((item) => {
        item.value = ''
        clickCounter = 0
        win0 = false
        winX = false
      })
    } else if (elemIdx.value === '' && clickCounter % 2 !== 0) {
      elemIdx.value = 'x'
      clickCounter++
    } else if (elemIdx.value === '' && clickCounter % 2 === 0) {
      elemIdx.value = '0'
      clickCounter++
    } else return

    this.setState({ elements, clickCounter, win0, winX })
  }

  calculateWinner() {
    const elemCalc = [...this.state.elements]
    const win0 = this.state
    const winX = this.state

    if (
      // Calculation winner
      (elemCalc[0].value === '0' &&
        elemCalc[1].value === '0' &&
        elemCalc[2].value === '0') ||
      (elemCalc[3].value === '0' &&
        elemCalc[4].value === '0' &&
        elemCalc[5].value === '0') ||
      (elemCalc[6].value === '0' &&
        elemCalc[7].value === '0' &&
        elemCalc[8].value === '0') ||
      (elemCalc[0].value === '0' &&
        elemCalc[3].value === '0' &&
        elemCalc[6].value === '0') ||
      (elemCalc[1].value === '0' &&
        elemCalc[4].value === '0' &&
        elemCalc[7].value === '0') ||
      (elemCalc[2].value === '0' &&
        elemCalc[5].value === '0' &&
        elemCalc[8].value === '0') ||
      (elemCalc[0].value === '0' &&
        elemCalc[4].value === '0' &&
        elemCalc[8].value === '0') ||
      (elemCalc[2].value === '0' &&
        elemCalc[4].value === '0' &&
        elemCalc[6].value === '0')
    ) {
      win0.win0 = true
    } else if (
      (elemCalc[0].value === 'x' &&
        elemCalc[1].value === 'x' &&
        elemCalc[2].value === 'x') ||
      (elemCalc[3].value === 'x' &&
        elemCalc[4].value === 'x' &&
        elemCalc[5].value === 'x') ||
      (elemCalc[6].value === 'x' &&
        elemCalc[7].value === 'x' &&
        elemCalc[8].value === 'x') ||
      (elemCalc[0].value === 'x' &&
        elemCalc[3].value === 'x' &&
        elemCalc[6].value === 'x') ||
      (elemCalc[1].value === 'x' &&
        elemCalc[4].value === 'x' &&
        elemCalc[7].value === 'x') ||
      (elemCalc[2].value === 'x' &&
        elemCalc[5].value === 'x' &&
        elemCalc[8].value === 'x') ||
      (elemCalc[0].value === 'x' &&
        elemCalc[4].value === 'x' &&
        elemCalc[8].value === 'x') ||
      (elemCalc[2].value === 'x' &&
        elemCalc[4].value === 'x' &&
        elemCalc[6].value === 'x')
    ) {
      winX.winX = true
    }
  }

  // restartGame() {
  // if (this.state.winX || this.state.win0) {
  //   return true
  // }
  // }

  // settingInterval() {
  //   const elements = [...this.state.elements]
  //   let clickCounter = this.state.clickCounter
  //   let winX = this.state.winX
  //   let win0 = this.state.win0

  //   if (win0 === false && winX === false && clickCounter === 9) {
  //     elements.map((item) => {
  //       item.value = ''
  //       this.setState({ elements, clickCounter: 0 })
  //     })
  //   }
  // }
   // this.settingInterval()
      // let timeOut = setInterval(() => {
      // }, 4000)
      // clearInterval(timeOut)

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.calculateWinner()
    }
  }

  render() {
    const { elements, restartGame } = this.state
    return (
      <div className={styles.tictac__container}>
        {restartGame ? (
          <>
            <div>Hello World !</div>
          </>
        ) : (
          <ul className={styles.tictac__container__unOrderList}>
            {elements.map((item) => (
              <li
                className={styles.listItems}
                key={item.id}
                onClick={() => this.handleClick(item)}
              >
                {item.value === 'x' ? (
                  <div className={styles.tic} key={item.id}>
                    <div className={styles.tac} key={item.id}></div>
                  </div>
                ) : item.value === '0' ? (
                  <div className={styles.toe} key={item.id}></div>
                ) : (
                  item.value && <div className={styles.disNone}></div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
