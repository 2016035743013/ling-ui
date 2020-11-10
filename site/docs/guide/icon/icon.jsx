
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { Icon, message } from 'ling-ui'
import './icon.scss'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      iconMap: ['search', 'clear', 'user', 'open-eye', 'hide-eye', 'up', 'down', 'warning', 'success', 'error', 'info', 'close', 'left', 'right', 'doubleRight', 'doubleLeft', 'more', 'loading'
      ]
    }
  }
  // 复制图标
  copyIcon = (type) => {
    let transfer = document.createElement('input');
    document.body.appendChild(transfer);
    transfer.value = `<Icon class='${type}' />`;  // 这里表示想要复制的内容
    transfer.focus();
    transfer.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
    }
    transfer.blur();
    message.success(`<Icon class='${type}' /> 复制成功`)
    document.body.removeChild(transfer);
  }
  render () {
    const { iconMap } = this.state
    return (
      <div className="App">
        <div className="icon-list">
          {
            iconMap.map(item => {
              return (
                <div className='icon-item' key={item} onClick={() => {
                  this.copyIcon(item)
                }}>
                  <Icon class={item} />
                  <span>{item}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;