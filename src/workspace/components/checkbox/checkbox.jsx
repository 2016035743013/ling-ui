import React from 'react'
import { classNames } from '../../common/common'
import { Consumer } from './context'
import './css/checkbox.scss'
import PropTypes from 'prop-types'

class CheckBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: false
    }
  }
  toggleChecked = (e) => {
    e.persist()
    const { onChange } = this.props
    this.setState(({ isChecked }) => {
      return {
        isChecked: !isChecked
      }
    }, () => {
      onChange && onChange(e)
    })
  }
  componentDidMount () {
    const { value, defaultChecked, checked } = this.props
    this.setState({
      isChecked: !!value || defaultChecked || checked
    })
  }
  render () {
    const { checked, defaultChecked, value, name, disabled } = this.props
    const { isChecked } = this.state
    return (
      <Consumer>
        {
          ({
            groupDisabled,
            defaultCheckGroup,
            checkGroup,
            name,
            
          }) => {
            return (
              <label className='ling-checkbox-wrapper'>
                <input 
                  className='ling-checkbox' 
                  name={name} 
                  disabled={disabled || groupDisabled} 
                  type="checkbox" 
                  checked={isChecked} 
                  onChange={(e) => {
                    this.toggleChecked(e)
                  }} 
                />

                {/* 水波纹 */}
                {isChecked && <span className="ling-checkbox-sport-circle"></span>}

                <span className='ling-checkbox-container'></span>
                <span className="ling-checkbox-label" >
                  {this.props.children}
                </span>
              </label>
            )
          }
        }
      </Consumer>
    )
  }
}

CheckBox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
}

export default CheckBox