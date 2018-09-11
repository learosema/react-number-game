import * as React from 'react'
import { Component } from 'react'

export interface TileProps {
  x: number
  y: number
  value: number
}

export default class Tile extends Component<TileProps, any> {

  render() {
    const { x, y, value } = this.props
    return <div className="tile" style={{left: (x*20)+'%', top: (y * 20) + '%'}}><svg viewBox="0 0 32 32"><text x={8} y={30} fill='#000'>{value}</text></svg></div>
  }
  
}