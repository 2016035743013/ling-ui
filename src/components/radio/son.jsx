import React from 'react'
import { RadioContext } from './context'
class Son extends React.Component {
  render () {
    return (
      <RadioContext.Consumer>
        {({theme, toggle}) => {
          return (
            <div>
              {theme}
            </div>
          )
        }}
      </RadioContext.Consumer>
    )
  }
}

export default Son