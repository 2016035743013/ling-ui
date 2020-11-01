import React from 'react'
import PropTypes from 'prop-types'
import { classNames } from '../../common/common'
import Icon from '../icon'
import './css/Toast.scss'
export default class Toast extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      remove: false
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        visible: true
      })
    }, 100);
    this.startTimer();
  }
  componentWillUnmount () {
    this.clearTimer();
  }
  clearTimer () {
    clearTimeout(this.timeout);
  }
  onClose () {
    this.clearTimer();
    this.setState({
      visible: false
    });
    setTimeout(() => {
      this.setState({
        remove: true
      })
      this.props.willUnmount();
      if (this.props.onClose instanceof Function) {
        this.props.onClose();
      }
    }, 500);
  }
  startTimer () {
    if (this.props.duration > 0) {
      this.timeout = setTimeout(() => {
        this.onClose();
      }, this.props.duration)
    }
  }
  render () {
    const { visible, remove } = this.state
    const { message, type } = this.props
    return (
      !remove &&
      <div
        className={
          classNames('ling-toast-wrapper', { 'ling-toast-wrapper-show': visible })
        }
        onMouseEnter={this.clearTimer.bind(this)}
        onMouseLeave={this.startTimer.bind(this)}
      >
        <Icon class={type} />
        <span>{message}</span>
      </div>
    )
  }
}

Toast.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'info', 'error', 'loading']),
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  duration: PropTypes.number,
  customClass: PropTypes.string,
  iconClass: PropTypes.string,
  onClose: PropTypes.func
}

Toast.defaultProps = {
  type: 'info',
  duration: 3000
}
