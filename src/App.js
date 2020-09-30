
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { Radio, RadioGroup, Input } from './components/index'
import './App.scss'
class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      value: '0',
      isSelect: false
    }
  }
  handleChange = (value) => {
    this.setState(() => {
      return {
        value
      }
    })
  }
  render () {
    const { value, isSelect } = this.state
    return (
      <div className="App">
        <RadioGroup value={value} onChange={this.handleChange}>
          <Radio style={{display: 'block'}} value='0'>男性</Radio>
          <Radio value='1'>女性</Radio>
        </RadioGroup>
        <Radio style={{display: 'block'}} value='1' checked={true} disabled={true}>女性</Radio>
        <Input />
      </div>
    );
  }
}

export default App;