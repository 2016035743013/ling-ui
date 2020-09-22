
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { Radio } from './components/index'
import './App.scss'
class App extends React.Component {
  handleClick = () => {
    console.log('这是触发了点击事件')
  }
  render () {
    return (
      <div className="App">
        <Radio />
      </div>
    );
  }
}

export default App;