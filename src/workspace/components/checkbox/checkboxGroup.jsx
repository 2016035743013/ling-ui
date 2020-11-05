import React from 'react'
import { Provider } from './context'
import PropTypes from 'prop-types'
class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkVal: []
    }
  }
  onGroupChange = (e, val) => {
    console.log(val)
    this.setState(({ checkVal }) => {
      return {
        checkVal: Array.from(new Set([checkVal])).push(val)
      }
    }, () => {
      const { onChange } = this.props
      onChange && onChange(this.checkVal)
    })
  }
  render () {
    return (
      <Provider value={{ ...this.props, onGroupChange: this.onGroupChange }}>
        {
          this.props.children
        }
      </Provider>
    )
  }
}

CheckboxGroup.propTypes = {
  value: PropTypes.array,
  defaultValue: PropTypes.array,
  onChange: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.bool
}

export default CheckboxGroup