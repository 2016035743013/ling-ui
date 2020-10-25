import React from 'react'
import Icon from '../icon'
import PropTypes from 'prop-types'
import { ClickOutside } from '../../tools'
import { classNames } from '../../common/common'
import { SelectContext } from './context'
import './index.scss'

class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      isShow: false
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
    if (this.state.isShow) {
      this.toggleOptions()
    }
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleFocus = (e) => {
    // this.setState({
    //   isShow: true
    // })
  }
  toggleOptions = (e) => {
    this.setState((state) => {
      return {
        isShow: !state.isShow
      }
    })
  }
  // 清空文本
  clearText = (e) => {
    e.stopPropagation()
    e.cancelBubble = true
    this.state.value && this.setState({
      value: ''
    })
  }

  selectItem = (value) => {
    // console.log(value)
    this.setState({
      value
    })
  }
  render () {
    const { isShow, value } = this.state
    const { defaultValue, style, allowClear } = this.props
    return (
      <div className="ling-select-wrapper">
        <div
          className="ling-select-input"
          style={style}
          onClick={this.toggleOptions}
        >
          <input type="text" value={value} onChange={this.handleChange} onFocus={this.handleFocus} />
          {/* <div className="ling-select-text">{value}</div> */}
          <span className={classNames({ 'allow-clear': allowClear })} >
            <Icon class="down" />
            <Icon class="clear" onClick={this.clearText} />
          </span>
        </div>
        <div
          className={classNames('ling-select-options', { 'ling-select-options-show': isShow })}
        >
          <SelectContext.Provider value={{ selectItem: this.selectItem }}>
            {this.props.children}
          </SelectContext.Provider>
        </div>
      </div>
    )
  }
}


export default ClickOutside(Select)