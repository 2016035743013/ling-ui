import React from 'react'
import Icon from '../icon'
import "./index.scss"
import PropTypes from 'prop-types'
import { accAdd, accSub } from './util';

export default class InputNumber extends React.Component {
  static defaultProps = {
    step: 1,
    controls: true,
    max: Infinity,
    min: 0
  }
  
  constructor(props) {
    super(props)
    this.state = {
      value: props.defaultValue
    };
  }
  handleFocus = (e) => {
    const { onFocus } = this.props
    onFocus && onFocus(e)
  }
  handleBlur = (e) => {
    let value = this.state.value
    if (this.isValid()) {
      value = Number(value);

      if (value > this.props.max) {
        value = Number(this.props.max);
      } else if (value < this.props.min) {
        value = Number(this.props.min);
      }
    } else {
      value = '';
    }

    this.setState({ value }, this.onChange);
  }
  onChange = () => {
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  onInput = (e) => {
    this.setState({ value: e.target.value }, () => {
      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.handleBlur();
      }, 750);
    });
  }

  increase = () => {
    const { step, max, disabled, min} = this.props;
    let { value, inputActive } = this.state;

    if (this.maxDisabled) {
      inputActive = false;
    } else {
      if (value + Number(step) > max || disabled) return;
      if (value + Number(step) < min ) value = min - Number(step);


      value = accAdd(step, value);
    }

    this.setState({ value, inputActive }, this.onChange);
  }

  decrease = () => {
    const { step, min, disabled, max } = this.props;
    let { value, inputActive } = this.state;

    if (this.minDisabled) {
      inputActive = false;
    } else {
      if (value - Number(step) < min || disabled) return;
      if (value - Number(step) > max) value = Number(max) + Number(step);
      value = accSub(value, step);
    }

    this.setState({ value, inputActive }, this.onChange);
  }
  isValid = () => {
    return this.state.value !== '' && !isNaN(Number(this.state.value));
  }
  get minDisabled() {
    return  !this.isValid || (this.state.value - Number(this.props.step) < this.props.min);
  }

  get maxDisabled() {
    return  !this.isValid || (this.state.value + Number(this.props.step) > this.props.max);
  }
  renderInput() {
    const { placeholder, maxLength, disabled, onChange, type, autoFocus } = this.props
    const { value } = this.state
    return (
      <input
        ref={this.inputRef}
        autoFocus={autoFocus}
        className="ling-input"
        type={type}
        placeholder={placeholder}
        onChange={this.onInput}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        value={value}
        maxLength={maxLength}
        disabled={disabled}
      />
    )
  }
  render() {
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