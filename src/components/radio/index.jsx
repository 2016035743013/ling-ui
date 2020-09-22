import React from 'react'
import PropTypes from 'prop-types'
import "./index.scss"
class Radio extends React.Component {
  static propTypes = {
    autoFocus: PropTypes.bool,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.any
  }
  render () {
    return (
      <label className="ling-radio-wrapper">
        <span className="ling-radio ling-radio-checked">
          <input type="radio" className="ling-radio-input" value="" />
          <span className="ant-radio-inner">
          </span>
        </span>
        <span>Radio</span>
      </label>
    )
  }
}

export default Radio