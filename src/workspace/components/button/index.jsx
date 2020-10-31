import React from 'react'
import './index.scss'
import { prefix, classNames } from '../../common/common.js'
import Icon from '../icon'
import PropTypes from 'prop-types'

class Button extends React.Component {
  handleClick = (e) => {
    const { onClick } = this.props
    onClick && onClick(e)
  }
  setBtnClass = () => {
    const { type, shape, disabled, size, ghost } = this.props
    let buttonType = prefix
    switch (type) {
      case 'primary': buttonType += 'primary'; break;
      case 'danger': buttonType += 'danger'; break;
      case 'link': buttonType += 'link'; break;
      case 'text': buttonType += 'text'; break;
      default: buttonType += 'default'; break;
    }
    return classNames({
      [buttonType]: !disabled,
      [prefix + shape]: shape,
      'ling-disabled': disabled,
      [prefix + size]: size,
      'ling-ghost': ghost
    })
  }
  render () {
    const { children, icon, loading, target, block } = this.props
    return (
      target
        ?
        <a href={target} className={this.setBtnClass()} onClick={this.handleClick} style={block ? { display: 'block' } : {}}>
          {
            loading ? <span className='ling-loading'> <Icon class="loading" /> </span> : ''
          }
          {icon && <span className="ling-button-icon">
            {icon}
          </span>}
          {children}
        </a>
        :
        <div className={this.setBtnClass()} onClick={this.handleClick} style={block ? { display: 'block' } : {}}>
          {
            loading ? <span className='ling-loading'> <Icon class="loading" /> </span> : ''
          }
          {icon && <span className={classNames({ 'ling-button-icon': children })}>
            {icon}
          </span>}
          {children}
        </div>
    )
  }
}
Button.propTypes = {
  block: PropTypes.bool, //将按钮宽度调整为其父宽度的选项 end
  disabled: PropTypes.bool, //按钮失效状态 end
  ghost: PropTypes.bool, //幽灵属性，使按钮背景透明 end
  href: PropTypes.string, //点击跳转的地址，指定此属性 button 的行为和 a 链接一致 end
  icon: PropTypes.node, //设置按钮的图标组件 end
  loading: PropTypes.bool, //设置按钮载入状态 end
  shape: PropTypes.string, //设置按钮形状，可选值为 circle / round 或者不设 end
  size: PropTypes.string, //设置按钮大小	large /  middle / small end
  target: PropTypes.string, //相当于 a 链接的 target 属性，href 存在时生效 end
  type: PropTypes.string, //设置按钮类型	primary / ghost / dashed / danger / link / text / default	 end
  onClick: PropTypes.func, //点击按钮时的回调	(event) => void	 
}

export default Button