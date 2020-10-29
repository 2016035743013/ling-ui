import React from 'react'
import { classNames } from '../common/common'
import "./index.scss"
class OptionGroup extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    const { label } = this.props
    return (
      <div className={classNames('ling-group-wrapper')}>
        <div className="ling-group-label">{label}</div>
        <div className="ling-group">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default OptionGroup