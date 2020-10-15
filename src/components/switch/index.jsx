import React from 'react'
import './index.scss'
export default class Switch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true
    }
  }
  // 按钮关闭和开启
  toggle = () => {
    const { disabled } = this.props
    if(disabled) {
      return
    }
    this.setState((state) => {
      return {
        active: !state.active
      }
    })
  }
  render() {
    const { active } = this.state
    const { disabled } = this.props
    return(
      <div className={['ling-switch-wrapper', active ? 'ling-switch-wrapper-active' : ''].join(' ').trim()} onClick={this.toggle}>
        <div className={['ling-switch-block', active ? 'ling-switch-blockmove' : ''].join(' ').trim()}></div>
        { disabled && <div className='ling-switch-mark'></div> }
      </div>
    )
  }
}