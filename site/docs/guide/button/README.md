---
maxTocDeep: 4
--- 

import { Button, Icon } from 'ling-ui'
import LoadingBtn from './loadingbtn.js'

## Button 按钮  

### 基本用法
<Button>默认按钮</Button>
<Button type='primary' >primary按钮</Button>
<Button type='danger' >danger按钮</Button>
<Button type='text' >text按钮</Button>
<Button type='link' >link按钮</Button>  

- 默认按钮：用于没有主次之分的一组行动点。
- 主按钮：用于主行动点。
- 文本按钮：用于最次级的行动点。
- 链接按钮：用于作为外链的行动点。  

```js
render() {
  return (
    <Button>默认按钮</Button>
    <Button type='primary'>primary按钮</Button>
    <Button type='danger'>danger按钮</Button>
    <Button type='text'>text按钮</Button>
    <Button type='link'>link按钮</Button>
  )
}
```

### 图标按钮
<Button icon={<Icon class="search" />} shape="circle"></Button>
<Button icon={<Icon class="search" />} shape="circle" type='primary'></Button>
<Button icon={<Icon class="search" />} >搜索</Button>
<Button icon={<Icon class="search" />} type='primary'>搜索</Button>
<Button icon={<Icon class="search" />} shape="circle" ghost></Button>


- 当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。

```js
render () {
  return (
    <div>
      <Button icon={<Icon class="search" />} shape="circle"></Button>
      <Button icon={<Icon class="search" />} shape="circle" type='primary'></Button>
      <Button icon={<Icon class="search" />} >搜索</Button>
      <Button icon={<Icon class="search" />} type='primary'>搜索</Button>
      <Button icon={<Icon class="search" />} shape="circle" ghost></Button>
    </div>
  )
}
```

###  按钮的大小
<Button>默认按钮</Button>
<Button type='primary'>primary按钮</Button>
<Button type='danger'>danger按钮</Button>
<br />
<Button size="small">默认按钮</Button>
<Button type='primary' size="small">primary按钮</Button>
<Button type='danger' size="small">danger按钮</Button>
<br />
<Button size="large">默认按钮</Button>
<Button type='primary' size="large">primary按钮</Button>
<Button type='danger' size="large">danger按钮</Button>

- 按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。

```js
render () {
  return (
    <div>
      <Button size="default">默认按钮</Button>
      <Button type='primary' size="default">primary按钮</Button>
      <Button type='danger' size="default">danger按钮</Button>

      <Button size="small">默认按钮</Button>
      <Button type='primary' size="small">primary按钮</Button>
      <Button type='danger' size="small">danger按钮</Button>

      <Button size="large">默认按钮</Button>
      <Button type='primary' size="large">primary按钮</Button>
      <Button type='danger' size="large">danger按钮</Button>
    </div>
  )
}
```


### 按钮不可用
<Button>默认按钮</Button>
<Button disabled>默认按钮</Button>
<Button type='primary'>primary按钮</Button>
<Button disabled type='primary'>primary按钮</Button>
<Button type='danger'>danger按钮</Button>
<Button disabled type='danger'>danger按钮</Button>
<Button type='text'>text按钮</Button>
<Button disabled type='text'>text按钮</Button>
<Button type='link'>link按钮</Button>
<Button disabled type='link'>link按钮</Button>

- 添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

```js
render () {
  return (
    <div>
      <Button>默认按钮</Button>
      <Button disabled>默认按钮</Button>
      <Button type='primary'>primary按钮</Button>
      <Button disabled type='primary'>primary按钮</Button>
      <Button type='danger'>danger按钮</Button>
      <Button disabled type='danger'>danger按钮</Button>
      <Button type='text'>text按钮</Button>
      <Button disabled type='text'>text按钮</Button>
      <Button type='link'>link按钮</Button>
      <Button disabled type='link'>link按钮</Button>
    </div>
  );
}

```


### 加载中状态

- 添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。 

<LoadingBtn />

```js
import React from 'react';
import { Button } from 'ling-ui'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      loading1: false
    }
  }
  render () {
    const { loading, loading1 } = this.state
    return (
      <div className="App">
        <Button loading type='primary'>加载按钮</Button>
        <Button loading type='primary' shape='circle'></Button>
        <Button loading type='primary' shape='round'></Button>
        <Button loading={loading} type='primary' onClick={() => {
          this.setState(({ loading }) => {
            return {
              loading: !loading
            }
          })
        }}>点击停止加载</Button>
        <Button loading={loading1} type='primary' onClick={() => {
          this.setState(({ loading1 }) => {
            return {
              loading1: !loading1
            }
          })
        }} >点击提交</Button>
      </div>
    );
  }
}

```


### block 按钮
- block属性将使按钮适合其父宽度。

<Button block>默认按钮</Button>
<Button type='primary' block>primary按钮</Button>
<Button type='danger' block>danger按钮</Button>

```js
render() {
  return () {
    <div>
      <Button block>默认按钮</Button>
      <Button type='primary' block>primary按钮</Button>
      <Button type='danger' block>danger按钮</Button>
      <Button type='text' block>text按钮</Button>
      <Button type='link' block>link按钮</Button>
    </div>
  }
}
```


### 参数 
| 参数 | 描述 | 类型 | 默认值 | 
| - | - | - | - | 
|block|将按钮宽度调整为其父宽度的选项|bool| - | 
|disabled|按钮失效状态|bool| - | 
|ghost|幽灵属性，使按钮背景透明|bool| - | 
|href|点击跳转的地址，指定此属性button的行为和a链接一致|string| - | 
|icon|设置按钮的图标组件|node| - | 
|loading|设置按钮载入状态|bool| - | 
|shape|设置按钮形状，可选值为circle/round或者不设|string| - | 
|size|设置按钮大小large/middle/small|string| - | 
|target|相当于a链接的target属性，href存在时生效|string| - | 
|type|设置按钮类型primary/ghost/dashed/danger/link/text/default|string| - | 
|onClick|点击按钮时的回调(event)>void|func| - | 



