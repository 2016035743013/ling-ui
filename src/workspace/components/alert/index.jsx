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
      remove: true,
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
    this.timer = setTimeout(() => {
      this.setState({
        remove: false
      })
    }, 300)
    afterClose && afterClose()
  }
  componentWillUnmount () {
    clearTimeout(this.timer)
  }
  render () {
    const { visible, messageType, remove } = this.state
    const { message, description, closable, type, closeText, showIcon } = this.props
    return (
      remove &&
      <div
        className={classNames("ling-alert-wrapper", { 'ling-alert-close': !visible })}
        style={{ background: messageType[type] }}
      >
        {
          // 是否显示图标
          showIcon && <Icon class={type} style={description ? { fontSize: '22px' } : {}} />
        }
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

Alert.defaultProps = {
  type: 'info',
  description: ''
}//defaultend

Alert.propTypes = {
  closable: PropTypes.bool, //是否显示关闭按钮  end
  type: PropTypes.string,//警告提示内容end
  description: PropTypes.string, //警告提示的类型，可选值有success, error, warning, info end
  afterClose: PropTypes.func, //警告提示的辅助性文字介绍  end
  closeText: PropTypes.node, //关闭时触发的回调函数  end
  message: PropTypes.string, //自定义关闭按钮  end
  showIcon: PropTypes.bool, //是否显示辅助图标
}

export default Alert