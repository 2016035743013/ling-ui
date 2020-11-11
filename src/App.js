
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
      //       $dangerColor: #ff4d4f;
      // $successColor: #67c23a;
      // $infoColor: #909399;
      // $warningColor: rgb(250, 173, 20);
      <div className="App">
        <div style={{ width: '250px' }}>
          {/* <Input allowClear placeholder="请输入" /> */}
          <InputNumber max={100} min={1} value={2} step={0.02}
            formatter={value =>
              `${value}%`
            }
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default App;