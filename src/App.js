
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { Select, Message, Tooltip, Alert, Slider, Switch, Pagination, Button } from './workspace/index'
import './App.scss'
const { Option, OptionGroup } = Select
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '0',
      isSelect: false,
      inputValue: ''
    }
  }
  handleClose = () => {
    console.log('关闭alert')
  }
  render () {
    const { value, isSelect, inputValue } = this.state
    return (
      <div className="App">
        <Button ghost>按钮</Button>
      </div>
    );
  }
}

export default App;