import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import { classNames } from '.././../common/common'
import "./index.scss"

class Input extends React.PureComponent {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.state = {
      toggleShow: false,
      value: ''
    }
  }
  componentDidMount () {
    this.setState({
      value: this.props.value
    })
  }
  handleFocus = (e) => {
    const { onFocus } = this.props
    onFocus && onFocus(e)
  }
  handleBlur = (e) => {
    const { onBlur } = this.props
    onBlur && onBlur(e)
  }
  renderInput () {
    const { placeholder, maxLength, disabled, onChange, type, autoFocus, onPressEnter } = this.props
    const { value } = this.state
    return (
      <input
        ref={this.inputRef}
        autoFocus={autoFocus}
        className="ling-input"
        type={type}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        disabled={disabled}
        onChange={(e) => {
          this.setState({
            value: e.target.value
          })
          onChange && onChange(e.target.value)
        }}
        onKeyUp={e => {
          if (e.keyCode === 13) {
            onPressEnter && onPressEnter(e.target.value)
          }
        }}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      />
    )
  }
  clearText = () => {
    const { onChange } = this.props
    this.setState({
      value: ''
    })
    if (onChange) {
      onChange('')
    }
  }
  // 密码的现实和隐藏
  toggleType = () => {
    const { toggleShow } = this.state
    if (toggleShow) {
      this.inputRef.current.type = 'password'
    } else {
      this.inputRef.current.type = 'text'
    }
    this.setState((state) => {
      return {
        toggleShow: !state.toggleShow
      }
    })
  }
  render () {
    const {
      allowClear,
      prefix,
      suffix,
      type,
      size
    } = this.props
    const { toggleShow, value } = this.state
    return (
      <label className={
        classNames('ling-input-wrapper', size ? 'ling-input-' + size : '')}>
        {
          prefix
        }
        {this.renderInput()}

        { allowClear &&
          type !== 'password' &&
          value &&
          <Icon class='clear' onClick={this.clearText} />
        }
        {
          type === 'password' &&
          <span className="ling-input-eyes" onClick={this.toggleType}>
            {toggleShow ?
              <Icon class='open-eye' />
              :
              <Icon class='hide-eye' />}
          </span>
        }
        {
          suffix
        }
        <span className='ling-input-wrapper-mark'></span>
      </label>
    )
  }
}

Input.propTypes = {
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  size: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  allowClear: PropTypes.bool,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onPressEnter: PropTypes.func
}
Input.defaultProps = {
  type: 'text',
  value: ''
}
export default Input