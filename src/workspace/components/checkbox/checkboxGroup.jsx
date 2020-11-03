import React from 'react'
import { Provider } from './context'
import PropTypes from 'prop-types'
class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <Provider value={this.props}>
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