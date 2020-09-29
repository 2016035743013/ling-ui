import React from 'react'
import PropTypes from 'prop-types'
import { RadioContext } from './context'
import Son from './son'
import "./index.scss"

class Radio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red'
    }
  }
  static propTypes = {
    autoFocus: PropTypes.bool,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.any
  }
  changeColor = () => {
    this.setState((state) => {
      return {
        color: 'blue'
      }
    }, () => {
      console.log('changecolor', this.state)
    })
  }
  render () {
    const { children, disabled, autoFocus, defaultChecked, value } = this.props
    return (
      <RadioContext.Provider value={{...this.state, changeColor: this.changeColor}}>
        {/* <label className="ling-radio-wrapper">
          <span className="ling-radio">
            <input type="radio"  className="ling-radio-input" value="" />
            <span className={['ling-radio-inner', 'ling-radio-inner-disabled'].join(' ')}></span>
            <span className={['ling-radio-border', 'ling-radio-border-disabled'].join(' ')}></span>
          </span>
          <span className={['ling-radio-text', 'ling-radio-text-disabled'].join(' ')} >{value}{children}</span>
        </label>
        <Son /> */} 
        <label className="ling-radio-wrapper">
          {/* disabled checked */}
          <input type="radio" className='ling-radio' disabled={disabled} checked={defaultChecked} />
          <span className='ling-radio-btn'></span>
          <span className='ling-radio-text'>{children}</span>
        </label>
      </RadioContext.Provider>
    )
  }
}

export default Radio