---
maxTocDeep: 4
--- 

import { Input, Icon } from 'ling-ui'
import './index.scss'

## Input 输入框
通过鼠标或键盘输入内容，是最基础的表单域的包装。

### 基本使用

<div style={{ width: '250px' }}>
  <Input placeholder="请输入" />
</div>

```js

<div style={{ 'width': '250px' }}>
  <Input placeholder="请输入" />
</div>

````

### 三种尺寸

- 可用通过设置 size 属性设置输入框的大小，有三种尺寸，大中小，值分别为 large  middle 和 small

<div className="ling-input-demo1">
  <Input prefix={<Icon class='user' />} size="large" placeholder="请输入文本" />
  <Input prefix={<Icon class='user' />} size="middle" placeholder="请输入文本" />
  <Input prefix={<Icon class='user' />} size="small" placeholder="请输入文本" />
</div>

```js

<div className="ling-input-demo1">
  <Input prefix={<Icon class='user' />} size="large" placeholder="请输入文本" />
  <Input prefix={<Icon class='user' />} size="middle" placeholder="请输入文本" />
  <Input prefix={<Icon class='user' />} size="small" placeholder="请输入文本" />
</div>

```

### 密码框

- 设置输入框的 type 属性值为 password 可以将文本输入框切换为密码框

<div style={{ width: '250px' }}>
  <Input type='password' placeholder="请输入密码" />
</div>

```js

<div style={{ 'width': '250px' }}>
  <Input type='password' placeholder="请输入密码" />
</div>

```

### 前缀和后缀

- 在输入框上可以添加前缀或后缀图标，可以用 prefix 设置前缀图标或者文本，可以用 suffix 设置后缀图标或者文本

<div className="ling-input-demo1">
  <Input prefix={<Icon class='user' />} placeholder="请输入用户名" />
  <Input suffix='RMB' />
  <Input prefix='￥' suffix='RMB' />
</div>

```js

<div className="ling-input-demo1">
  <Input prefix={<Icon class='user' />} placeholder="请输入用户名" />
  <Input suffix='RMB' />
  <Input prefix='￥' suffix='RMB' />
</div>


```

### 带移除图标

-带移除图标的输入框，点击图标删除所有内容。

<div style={{ width: '250px' }}>
  <Input allowClear placeholder="请输入" />
</div>

```js

<div style={{ 'width': '250px' }}>
  <Input allowClear placeholder="请输入" />
</div>

```

### 参数

| 参数 | 描述 | 类型 | 默认值 | 
| - | - | - | - | 
|defaultValue |	输入框默认内容 | 	string |	-	|
|disabled |	是否禁用状态，默认为 false | 	boolean	| false	|
|id |	输入框的 id | 	string	|-	|
|maxLength |	最大长度 | 	number	|-	|
|prefix |	带有前缀图标的 input | 	string  ReactNode	|-	|
|size |	控件大小。注：标准表单内的输入框大小限制为 large	large 或者 middle 或者 small | string | middle	|
|suffix |	带有后缀图标的 input | 	string | ReactNode	|-	|
|type |	声明 input 类型，同原生 input 标签的 type 属性，见：MDN(请直接使用 Input.TextArea 代替 type="textarea") | 	string	text	|
|value |	输入框内容 | 	string	|-	|
|onChange |	输入框内容变化时的回调 | 	function(e)	|-	|
|onPressEnter |	按下回车的回调 | 	function(e)|	-	|
|allowClear |	可以点击清除图标删除内容 | 	boolean	|-	|