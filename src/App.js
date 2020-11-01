
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { Select, Message, Tooltip, Alert, Slider, Switch, Pagination, Button, Icon } from './workspace/index'
import './App.scss'
const { Option, OptionGroup } = Select
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      loading1: false
    }
  }
  showMessage = () => {
    Message.loading({
      message: '这是提示信息',
      onClose: () => {
      }
    })
    Message.info('这是提示信息')
  }
  render () {
    return (
      <div className="App">
        <Button size="default" onClick={this.showMessage}>提示信息</Button>
        <Button type='primary'>primary按钮</Button>
        <Button type='danger'>danger按钮</Button>
      </div>
    );
  }
}

export default App;