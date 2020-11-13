import React from 'react'
import { InputNumber } from 'ling-ui'
import "./demo4.scss"

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