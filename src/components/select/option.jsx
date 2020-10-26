import React from 'react'
import PropTypes from 'prop-types'
import { classNames } from '../../common/common'
import { SelectContext } from './context'
class Option extends React.Component {
  constructor(props) {
    super(props)
  }
  parent () {
    return this.context.component;
  }
  render () {
    const { value, disabled } = this.props
    return (
      <SelectContext.Consumer>
        {
          ({ selectItem, value: selectValue }) => {
            return (
              <div
                className={classNames('ling-option-item', { 'ling-option-disabled': disabled }, { 'ling-option-selected': selectValue === value })} //selectValue === value 
                onClick={() => {
                  !disabled && selectItem && selectItem(this.props.children)
                }}
              >
                {this.props.children}
              </div>
            )
          }
        }
      </SelectContext.Consumer>
    )
  }
}
export default Option