import React from 'react'
import Icon from '../icon'
import "./index.scss"
import PropTypes from 'prop-types'

export default class InputNumber extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputNumber: '',
      precision: 0, // 精度
      maxDisabled: false,
      minDisabled: false
    };
  }
  componentDidMount () {
    const { value, defaultValue, step } = this.props

    this.setState({
      inputNumber: value || defaultValue,
      precision: ((step + '').split('.')[1] && (step + '').split('.')[1].length) || 0
    }, () => {
      this.setNumber()
    })
  }
  // 获取输入框的数字
  getNumber = () => {
    const { inputNumber } = this.state
    let numberArr = (inputNumber + '').match(/\d+(\.\d+)?/g) // 提取数字
    if (!numberArr) {
      return ''
    }
    return numberArr.reduce((preVal, curVal) => {
      return preVal + curVal
    })
  }
  setNumber = () => {
    const { max, min, formatter } = this.props
    const { onChange, precision } = this.state
    let maxDisabled = false
    let minDisabled = false
    let number = this.getNumber()
    if (!number) {
      this.setState({
        inputNumber: ''
      })
      return
    }
    console.log(number)
    number = (Math.floor(Number(number) * Math.pow(10, precision)) / Math.pow(10, precision)).toFixed(precision)

    if (number >= max) {
      number = max
      maxDisabled = true
    } else if (number <= min) {
      number = min
      minDisabled = true
    }
    this.setState({
      inputNumber: formatter(number),
      maxDisabled,
      minDisabled
    }, () => {
      onChange && onChange(number)
    })

  }
  // 输入框失焦监听
  handleBlur = () => {
    console.log('blur失焦')
    this.setNumber()
  }
  // 监听数值的改变
  onChange = () => {
    const { onChange } = this.props
    onChange && onChange(this.state.inputNumber)
  }
  // 监听文本输入
  onInput = (e) => {
    console.log('input输入')
    const { onChange } = this.props
    const value = e.target.value
    this.setState({
      inputNumber: value
    })
    onChange && onChange(value)
  }
  // 回车监听函数
  handleKeyup = (e) => {
    e.persist()
    const { onPressEnter } = this.props
    if (e.keyCode === 13) {
      onPressEnter && onPressEnter(Number(this.getNumber()))
    }
  }
  // 按一定步数增加
  increase = () => {
    console.log('increase 增加')
    const { step, max, min } = this.props;
    let number = this.getNumber()
    if (!number) {
      this.setState({
        inputNumber: min + step
      }, () => {
        this.setNumber()
      })
    } else {
      number = number - 0
      this.setState({
        inputNumber: number + step > max ? max : number + step
      }, () => {
        this.setNumber()
      })
    }
  }
  // 按一定步数减少
  decrease = () => {
    console.log('decrease 减少')
    const { step, min } = this.props;
    let number = this.getNumber()
    if (!number) {
      this.setState({
        inputNumber: min - step
      }, () => {
        this.setNumber()
      })
    } else {
      number = number - 0
      this.setState({
        inputNumber: number - step < min ? min : number - step
      }, () => {
        this.setNumber()
      })
    }
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
    const { maxDisabled, minDisabled } = this.state
    return (
      <label className='ling-inputnumber-wrapper'>
        {this.renderInput()}
        <span className='ling-input-wrapper-mark'></span>
        <div className="ling-number-control">
          <span onClick={this.increase} className={maxDisabled ? "ling-control-disabled" : ''}>
            <Icon class='up' />
          </span>
          <span onClick={this.decrease} className={minDisabled ? "ling-control-disabled" : ''}>
            <Icon class='down' />
          </span>
        </div>
      </label>
    )
  }
}

InputNumber.propTypes = {
  step: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onPressEnter: PropTypes.func,
  formatter: PropTypes.func
}

InputNumber.defaultProps = {
  step: 1,
  max: Number.MAX_SAFE_INTEGER,
  min: Number.MIN_SAFE_INTEGER,
  formatter: (val) => { return val }
}
