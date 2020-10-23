import React from 'react'
import Icon from '../icon'
import PropTypes from 'prop-types'
import { ClickOutside } from '../../tools'
import { classNames } from '../../common/common'
import './index.scss'

class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  componentDidMount () {
    const { defaultValue } = this.props
    this.setState({
      value: defaultValue
    })
  }
  // 点击select之外触发的事件
  handleClickOutside = () => {
    console.log('触发点击')
  }
  render () {
    const { defaultValue, style, allowClear } = this.props
    return (
      <div className="ling-select-wrapper">
        <div className="ling-select-input" style={style}>
          {/* <input type="text" value={defaultValue}/> */}
          <div className="ling-select-text">{defaultValue}</div>
          <span className={classNames({ 'allow-clear': allowClear })}>
            <Icon class="down" />
            <Icon class="clear" />
          </span>
        </div>
        <div className='ling-select-options'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Select.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.number]),
  allowClear: PropTypes.bool
}


export default ClickOutside(Select)