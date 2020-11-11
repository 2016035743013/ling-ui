---
maxTocDeep: 4
--- 

import { InputNumber } from 'ling-ui'
import Demo1 from './demos/demo1.jsx'
import Demo2 from './demos/demo2.jsx'
import Demo3 from './demos/demo3.jsx'
import Demo4 from './demos/demo4.jsx'

### 基本使用
<Demo1 />

```js

import React from 'react'
import { InputNumber } from 'ling-ui'

export default class Demo1 extends React.Component {
  constructor(props) {
    super(props)
  }
  onChange = (val) => {
    console.log(val)
  }
  render () {
    return (
      <InputNumber
        max={100}
        min={1}
        defaultValue={3}
        onChange={this.onChange}
      />
    )
  }
}

```

### 禁用

<Demo2 />

```js

import React from 'react'
import { InputNumber } from 'ling-ui'

export default class Demo1 extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <InputNumber
        max={100}
        min={1}
        defaultValue={3}
        disabled
      />
    )
  }
}

```

### 小数

<Demo3 />

```js

import React from 'react'
import { InputNumber } from 'ling-ui'

export default class Demo1 extends React.Component {
  constructor(props) {
    super(props)
  }
  onChange = (val) => {
    console.log(val)
  }
  render () {
    return (
      <InputNumber
        max={100}
        min={1}
        defaultValue={3}
        step={0.5}
        onChange={this.onChange}
      />
    )
  }
}

```

### 格式化展示

<Demo4 />

```js

import React from 'react'
import { InputNumber } from 'ling-ui'

export default class Demo1 extends React.Component {
  constructor(props) {
    super(props)
  }
  onChange = (val) => {
    console.log(val)
  }
  render () {
    return (
      <>
        <InputNumber
          max={100}
          min={1}
          defaultValue={3}
          step={0.5}
          formatter={(value) => {
            return `${value} %`
          }}
          onChange={this.onChange}
        />
        <InputNumber
          max={100}
          min={1}
          defaultValue={3}
          step={0.5}
          formatter={(value) => {
            return `$ ${value}`
          }}
          onChange={this.onChange}
        />
      </>
    )
  }
}

```


### 参数

| 参数 | 描述 | 类型 | 默认值 | 
| - | - | - | - | 
|step|每次改变步数，可以为小数	|number | 1 | 
|max|最大值 |number| Number.MAX_SAFE_INTEGER | 
|min|最小值|number| Number.MIN_SAFE_INTEGER | 
|value|当前值		|number| - | 
|onChange|变化回调		|function(value: number | string)		| 3000 | 
|defaultValue|初始值		|number| - | 
|disabled|禁用		|boolean| - | 
|autoFocus|自动获取焦点		|boolean	| false | 
|onPressEnter|按下回车的回调		|function(e)	| - | 
|formatter|指定输入框展示值的格式|function(value: number | string): string| - | 


