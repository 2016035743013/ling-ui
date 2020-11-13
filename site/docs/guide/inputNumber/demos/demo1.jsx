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