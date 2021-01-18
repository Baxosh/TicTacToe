import React, { Component } from 'react'

// Styles
import styles from './TicTacToe.module.css'

const TicTacToe = (InnerComponent) => {
return class  extends Component {
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
      restartGame: false,
    }
  }

  handleClick = (item) => {
    let { elements, clickCounter, winX, win0 } = this.state
    const index = elements.findIndex((x) => x.id === item.id)
    let elemIdx = elements[index]

    if (elemIdx.value === '' && clickCounter % 2 !== 0) {
      elemIdx.value = 'x'
      clickCounter++
    } else if (elemIdx.value === '' && clickCounter % 2 === 0) {
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
    let { elements, clickCounter, winX, win0, restartGame } = this.state

    if (win0 || winX || clickCounter === 9 || restartGame === true) {
      elements.map((elem) => {
        elem.value = ''
        clickCounter = 0
        restartGame = false
        win0 = false
        winX = false
      })
    }
    this.setState({ elements, clickCounter, win0, winX, restartGame })
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
            {/* <div className={modalCenterCenter}></div> */}
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
        <InnerComponent shareState={this.props} />
      </div>
    )
  }
}}

export default TicTacToe