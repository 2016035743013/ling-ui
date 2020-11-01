
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { message, Button } from 'ling-ui'
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  infoMessge = () => {
    message.info('infoMessge', 3000, () => { })
  }
  wanringMessge = () => {
    message.warning('wanringMessge', 3000, () => { })
  }
  successMessge = () => {
    message.success('successMessge', 3000, () => { })
  }
  errorMessge = () => {
    message.error('errorMessge', 3000, () => { })
  }
  loadingMessge = () => {
    message.loading('loadingMessge', 3000, () => { })
  }
  render () {
    return (
      <div className="App">
        <Button onClick={this.infoMessge}>infoMessge</Button>
        <Button onClick={this.wanringMessge}>wanringMessge</Button>
        <Button type='primary' onClick={this.successMessge}>successMessge</Button>
        <Button type='danger' onClick={this.errorMessge}>errorMessge</Button>
        <Button type='primary' onClick={this.loadingMessge}>loadingMessge</Button>
      </div>
    );
  }
}

export default App;