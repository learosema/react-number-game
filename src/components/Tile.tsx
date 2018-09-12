import * as React from 'react'
import { Component } from 'react'

export interface TileProps {
  x: number
  y: number
  value: number
}

export const TileColors = [
  'darkred', 'saddlebrown', 'red', 'tomato', 'darkorange', 'gold', 'yellowgreen', 'lightseagreen', 'teal', 'darkslategray'
]

export default class Tile extends Component<TileProps, any> {

  render() {
    const { x, y, value } = this.props
    return <div className="tile" style={{left: (x*20)+'%', top: (y * 20) + '%', background: TileColors[value % 10]}}><svg viewBox="0 0 32 32"><text x={7} y={28} fill='#000'>{value}</text></svg></div>
  }
  
}