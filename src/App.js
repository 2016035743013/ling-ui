
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { Select, Input, Icon, Tooltip, Alert, Slider, Switch, Pagination, Button, Checkbox, CheckboxGroup } from './workspace/index'
import './App.scss'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkVals: ['1'],
      checked: false,
      value: '2'
    }
  }
  onPressEnter = (val) => {
    console.log(val)
  }
  onChange = (val) => {
    console.log(val)
    this.setState({
      value: val
    })
  }
  render () {
    const { checkVals, checked, value } = this.state
    return (
      <div className="App">
        <div style={{ width: '250px' }}>
          <Input allowClear placeholder="请输入" />
        </div>
      </div>
    );
  }
}

export default App;