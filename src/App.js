
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { Button, Radio, RadioGroup, Input, Icon, InputNumber, Checkbox, Message, Tooltip, Alert, Slider, Switch, Pagination } from './components/index'
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
  render () {
    const { value, isSelect, inputValue } = this.state
    return (
      <div className="App">
        <Pagination pageSize="10" total="180" />
      </div>
    );
  }
}

export default App;