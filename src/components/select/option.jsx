import React from 'react'
import { classNames } from '../../common/common'
class Option extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    const { vlaue, disabled } = this.props
    return (
      <div className={classNames('ling-option-wrapper')}>
        {this.props.children}
      </div>
    )
  }
}

export default Option