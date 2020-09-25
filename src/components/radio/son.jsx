import React from 'react'
import { RadioContext } from './context'
class Son extends React.Component {
  constructor(props, context) {
    super(props)
    console.log('==========', props)
    console.log('==========', context)
  }
  render () {
    return (
      <RadioContext.Consumer>
        {({color, changeColor}) => {
          return (
            <div onClick={changeColor}>
              {color}
            </div>
          )
        }}
      </RadioContext.Consumer>
    )
  }
}

export default Son