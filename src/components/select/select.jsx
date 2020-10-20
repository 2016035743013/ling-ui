import React from 'react'
import Icon from '../icon'
import './index.scss'

export default class Select extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    const { defaultValue, style } = this.props
    return (
      <div className="ling-select-wrapper">
        <div className="ling-select-input" style={style}>
          {/* <input type="text"/> */}
          <div className="ling-select-text">{defaultValue}</div>
          <Icon class=" " />
        </div>
        {this.props.children}
      </div>
    )
  }
}