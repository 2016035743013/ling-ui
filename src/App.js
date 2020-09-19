
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

import React from 'react';
import { Button } from './components/index'
class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Button> 我是按钮 </Button>
        <Button type='primary'> 我是按钮 </Button>
        <Button type='ghost'> 我是按钮 </Button>
        <Button type='text'> 我是按钮 </Button>
        <Button type='link'> 我是按钮 </Button>
        <Button  type='primary' shape='circle' icon={ <i className="iconfont">&#xe608;</i> }></Button>
        <Button  type='ghost' shape='circle' icon={ <i className="iconfont">&#xe608;</i> }></Button>
        <Button  shape='circle' icon={ <i className="iconfont">&#xe608;</i> }></Button>
        <Button type='primary' shape='round' icon={ <i className="iconfont">&#xe608;</i> }> 我是搜索按钮 </Button>
        <Button  shape='round' icon={ <i className="iconfont">&#xe608;</i> } disabled={true}> 我是搜索按钮 </Button>
        <Button  type='danger' loading={true}> 我是搜索按钮 </Button>
      </div>
    );
  }
}

export default App;