import React from 'react'
import { classNames } from '../../common/common'
import { Consumer } from './context'
import './css/checkbox.scss'
import PropTypes from 'prop-types'

class CheckBox extends React.Component {
  constructor(props) {
    super(props)
  }
  toggleChecked = (func, e) => {
    const { value } = this.props
    const { onChange } = this.props
    e.persist()
    func && func(value, e)
    onChange && onChange(e.target.checked)
  }

  render () {
    const { value, disabled, checked } = this.props
    return (
      <Consumer>
        {
          (groupProps) => {
            const {
              groupDisabled,
              defaultValue,
              value: checkGroup,
              name,
              onGroupChange
            } = groupProps
            return (
              <label className='ling-checkbox-wrapper'>
                <input
                  className='ling-checkbox'
                  name={name}
                  disabled={disabled || groupDisabled}
                  type="checkbox"
                  checked={checked || (checkGroup && checkGroup.includes(value)) || (defaultValue && defaultValue.includes(value))}
                  onChange={(e) => {
                    const { onChange } = this.props
                    if (onGroupChange) {
                      this.toggleChecked(onGroupChange, e)
                    } else {
                      this.toggleChecked(onChange, e)
                    }
                  }}
                />

                {/* 水波纹 */}
                {
                  (checked || (checkGroup && checkGroup.includes(value)) || (defaultValue && defaultValue.includes(value))) && <span className="ling-checkbox-sport-circle"></span>
                }

                <span className='ling-checkbox-container'></span>
                <span className="ling-checkbox-label">
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