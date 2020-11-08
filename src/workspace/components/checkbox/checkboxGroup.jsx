import React from 'react'
import { Provider } from './context'
import PropTypes from 'prop-types'
class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  onGroupChange = (e, val) => {
    const { onChange, value } = this.props
    let checkArr = JSON.parse(JSON.stringify(value))
    if (e.target.checked) {
      checkArr = Array.from(new Set([...checkArr, val]))
    } else {
      const deleteIndex = checkArr.indexOf(val)
      if (deleteIndex !== -1) {
        checkArr.splice(deleteIndex, 1)
      }
    }
    onChange && onChange(checkArr)
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
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.bool
}

export default CheckboxGroup