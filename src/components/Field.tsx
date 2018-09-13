import * as React from 'react'
import { Component, Children } from 'react'

export interface FieldProps {
  key: number
  x: number
  y: number
  marked: boolean

  setStartMarker: Function
  setEndMarker: Function

}

export default class Field extends Component<FieldProps, any> {

  pointerDownHandler = (e: React.PointerEvent) => {
    this.props.setStartMarker(this.props.x, this.props.y)
  }

  pointerMoveHandler = (e: React.PointerEvent) => {
    this.props.setEndMarker(this.props.x, this.props.y)
  }

  pointerUpHandler = (e: React.PointerEvent) => {
    this.props.setEndMarker(this.props.x, this.props.y, true)
  }

  render() {
    const { x, y, marked } = this.props
    return <div className={'field' + (marked ? ' field-marked' : '')} data-x={y} data-y={x} style={{left: (x*20)+'%', top: (y * 20) + '%'}}
                onPointerUp={this.pointerUpHandler}
                onPointerMove={this.pointerMoveHandler}
                onPointerDown={this.pointerDownHandler}>

      {this.props.children}
    </div>
  } 
}