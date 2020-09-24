import React from 'react'
import PropTypes from 'prop-types'
import { RadioContext } from './context'
import Son from './son'
import "./index.scss"

const MyContext = React.createContext('test')
class Radio extends React.Component {
  static propTypes = {
    autoFocus: PropTypes.bool,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.any
  }
  render () {
    const { children, disabled, autoFocus, defaultChecked, value } = this.props
    return (
      <MyContext.Provider value={{test: 'test'}}>
        <label className="ling-radio-wrapper">
          <span className="ling-radio">
            <input type="radio" className="ling-radio-input" value="" />
            <span className={['ling-radio-inner', 'ling-radio-inner-disabled'].join(' ')}></span>
            <span className={['ling-radio-border', 'ling-radio-border-disabled'].join(' ')}></span>
          </span>
          <span className={['ling-radio-text', 'ling-radio-text-disabled'].join(' ')} >{value}{children}</span>
        </label>
        <Son />
      </MyContext.Provider>
    )
  }
}

export default Radio