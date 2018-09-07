import * as React from 'react'
import { Component, Fragment } from 'react'
import Button from './Button'
import Board from './Board'

export default class App extends Component {
  render() {
    return (<Fragment>
      <header>
        <h1 className="test">react-number-game</h1>
      </header>
      <main>
        <Board />
      </main>
      </Fragment>)
  }
}