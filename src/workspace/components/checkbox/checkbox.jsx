import React from 'react'
import { classNames } from '../../common/common'
import './css/checkbox.scss'
import PropTypes from 'prop-types'

class CheckBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: false
    }
  }
  toggleChecked = () => {
    this.setState(({ isChecked }) => {
      return {
        isChecked: !isChecked
      }
    })
  }
  render () {
    const { value } = this.props
    const { isChecked } = this.state
    return (
      <label className='ling-checkbox-wrapper'>
        <input className='ling-checkbox' type="checkbox" value={value} />

        {/* 水波纹 */}
        {isChecked && <span className="ling-checkbox-sport-circle"></span>}
        
        <span className='ling-checkbox-container'></span>
        <span className="ling-checkbox-label" onClick={this.toggleChecked}>
          {this.props.children}
        </span>
      </label>
    )
  }
}

export default CheckBox