
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { Select, Input, InputNumber, message, Tooltip, Alert, Slider, Switch, Pagination, Button, Checkbox, CheckboxGroup } from './workspace/index'
import './App.scss'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'input'
    }
  }
  onChange = (val) => {
    this.setState({
      value: '修改了？'
    })
  }
  render () {
    const { value } = this.state
    return (
      <div className="App" onClick={this.onChange}>
        <Pagination total={100} pageSize={10} />
        <Input value={value} />
      </div>
    );
  }
}

export default App;