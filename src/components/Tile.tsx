import * as React from 'react'

export interface TileProps {
  x: number
  y: number
  value: number
}

export default function Tile(props : TileProps) {
  const { x, y, value } = props
  return <div className="board__tile">{value}</div>
}