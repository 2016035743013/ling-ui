import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import './index.scss'
class Alert extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      bgColor: {
        warning: 'rgb(250, 173,20)',
        success: '#67C23A',
        error: '#ff4d4f',
        info: '#909399'
      }
    }
  }
  close = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    const {visible, bgColor } = this.state
    const { title, description, showIcon, type } = this.props
    return (
      visible && <div className="ling-alert-wrapper" style={{background: bgColor[type]}}>
        <Icon class='warning' type={type} style={description ? {fontSize: '22px'} : {}} />
        <div className="ling-alert-container">
          <div className={['ling-alert-title', description ? 'ling-alert-title-bold' : ''].join(' ').trim()}>
            <span>{title}</span>
            {showIcon && <span onClick={this.close}> <Icon class='close' /></span>}
          </div>
          {
            description && 
            <div className="ling-alert-description">
              {description}
            </div>
          }
        </div>
      </div>
    )
  }
}

Alert.propTypes = {
  showIcon: PropTypes.bool,
  type: PropTypes.string,
  description: PropTypes.string
}
Alert.defaultProps = {
  showIcon: false,
  type: 'success',
  description: ''
}

export default Alert