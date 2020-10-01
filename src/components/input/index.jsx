import React from 'react'
import "./index.scss"

class Input extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      disabled,
      maxLength,
      size,
      value,
      onChange,
      allowClear,
      placeholder
    } = this.props
    return(
      <div>
        <input className="ling-input" type="text" placeholder={placeholder}  value={value} maxLength={maxLength} disabled={disabled} />
      </div>
    )
  }
}

export default Input