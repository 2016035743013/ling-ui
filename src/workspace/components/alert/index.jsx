import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import { classNames } from '../../common/common'
import './index.scss'
class Alert extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      messageType: {
        warning: '#faad14',
        success: '#67C23A',
        error: '#ff4d4f',
        info: '#909399'
      }
    }
  }
  close = () => {
    const { afterClose } = this.props
    this.setState({
      visible: false
    })
    afterClose && afterClose()
  }
  render () {
    const { visible, messageType } = this.state
    const { message, description, closable, type, closeText } = this.props
    return (
      <div
        className={classNames("ling-alert-wrapper", { 'ling-alert-close': !visible })}
        style={{ background: messageType[type] }}
      >
        <Icon class={type} style={description ? { fontSize: '22px' } : {}} />
        <div className="ling-alert-container">
          <div
            className={
              classNames('ling-alert-title', { 'ling-alert-title-bold': description })
            }
          >
            <span>{message}</span>
            {
              closable &&
              <span onClick={this.close}>
                {(closeText || <Icon class='close' />)}
              </span>
            }
          </div>
          {
            description &&
            <div className="ling-alert-description">
              {description}
            </div>
          }
        </div>
      </div >
    )
  }
}

Alert.propTypes = {
  closable: PropTypes.bool,
  type: PropTypes.string,
  description: PropTypes.string,
  afterClose: PropTypes.func,
  closeText: PropTypes.node,
  message: PropTypes.string
}
Alert.defaultProps = {
  closable: false,
  type: 'success',
  description: ''
}

export default Alert