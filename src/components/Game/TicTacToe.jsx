import React, { Component } from 'react'

// Styles
import styles from './TicTacToe.module.css'

const TicTacToe = (InnerComponent) => {
  return class TicTacToeClass extends Component {
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
        numOfWinX: 0,
        numOfWin0: 0,
        draw: 0,
      }
    }

    handleClick = (item) => {
      let { elements, clickCounter, winX, win0 } = this.state
      const index = elements.findIndex((x) => x.id === item.id)
      let elemIdx = elements[index]

      if (winX) {
        console.log('Smile :)')
      }

      if (elemIdx.value === '' && clickCounter % 2 === 0) {
        elemIdx.value = 'x'
        clickCounter++
      } else if (elemIdx.value === '' && clickCounter % 2 !== 0) {
        elemIdx.value = '0'
        clickCounter++
      } else return

      this.setState({ elements, clickCounter, win0, winX }, () => {
        this.setState({})
      })
    }

    calculateWinner() {
      const elemCalc = [...this.state.elements]
      let win0 = this.state
      let winX = this.state
      let numOfWinX = this.state
      let numOfWin0 = this.state

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

    handleClickBox = () => {
      let {
        elements,
        clickCounter,
        winX,
        win0,
        numOfWin0,
        numOfWinX,
        draw,
      } = this.state

      if (winX) {
        numOfWinX++
      } else if (win0) {
        numOfWin0++
      } else if (clickCounter === 9) {
        draw++
      }

      if (win0 || winX || clickCounter === 9) {
        elements.map((elem) => {
          elem.value = ''
          clickCounter = 0
          win0 = false
          winX = false
        })
      }
      this.setState({
        elements,
        clickCounter,
        win0,
        winX,
        numOfWin0,
        numOfWinX,
        draw,
      })
    }

    componentDidUpdate(prevState) {
      if (prevState !== this.state) {
        this.calculateWinner()
      }
    }

    render() {
      const { elements, winX, win0, clickCounter } = this.state
      const {
        listItems,
        tic,
        tac,
        toe,
        disNone,
        modalBox,
        modalBtn,
        modalHeading,
        modalLeft,
        modalRight,
        modalCenterTop,
        modalCenterBottom,
        modalCenter,
        modalCenterCenter,
      } = styles
      return (
        <div className={styles.tictac__container}>
          <div
            className={
              winX
                ? modalBox
                : win0
                ? modalBox
                : clickCounter === 9
                ? modalBox
                : disNone
            }
          >
            <div className={modalLeft}></div>
            <div className={modalCenter}>
              <div className={modalCenterTop}>
                <button
                  className={modalBtn}
                  onClick={() => this.handleClickBox()}
                >
                  Restart Game
                </button>
                <h1 className={modalHeading}>
                  {winX
                    ? 'X is winner.'
                    : win0
                    ? '0 is winner.'
                    : clickCounter === 9
                    ? 'Draw !'
                    : 'Waiting for "Winner".'}
                </h1>
              </div>
              <div className={modalCenterCenter}></div>
              <div className={modalCenterBottom}></div>
            </div>
            <div className={modalRight}></div>
          </div>
          <ul className={styles.tictac__container__unOrderList}>
            {elements.map((item) => (
              <li
                className={listItems}
                key={item.id}
                onClick={() => this.handleClick(item)}
              >
                {item.value === 'x' ? (
                  <div className={tic} key={item.id}>
                    <div className={tac} key={item.id}></div>
                  </div>
                ) : item.value === '0' ? (
                  <div className={toe} key={item.id}></div>
                ) : (
                  item.value && <div className={disNone}></div>
                )}
              </li>
            ))}
          </ul>
          <InnerComponent shareState={this.state} />
        </div>
      )
    }
  }
}

export default TicTacToe
