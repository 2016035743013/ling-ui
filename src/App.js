
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { Select, Input, Icon, Tooltip, Alert, Slider, Switch, Pagination, Button, Checkbox, CheckboxGroup, message } from './workspace/index'
import './App.scss'
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
      //       $dangerColor: #ff4d4f;
      // $successColor: #67c23a;
      // $infoColor: #909399;
      // $warningColor: rgb(250, 173, 20);
      <div className="App">
        <Icon class='success' style={{ fontSize: '35px', color: '#ff4d4f' }} />
        <Icon class='info' style={{ fontSize: '35px', color: '#67c23a' }} />
        <Icon class='warning' style={{ fontSize: '35px', color: '#909399' }} />
        <Icon class='error' style={{ fontSize: '35px', color: 'rgb(250, 173, 20)' }} />
      </div>
    );
  }
}

export default App;