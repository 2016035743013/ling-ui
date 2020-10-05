import React from 'react'
import PropTypes from 'prop-types'
import { RadioContext } from './context'
import "./index.scss"

class Radio extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red'
    }
  }
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.any
  }
  render () {
    const { children, disabled, value, checked } = this.props
    return (
      <label className="ling-radio-wrapper" >
      <RadioContext.Consumer>
        {(obj) => {
          const {checkedValue, onChange} = obj || {}
          return (
            <>
            
              <input type="radio" className='ling-radio' checked={checkedValue ? value === checkedValue ? true : false : checked} disabled={disabled ? true : false}  value={value} onChange={(e) => {
                onChange && onChange(e.target.value, e)
              }}/>
              <span className='ling-radio-btn'></span>
              <span className='ling-radio-text'>{children}</span>
            </>
          )
        }}
      </RadioContext.Consumer>
      </label>
    )
  }
}

export default Radio