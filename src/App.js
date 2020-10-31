
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
  render () {
    const { loading, loading1 } = this.state
    return (
      <div className="App">
        <Button size="default">默认按钮</Button>
        <Button type='primary'>primary按钮</Button>
        <Button type='danger'>danger按钮</Button>
      </div>
    );
  }
}

export default App;