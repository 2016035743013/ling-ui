import React from 'react'
import { classNames } from '../../common/common'
class OptionGroup extends React.Component {
  constructor(props) {
    super(props)
  } 
  render() {
    return (
      <div className={classNames('ling-optiongroup-wrapper')}>
        {this.props.children}
      </div>
    )
  }
}

export default OptionGroup