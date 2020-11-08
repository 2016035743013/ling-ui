
import Message from './message.js'
import MessageObj from './messageObj.js'

## message 消息提示

### 静态方法，使用方式和参数如下：

<Message />

- message.success(content, duration, onClose)
- message.error(content, duration, onClose)
- message.info(content, duration, onClose)
- message.warning(content, duration, onClose)
- message.loading(content, duration, onClose)

```js
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

```


### 使用对象的形式传递参数

<MessageObj />

- message.success(config)
- message.error(config)
- message.info(config)
- message.warning(config)
- message.loading(config)

```js


// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { message, Button } from 'ling-ui'
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  infoMessge = () => {
    message.info({
      message: 'infoMessge',
      duration: 3000,
      onClose: () => { }
    })
  }
  wanringMessge = () => {
    message.warning({
      message: 'wanringMessge',
      duration: 3000,
      onClose: () => { }
    })
  }
  successMessge = () => {
    message.success({
      message: 'successMessge',
      duration: 3000,
      onClose: () => { }
    })
  }
  errorMessge = () => {
    message.error({
      message: 'errorMessge',
      duration: 3000,
      onClose: () => { }
    })
  }
  loadingMessge = () => {
    message.loading({
      message: 'loadingMessge',
      duration: 3000,
      onClose: () => { }
    })
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

```

config的参数如下  

### config参数

| 参数 | 描述 | 类型 | 默认值 | 
| - | - | - | - | 
|message|提示内容	|string ReactNode| - | 
|duration|自动关闭的延时，单位毫秒。设为 0 时不自动关闭	|number	| 3000 | 
|customClass|自定义 CSS class	|string| - | 
|iconClass|自定义图标样式|node| - | 
|onClose|关闭时触发的回调函数	|function| - | 
