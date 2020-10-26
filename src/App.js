
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { Select, Message, Tooltip, Alert, Slider, Switch, Pagination } from './components/index'
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
  handleChange = (value) => {
    console.log(value)
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
        <Select defaultValue="Lucy" style={{ width: 120 }} onChange={this.handleChange} allowClear autofocus>
          <OptionGroup label='man'>
            <Option value="Jack">Jack</Option>
            <Option value="Lucy">Lucy</Option>
          </OptionGroup>
          <OptionGroup label='man'>
            <Option value="Disabled" disabled>
              Disabled
            </Option>
            <Option value="yiminghe">yiminghe</Option>
          </OptionGroup>
        </Select>
      </div>
    );
  }
}

export default App;