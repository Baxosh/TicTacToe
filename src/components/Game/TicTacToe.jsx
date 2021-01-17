import React, { Component } from 'react'
// Styles
import styles from './TicTacToe.module.css'

export default class TicTacToe extends Component {
  state = {
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
  }

  calculateWinner() {
    const elemCalc = [...this.state.elements]

    if (
      (elemCalc[0].value === '0' &&
        elemCalc[1].value === '0' &&
        elemCalc[2].value === '0') ||
      (elemCalc[3].value === '0' &&
        elemCalc[4].value === '0' &&
        elemCalc[5].value === '0')
    ) {
      return true
    }
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state && this.calculateWinner()) {
      this.setState({ win0: !this.state.win0 })
    }
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
              value={item.value}
              ref={this.myRef}
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
