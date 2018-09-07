import * as React from 'react'
import { Component } from 'react'
import Tile, { TileProps } from './Tile'

export default function Board(props: any) {
  return (<div className="board"><Tile x={2} y={3} value={1} /></div>)
}