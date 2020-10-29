import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
export default class Switch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true
    }
  }
  componentDidMount() {
    const { value, onValue, offValue } = this.props
    if (value || value === onValue) {
      this.setState({
        active: true
      })
    } else {
      this.setState({
        active: false
      })
    }
  }
  // 按钮关闭和开启
  onChange = () => {
    const { disabled, onValue, offValue, onChange } = this.props
    const { active } = this.state
    if(disabled) {
      return
    }
    if (active) { // 关闭
      onChange(offValue)
    } else { // 开启
      onChange(onValue)
    }
    this.setState((state) => {
      return {
        active: !state.active
      }
    })
  }
  render() {
    const { active } = this.state
    const { disabled, activeColor, inactiveColor } = this.props
    return(
      <div 
        className={['ling-switch-wrapper', active ? 'ling-switch-wrapper-active' : ''].join(' ').trim()} onClick={this.onChange}
        style={{background: !active ? inactiveColor ? inactiveColor : '#dcdfe6' : activeColor ? activeColor : '#1890ff'}}
      >
        <div 
          className={['ling-switch-block', active ? 'ling-switch-blockmove' : ''].join(' ').trim()}
        >
        </div>
        { disabled && <div className='ling-switch-mark'></div> }
      </div>
    )
  }
}

Switch.propTypes = {
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
  onValue: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  offValue: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func
}

Switch.defaultProps = {
  value: false,
  onValue: true,
  offValue: false
}