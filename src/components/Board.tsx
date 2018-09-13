import * as React from 'react'
import { Component } from 'react'
import Tile, { TileProps } from './Tile'
import Field, { FieldProps } from './Field'

interface BoardProps {
  tiles: Array<TileProps>
}

const NUM_ROWS : number = 5
const NUM_COLS : number = 5


export default class Board extends Component<BoardProps, any> {

  state = {
    fields: Array(NUM_ROWS * NUM_COLS).fill(0).map((f,i) => ({
      key: i,
      x: (i % NUM_COLS),
      y: (i / NUM_COLS) |0,
      marked: false
    })),

    x1: -1,
    y1: -1,
    x2: -1,
    y2: -1
  }

  _clearMarks () {
    this.state.fields.forEach(f => {
      f.marked = false
    })
  }

  _updateMarks () {
    const {x1, y1, x2, y2, fields} = this.state
    this._clearMarks()
    if (x1 > -1) {
      fields[y1 * NUM_COLS + x1].marked = true
    }

    if (x2 > -1) {
      fields[y2 * NUM_COLS + x2].marked = true
    }
    if (x1 > -1 && y1 > -1 && x2 > -1 && y2 > -1) {
      const xDir = x2 > x1 ? 1 : -1
      const yDir = y2 > y1 ? 1 : -1
      for (let x = x1; x !== x2; x += xDir) {
        fields[y1 * NUM_COLS + x].marked = true
      }
      for (let y = y1; y !== y2; y += yDir) {
        fields[y * NUM_COLS + x2].marked = true
      }
    }
    
    this.setState({fields})
  }

  setStartMarker = (x,y) => {
    console.log("From: ", x, y)
    this.state.x1 = x
    this.state.y1 = y
    this._updateMarks()
  }

  setEndMarker = (x,y, up) => {
    this.state.x2 = x
    this.state.y2 = y
    
    if (up) {
      console.log("Execute move to ", x,y)
      this.state.x1 = -1
      this.state.y1 = -1
      this.state.x2 = -1
      this.state.y2 = -1
    }

    this._updateMarks()
  }


  

  render() {
    const { tiles } = this.props
    return (<div className="board">
      {this.state.fields.map(f => <Field key={f.key} 
                                         x={f.x}
                                         y={f.y}
                                         marked={f.marked}
                                         setStartMarker={this.setStartMarker}
                                         setEndMarker={this.setEndMarker} />)}
      {tiles.map(t => <Tile key={t.key} x={t.x} y={t.y} value={t.value} />)}
    </div>)
  }
}