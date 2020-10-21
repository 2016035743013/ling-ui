import React from 'react'
import PropTypes from 'prop-types'
import { classNames } from '../../common/common'
class Option extends React.Component {
  constructor(props) {
    super(props)
  }
  selectItem = () => {
    console.log(this.context)
  }
  parent () {
    return this.context.component;
  }
  render () {
    const { vlaue, disabled } = this.props
    return (
      <div className={classNames('ling-option-item')} onClick={this.selectItem}>
        {this.props.children}
      </div>
    )
  }
}

export default Option