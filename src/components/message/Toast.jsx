import React from 'react'
import PropTypes from 'prop-types'
import './css/Toast.scss'
export default class Toast extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      remove: false,
      iconMap: {
        warning: 'icon-info',
        info: 'icon-info',
        success: 'icon-success',
        error: 'icon-error_3'
      }
    }
  }
  componentDidMount() {
    this.setState({
      visible: true
    })

    this.startTimer();
  }
  componentWillUnmount() {
    console.log('remove')
    this.stopTimer();
  }
  stopTimer() {
    clearTimeout(this.timeout);
  }
  onClose() {
    this.stopTimer();

    this.setState({
      visible: false
    });
    setTimeout(() => {
      this.setState({
        remove: true
      })
      this.props.willUnmount(); 
    }, 500);
  }
  startTimer() {
    if (this.props.duration > 0) {
      this.timeout = setTimeout(() => {
        this.onClose();
      }, this.props.duration)
    }
  }
  render() {
    const { visible, remove, iconMap } = this.state
    const { text, type } = this.props
    return (
      !remove && 
      <div 
        className={['ling-toast-wrapper', visible ? 'ling-toast-wrapper-show' : ''].join(' ').trim()} onMouseEnter={this.stopTimer.bind(this)} 
        onMouseLeave={this.startTimer.bind(this)}
      >
        <i className={['iconfont', iconMap[type]].join(' ').trim()}></i>
        <span>{text}</span>
      </div>
    )
  }
}

Toast.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'info', 'error']),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  duration: PropTypes.number,
  showClose: PropTypes.bool,
  customClass: PropTypes.string,
  iconClass: PropTypes.string
}

Toast.defaultProps = {
  type: 'info',
  duration: 3000,
  showClose: false
}
