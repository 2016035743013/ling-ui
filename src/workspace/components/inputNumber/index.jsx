import React from 'react'
import Icon from '../icon'
import "./index.scss"
import PropTypes from 'prop-types'
import { accAdd, accSub } from './util';

export default class InputNumber extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputNumber: ''
    };
  }
  componentDidMount () {
    const { value, defaultValue } = this.props
    this.setState({
      inputNumber: value | defaultValue
    }, () => {
      this.handleBlur()
    })
  }
  // 输入框聚焦监听
  handleFocus = (e) => {
    const { onFocus } = this.props
    onFocus && onFocus(e)
  }
  // 输入框失焦监听
  handleBlur = () => {
    let inputNumber = this.state.inputNumber
    const { formatter } = this.props
    if (formatter) {
      this.setState({
        inputNumber: formatter(inputNumber + '')
      })
      return
    }
    if (this.isValid()) {
      inputNumber = Number(inputNumber);

      if (inputNumber > this.props.max) {
        inputNumber = Number(this.props.max);
      } else if (inputNumber < this.props.min) {
        inputNumber = Number(this.props.min);
      }
    } else {
      inputNumber = '';
    }
    this.setState({ inputNumber }, this.onChange);
  }
  // 
  onChange = () => {
    const { onChange } = this.props
    onChange && onChange(this.state.inputNumber)
  }
  // 监听文本输入
  onInput = (e) => {
    this.setState({ inputNumber: e.target.value }, () => {
      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.handleBlur();
      }, 500);
    });
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
    let { inputNumber, inputActive } = this.state;

    if (this.maxDisabled) {
      inputActive = false;
    } else {
      if (inputNumber + Number(step) > max || disabled) return;
      if (inputNumber + Number(step) < min) inputNumber = min - Number(step);

      inputNumber = accAdd(step, inputNumber);
    }

    // this.setState({ inputNumber, inputActive }, this.onChange);
    this.handleBlur()
  }
  // 按一定步数减少
  decrease = () => {
    const { step, min, disabled, max } = this.props;
    let { inputNumber, inputActive } = this.state;

    if (this.minDisabled) {
      inputActive = false;
    } else {
      if (inputNumber - Number(step) < min || disabled) return;
      if (inputNumber - Number(step) > max) inputNumber = Number(max) + Number(step);
      inputNumber = accSub(inputNumber, step);
    }

    // this.setState({ inputNumber, inputActive }, this.onChange);
    this.handleBlur()
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
        onFocus={this.handleFocus}
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
