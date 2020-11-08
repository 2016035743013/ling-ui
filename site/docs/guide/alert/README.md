import { Alert, Icon } from 'ling-ui'
import "./index.scss"

## Alert警告提示
### 基本用法
<Alert message='提示文案' type='success'/>
<Alert message='提示文案' type='info'/>
<Alert message='提示文案' type='warning'/>
<Alert message='提示文案' type='error'/>

- Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。
```js
render () {
  return () {
    <div>
      <Alert message='提示文案' type='success'/>  
      <Alert message='提示文案' type='info'/>  
      <Alert message='提示文案' type='warning'/>  
      <Alert message='提示文案' type='error'/>  
    </div>
  }
}
```

### 自定义关闭按钮

<Alert message="不可关闭的 alert" type="info" closable={false} />

<Alert message="自定义 close-text" type="succes" closable closeText="知道了" />

<Alert message="自定义 close-text" type="error" closable closeText={<a>关闭标签</a>} />

<Alert message="设置了回调的 alert" type="warning" closable afterClose={() => alert('Hello World!')}/>

<Alert message="自定义 close-text, 设置了回调的 alert" type="info" closable closeText={<Icon class='close' />} afterClose={() => alert('more action')} />


- 自定义关闭按钮为文字或其他符号。

- 在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。`closable`属性决定是否可关闭，接受`boolean`，默认为`false`。你可以设置`closeText`属性来代替右侧的关闭图标，注意：`closeText`可以为文本, 标签和react组件。设置`onClose`事件来设置关闭时的回调。
```js
render() {
  return (
    <div>
      <Alert message="不可关闭的 alert" type="success" closable={false} />
      <Alert message="自定义 close-text" type="info" closeText="知道了" />
      <Alert message="设置了回调的 alert" type="warning" onClose={() => alert('Hello World!')}/>
    </div>
  )
}
```
### 带有 icon

<Alert message="成功提示的文案" type="success" showIcon />

<Alert message="消息提示的文案" type="info" showIcon />

<Alert message="警告提示的文案" type="warning" showIcon />

<Alert message="错误提示的文案" type="error" showIcon />


- 表示某种状态时提升可读性。

- demo 通过设置`showIcon`属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。
```js
render() {
  return (
    <div>
      <Alert message="成功提示的文案" type="success" showIcon />
      <Alert message="消息提示的文案" type="info" showIcon />
      <Alert message="警告提示的文案" type="warning" showIcon />
      <Alert message="错误提示的文案" type="error" showIcon />
    </div>
  )
}
```

### 带有辅助性文字介绍

<Alert
  showIcon
  type="success"
  message="带辅助性文字介绍"
  description="带有辅助性文字介绍 带有辅助性文字介绍……" 
/>

- 包含标题和内容，解释更详细的警告。

- 除了必填的`title`属性外，你可以设置`description`属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。
```js
render() {
  return (
    <Alert
      showIcon
      type="success"
      message="带辅助性文字介绍"
      description="带有辅助性文字介绍 带有辅助性文字介绍……" />
  )
}
```

### 参数  
| 参数 | 描述 | 类型 | 默认值 | 
| - | - | - | - | 
|closable|是否显示关闭按钮|bool| - | 
|type|警告提示内容|string| info | 
|description|警告提示的类型，可选值有success|string| - | 
|afterClose|警告提示的辅助性文字介绍|func| - | 
|closeText|关闭时触发的回调函数|node| - | 
|message|自定义关闭按钮|string| - | 
|showIcon|是否显示辅助图标|bool| - | 





