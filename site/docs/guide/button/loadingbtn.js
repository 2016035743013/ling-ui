
// 组件库参考文章  https://juejin.im/post/6844903749912100871#heading-6

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

export default App;