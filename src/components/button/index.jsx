import React from 'react'
import './index.scss'
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
  render () {
    const { type, children, shape, icon, disabled } = this.props 
    let buttonType = null
    switch (type) {
      case 'primary': buttonType = 'primary'; break;
      case 'ghost': buttonType = 'ghost'; break;
      case 'dashed': buttonType = 'dashed'; break;
      case 'danger': buttonType = 'danger'; break;
      case 'link': buttonType = 'link'; break;
      case 'text': buttonType = 'text'; break;
      default:  buttonType = 'default'; break;
    }
    return (
      <div className={[buttonType, shape, disabled ? 'disabled' : ''].join(' ')}>
        { icon }{ children }
      </div>
    )
  }
}

export default Button