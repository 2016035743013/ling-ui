import React from 'react'
import './index.scss'
import { prefix } from '../../common/common.js'
import PropTypes from 'prop-types'

class Button extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    block: PropTypes.bool,
    danger: PropTypes.bool,
    disabled: PropTypes.bool,
    ghost: PropTypes.bool,
    href: PropTypes.string,
    htmlType: PropTypes.string,
    icon: PropTypes.node,
    loading: PropTypes.bool,
    shape: PropTypes.string,
    size: PropTypes.string,
    target: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
  }
  handleClick = (e) => {
    this.props.onClick(e)
  }
  setBtnClass = () => {
    const { type, shape, disabled, size, ghost } = this.props 
    let buttonType = prefix
    switch (type) {
      case 'primary': buttonType += 'primary'; break;
      case 'dashed': buttonType += 'dashed'; break;
      case 'danger': buttonType += 'danger'; break;
      case 'link': buttonType += 'link'; break;
      case 'text': buttonType += 'text'; break;
      default:  buttonType += 'default'; break;
    }
    return [ disabled ? '' : buttonType, shape ? prefix + shape : '', disabled ? 'ling-disabled' : '', size ? prefix + size : '', ghost ? 'ling-ghost' : ''].join(' ').trim()
  }
  render () {
    const { children,icon, loading } = this.props 
    return (
      <div className={this.setBtnClass()} onClick={this.handleClick}>
        {
          loading ? <span className='ling-loading'> <i className='iconfont'>&#xe6cd;</i> </span> : ''
        }
        { icon }{ children }
      </div>
    )
  }
}

export default Button