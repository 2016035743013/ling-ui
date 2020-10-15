
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { Button, Radio, RadioGroup, Input, Icon, InputNumber, Checkbox, Message, Tooltip, Alert, Slider, Switch } from './components/index'
import './App.scss'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '0',
      isSelect: false,
      inputValue: ''
    }
  }
  handleChange = (value) => {
    this.setState(() => {
      return {
        value
      }
    })
  }
  onChange = (value) => {
    console.log(value)
  }
  showMessage = () => {
    Message.info({
      text: 'this is a text',
      duration: 3000,
      type: 'info'
    })
  }
  render() {
    const { value, isSelect, inputValue } = this.state
    return (
      <div className="App">
        <Switch activeColor="#13ce66"
          inactiveColor="#ff4949"
          onChange={this.onChange}
          value="1"
          onValue="1"
          offValue="2"
        />
      </div>
    );
  }
}

export default App;