// @flow
import React, { PureComponent } from 'react'

export default class Counter extends PureComponent {
  props: {
    counter: number,
    actions: Object,
  }

  handleIncrement() {
    this.props.actions.increment()
  }

  handleDecrement() {
    this.props.actions.decrement()
  }

  render() {
    return (
      <div className='counter-container'>
        <div className='counter-num-label'>{this.props.counter}</div>
        <div className='counter-even-label'>{this.props.counter % 2 === 0 ? 'even' : 'odd'}</div>
        <br />
        <div className='counter-buttons'>
          <button onClick={() => this.handleDecrement()}>-</button>
          <button onClick={() => this.handleIncrement()}>+</button>
        </div>
      </div>
    )
  }
}
