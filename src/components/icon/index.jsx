import React from 'react'
import './index.scss'
export default class Icon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      typeMap: {
        search: 'icon-LC_icon_search_line',
        clear: 'icon-clear',
        user: 'icon-user',
        'open-eye': 'icon-eye1',
        'hide-eye': 'icon-eye',
        up: 'icon-up',
        down: 'icon-down',
        warning: 'icon-warning',
        success: 'icon-success',
        error: 'icon-error_3',
        info: 'icon-info',
        close: 'icon-close',
        left: 'icon-left_3',
        right: 'icon-552cc1babd9aa',
        more: 'icon-gengduo'
      }
    }
  }
  render() {
    const { typeMap } = this.state
    const { class: type, style } = this.props
    return (
      <i style={style} className={['iconfont', typeMap[type]].join(' ').trim()}></i>
    )
  }
}
