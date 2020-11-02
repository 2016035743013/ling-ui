
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { Select, message, Tooltip, Alert, Slider, Switch, Pagination, Button, Checkbox } from './workspace/index'
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
    // const {} = this.props
    return (
      <div className="App">
        <Checkbox>复选框</Checkbox>
        <Checkbox>复选框</Checkbox>
      </div>
    );
  }
}

export default App;