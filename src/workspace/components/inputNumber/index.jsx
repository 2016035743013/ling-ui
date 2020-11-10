import React from 'react'
import Icon from '../icon'
import "./index.scss"
import PropTypes from 'prop-types'
import { accAdd, accSub } from './util';

export default class InputNumber extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputNumber: '',
      formatNumber: ''
    };
  }
  componentDidMount () {
    const { value, defaultValue } = this.props
    this.setState({
      inputNumber: value | defaultValue
    })
  }
  // 输入框失焦监听
  handleBlur = () => {
    let inputNumber = this.state.inputNumber + ''
    const value = inputNumber.match(/\d+/g)
    let number = ''
    const { formatter, onChange, min, max } = this.props
    if (!value) {
      return
    }
    value.forEach(val => {
      number += val
    })
    if (formatter) {
      this.setState({
        inputNumber: formatter(Number(number))
      })
      onChange && onChange(Number(number))
    } else {
      if (!isNaN(Number(number))) {
        if (number > max) {
          number = max
        } else if (number < min) {
          number = min
        }
        this.setState({
          inputNumber: number
        }, () => {
          this.onChange()
        })
      } else {
        this.setState({
          inputNumber: ''
        }, () => {
          this.onChange()
        })
      }
    }
  }
  // 监听数值的改变
  onChange = () => {
    const { onChange } = this.props
    onChange && onChange(this.state.inputNumber)
  }
  // 监听文本输入
  onInput = (e) => {
    const value = e.target.value.match(/\d+/g)
    let number = ''
    const { formatter, onChange } = this.props
    if (!value) {
      return
    }
    value.forEach(val => {
      number += val
    })
    if (formatter) {
      this.setState({
        inputNumber: formatter(Number(number))
      })
      onChange && onChange(Number(number))
    } else {
      this.setState({
        inputNumber: number
      })
      onChange && onChange(number)
    }
  }
  // 回车监听函数
  handleKeyup = (e) => {
    e.persist()
    const { onPressEnter } = this.props
    if (e.keyCode === 13) {
      onPressEnter && onPressEnter(this.state.inputNumber)
    }
  }
  // 按一定步数增加
  increase = () => {
    const { step, max, disabled, min } = this.props;
    let { inputNumber } = this.state;

    if (inputNumber + Number(step) > max || disabled) return;

    if (inputNumber + Number(step) < min) {
      inputNumber = min - Number(step)
    }

    inputNumber = accAdd(step, inputNumber);
    this.setState({
      inputNumber
    })
    this.onChange()
  }
  // 按一定步数减少
  decrease = () => {
    const { step, min, disabled, max } = this.props;
    let { inputNumber } = this.state;

    if (inputNumber - Number(step) < min || disabled)
      return;

    if (inputNumber - Number(step) > max) {
      inputNumber = Number(max) + Number(step);
    }

    inputNumber = accSub(inputNumber, step);
    this.setState({
      inputNumber
    })
    this.onChange()
  }
  // 
  isValid = () => {
    return this.state.inputNumber !== '' && !isNaN(Number(this.state.inputNumber));
  }
  // 是否禁用 减
  get minDisabled () {
    return !this.isValid || (this.state.inputNumber - Number(this.props.step) < this.props.min);
  }
  // 是否禁用 加
  get maxDisabled () {
    return !this.isValid || (this.state.inputNumber + Number(this.props.step) > this.props.max);
  }
  renderInput () {
    const { placeholder, maxLength, disabled, autoFocus } = this.props
    const { inputNumber } = this.state
    return (
      <input
        ref={this.inputRef}
        autoFocus={autoFocus}
        className="ling-input"
        type='text'
        placeholder={placeholder}
        onChange={this.onInput}
        onBlur={this.handleBlur}
        onKeyUp={this.handleKeyup}
        value={inputNumber}
        maxLength={maxLength}
        disabled={disabled}
      />
    )
  }
  render () {
    return (
      <div className='ling-inputnumber-wrapper'>
        {this.renderInput()}
        <span className='ling-input-wrapper-mark'></span>
        <div className="ling-number-control">
          <span onClick={this.increase} className={this.maxDisabled ? "ling-control-disabled" : ''}>
            <Icon class='up' />
          </span>
          <span onClick={this.decrease} className={this.minDisabled ? "ling-control-disabled" : ''}>
            <Icon class='down' />
          </span>
        </div>
      </div>
    )
  }
}

InputNumber.propTypes = {
  step: PropTypes.number,
  controls: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  defaultValue: PropTypes.number,
  onFocus: PropTypes.func,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onPressEnter: PropTypes.func,
  formatter: PropTypes.func
}

InputNumber.defaultProps = {
  step: 1,
  controls: true,
  max: Number.MAX_SAFE_INTEGER,
  min: Number.MIN_SAFE_INTEGER
}
