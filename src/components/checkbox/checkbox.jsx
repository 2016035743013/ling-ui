import React from 'react'
import './css/checkbox.scss'
import PropTypes from 'prop-types'

class CheckBox extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { value } = this.props
    return (
      <label className='ling-checkbox-wrapper'>
        <input className='ling-checkbox' type="checkbox"  value={value}/>
        <span className='ling-checkbox-container'></span>
        <span className="ling-checkbox-label">
          {this.props.children}
        </span>
      </label>
    )
  }
}

export default CheckBox