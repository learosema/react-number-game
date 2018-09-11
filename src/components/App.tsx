import * as React from 'react'
import { Component, Fragment } from 'react'
import Board from './Board'

export default class App extends Component {

  state = {
    tiles: [
      {key: 1, x: 2, y: 3, value: 1},
      {key: 2, x: 3, y: 1, value: 2}
    ]
  }

  render() {
    const { tiles } = this.state
    return (<Fragment>
      <header>
        <h1 className="test">react-number-game</h1>
      </header>
      <main>
        <Board tiles={tiles} />
      </main>
    </Fragment>)
  }
}