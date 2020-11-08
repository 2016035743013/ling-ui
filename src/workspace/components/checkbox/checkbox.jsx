import React from 'react'
import { classNames } from '../../common/common'
import { Consumer } from './context'
import './css/checkbox.scss'
import PropTypes from 'prop-types'

class CheckBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowWater: false
    }
    this.inputRef = React.createRef()
  }
  // 控制水波纹显示
  controlCheck () {
    this.setState({
      isShowWater: this.inputRef.current.checked
    })
  }

  render () {
    const { isShowWater } = this.state
    const { value, disabled, checked, activeValue, inActiveValue } = this.props
    return (
      <Consumer>
        {
          (groupProps = {}) => {
            const {
              disabled: groupDisabled,
              value: checkGroup,
              onGroupChange,
              name
            } = groupProps

            if (Object.keys(groupProps).length === 0) {
              return (
                <label className='ling-checkbox-wrapper'>
                  <input
                    className='ling-checkbox'
                    disabled={disabled}
                    type="checkbox"
                    ref={this.inputRef}
                    checked={
                      (checked === activeValue && checked !== inActiveValue) || (value === activeValue && value !== inActiveValue)
                    }
                    onChange={(e) => {
                      e.persist()
                      const { onChange } = this.props
                      onChange && onChange(e.target.checked ? activeValue : inActiveValue, e)
                      this.controlCheck()
                    }}
                  />

                  {/* 水波纹 */}
                  {
                    isShowWater && <span className="ling-checkbox-sport-circle"></span>
                  }

                  <span className='ling-checkbox-container'></span>
                  <span className="ling-checkbox-label">
                    {this.props.children}
                  </span>
                </label>
              )
            } else {
              return (
                <label className='ling-checkbox-wrapper'>
                  <input
                    className='ling-checkbox'
                    name={name}
                    disabled={groupDisabled}
                    type="checkbox"
                    ref={this.inputRef}
                    checked={checkGroup.indexOf(value) != -1}
                    value={value}
                    onChange={(e) => {
                      onGroupChange(e, value)
                      this.controlCheck()
                    }}
                  />

                  {/* 水波纹 */}
                  {
                    isShowWater && <span className="ling-checkbox-sport-circle"></span>
                  }

                  <span className='ling-checkbox-container'></span>
                  <span className="ling-checkbox-label">
                    {this.props.children}
                  </span>
                </label>
              )
            }
          }
        }
      </Consumer>
    )
  }
}

CheckBox.defaultProps = {
  activeValue: true,
  inActiveValue: false
}

CheckBox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  activeValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  inActiveValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
}


export default CheckBox