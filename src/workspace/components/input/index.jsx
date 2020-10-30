import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import "./index.scss"

class Input extends React.PureComponent {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.state = {
      toggleShow: false
    }
  }
  static propTypes = {
    disabled: PropTypes.bool,
    maxLength: PropTypes.number,
    size: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    allowClear: PropTypes.bool,
    prefix: PropTypes.node,
    placeholder: PropTypes.string,
    type: PropTypes.string
  }
  static defaultProps = {
    type: 'text'
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
    const { placeholder, value, maxLength, disabled, onChange, type, autoFocus } = this.props
    return (
      <input
        ref={this.inputRef}
        autoFocus={autoFocus}
        className="ling-input"
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          onChange && onChange(e.target.value, e)
        }}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        value={value}
        maxLength={maxLength}
        disabled={disabled}
      />
    )
  }
  clearText = () => {
    const { onChange } = this.props
    if (onChange) {
      onChange('')
      this.inputRef.current.value = ''
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
      type
    } = this.props
    const { toggleShow } = this.state
    return (
      <div className="ling-input-wrapper">
        {
          prefix &&
          <span className='ling-input-prefix'>
            {prefix}
          </span>
        }
        {this.renderInput()}
        {/* {allowClear ? <Icon type='clear' /> : ''} */}

        { allowClear &&
          type !== 'password' &&
          <span onClick={this.clearText} >
            <Icon class='clear' />
          </span>
        }
        {
          type === 'password' &&
          <span className="ling-input-suffix" onClick={this.toggleType}>
            {toggleShow ? <Icon class='open-eye' /> : <Icon class='hide-eye' />}
          </span>
        }
        <span className='ling-input-wrapper-mark'></span>
      </div>
    )
  }
}

export default Input