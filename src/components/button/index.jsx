import React from 'react'
import './index.css'
import PropTypes from 'prop-types'
class Button extends React.Component {
  static propTypes = {
    text: PropTypes.string
  }
  render () {
    const { text } = this.props
    return (
      <div className="div">
        <button>{text}</button>
      </div>
      
    )
  }
}

export default Button