
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6
import React from 'react';
import {Button, Icon} from './components/index'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: '这是按钮'
    }
  }
  render() {
    const { text } = this.state
    return (
      <div className="App">
        <Button text={text} />
        <Icon />
      </div>
    );
  }
}

export default App;
