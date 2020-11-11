
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { Select, Input, InputNumber, message, Tooltip, Alert, Slider, Switch, Pagination, Button, Checkbox, CheckboxGroup } from './workspace/index'
import './App.scss'
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  onChange = (val) => {
    console.log(val)
  }
  render () {
    return (
      <div className="App">
        <div style={{ width: '250px' }}>
          <InputNumber max={100} min={1} value={3}
            onChange={this.onChange}
            formatter={(value) => {
              return `${value} %`
            }}
            autoFocus
          />
        </div>
      </div>
    );
  }
}

export default App;