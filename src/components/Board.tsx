import * as React from 'react'
import { Component } from 'react'
import Tile, { TileProps } from './Tile'

interface BoardProps {
  tiles: Array<TileProps>
}

export default class Board extends Component<BoardProps, any> {

  render() {
    const { tiles } = this.props
    return (<div className="board">{tiles.map(t => <Tile x={t.x} y={t.y} value={t.value} />)}</div>)
  }
}