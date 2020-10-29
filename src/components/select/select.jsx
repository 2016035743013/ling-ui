import React from 'react'
import Icon from '../icon'
import PropTypes from 'prop-types'
import { ClickOutside } from '../tools'
import { classNames } from '../common/common'
import { SelectContext } from './context'
import './index.scss'

class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      isShow: false
    }
    this.inputRef = React.createRef()
  }

  componentDidMount () {
    const { defaultValue, autofocus } = this.props
    this.setState({
      value: defaultValue
    })
    if (autofocus) {
      this.inputRef.current.focus()
    }
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
    !this.props.disabled && this.setState((state) => {
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
      value,
      isShow: false
    })
  }
  render () {
    const { isShow, value } = this.state
    const { style, allowClear, disabled } = this.props
    return (
      <div className="ling-select-wrapper">
        <div
          className={classNames("ling-select-input", { 'ling-select-focus': isShow && !disabled }, { 'ling-select-disabled': disabled })}
          style={style}
          onClick={this.toggleOptions}
        >
          <input type="text" value={value} onChange={this.handleChange} onFocus={this.handleFocus} ref={this.inputRef} />
          {/* <div className="ling-select-text">{value}</div> */}
          <span className={classNames({ 'allow-clear': allowClear })} >
            <Icon class="down" />
            <Icon class="clear" onClick={this.clearText} />
          </span>
        </div>
        <div
          className={classNames('ling-select-options', { 'ling-select-options-show': isShow })}
        >
          <SelectContext.Provider value={{ selectItem: this.selectItem, value }}>
            {this.props.children}
          </SelectContext.Provider>
        </div>
      </div>
    )
  }
}
Select.propTypes = {
  allowClear: PropTypes.bool,
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
}

export default ClickOutside(Select)