import React, { Component } from 'react'

// Styles
import styles from './TicTacToe.module.css'

export default class TicTacToe extends Component {
  state = {
    elements: [
      { id: 1, value: '' }, // valueOne       ===    123  valueOneX: false, valueOne0: false
      { id: 2, value: '' }, // valueTwo        ===    456  valueTwoX: false, valueTwo0: false
      { id: 3, value: '' }, // valueThree   ===    789  valueThreeX: false, valueThree0: false
      { id: 4, value: '' }, // valueFour      ===    147  valueFourX: false, valueFour0: false
      { id: 5, value: '' }, // valueFive      ===    258  valueFiveX: false, valueFive0: false
      { id: 6, value: '' }, // valueSix        ===    369  valueSixX: false, valueSix0: false
      { id: 7, value: '' }, // valueSeven    ===    159  valueSevenX: false, valueSeven0: false
      { id: 8, value: '' }, // valueEight    ===    357  valueEightX: false, valueEight0: false
      { id: 9, value: '' }, // valueNine      ===    123  valueNineX: false, valueNine0: false
    ],
    clickCounter: 0,
    winX: false,
    win0: false,
  }

  handleClick = (item) => {
    let clickCounter = this.state.clickCounter
    let clickedNum = clickCounter++

    const elements = [...this.state.elements]
    const index = elements.findIndex((x) => x.id === item.id)

    elements[index] = { ...item }

    let elemIdx = elements[index]

    if (elemIdx.value === '' && clickedNum % 2 !== 0) {
      elemIdx.value = 'x'
    } else if (elemIdx.value === '' && clickedNum % 2 === 0) {
      elemIdx.value = '0'
    } else return

    this.setState({ elements, clickCounter })

    this.checkUpElem(elemIdx)

    this.setState({ elements })
  }

  checkUpElem = (elemIdx) => {
    let winX = this.state.winX
    let win0 = this.state.win0

    console.log(elemIdx)

    if (elemIdx.value === 'x' && (elemIdx.id === 1 && elemIdx.id === 2 && elemIdx.id === 3)) {
      winX = true
    }else console.log('Smile :)')
    
    this.setState({ winX, win0 })
  }

  render() {
    const { elements } = this.state
    return (
      <div className={styles.tictac__container}>
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
      </div>
    )
  }
}
