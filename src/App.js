
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { Select, message, Tooltip, Alert, Slider, Switch, Pagination, Button, Icon } from './workspace/index'
import './App.scss'
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  infoMessge = () => {
    message.info({
      message: 'infoMessge',
      duration: 3000,
      onClose: () => { }
    })
  }
  wanringMessge = () => {
    message.warning({
      message: 'wanringMessge',
      duration: 3000,
      onClose: () => { }
    })
  }
  successMessge = () => {
    message.success({
      message: 'successMessge',
      duration: 3000,
      onClose: () => { }
    })
  }
  errorMessge = () => {
    message.error({
      message: 'errorMessge',
      duration: 3000,
      onClose: () => { }
    })
  }
  loadingMessge = () => {
    message.loading({
      message: 'loadingMessge',
      duration: 3000,
      onClose: () => { }
    })
  }
  render () {
    return (
      <div className="App">
        <Button onClick={this.infoMessge}>infoMessge</Button>
        <Button onClick={this.wanringMessge}>wanringMessge</Button>
        <Button type='primary' onClick={this.loadingMessge}>loadingMessge</Button>
        <Button type='primary' onClick={this.successMessge}>successMessge</Button>
        <Button type='danger' onClick={this.errorMessge}>errorMessge</Button>
      </div>
    );
  }
}

export default App;