import React from 'react'
import { RadioContext } from './context'

class RadioGroup extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    const { value, onChange, children } = this.props
    return (
      <RadioContext.Provider value={{checkedValue: value, onChange}}>
        { children }
      </RadioContext.Provider>
    )
  }
}

export default RadioGroup

