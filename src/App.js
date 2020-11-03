
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { Select, message, Tooltip, Alert, Slider, Switch, Pagination, Button, Checkbox, CheckboxGroup } from './workspace/index'
import './App.scss'
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  onChange = (e) => {
    console.log(e)
  }
  render () {
    // const {} = this.props
    return (
      <div className="App">
        <CheckboxGroup value={[1, 2]}>
          <Checkbox value="1" onChange={this.onChange}>复选框</Checkbox>
          <Checkbox value="2" >复选框</Checkbox>
        </CheckboxGroup>
      </div>
    );
  }
}

export default App;