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
    const { vlaue, disabled } = this.props
    return (
      <SelectContext.Consumer>
        {
          ({ selectItem }) => {
            return (
              <div
                className={classNames('ling-option-item')}
                onClick={() => {
                  selectItem && selectItem(this.props.children)
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