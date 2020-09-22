import React from 'react'
import PropTypes from 'prop-types'
class Layout extends React.Component {
  static propTypes = {
    // row 属性
    gutter: PropTypes.number,
    type: PropTypes.string,
    justify: PropTypes.string,
    align: PropTypes.string,
    tag: PropTypes.string,
    // col属性
    span: PropTypes.number,
    offset: PropTypes.number,
    push: PropTypes.number,
    pull: PropTypes.number,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }
  render() {
    return (
      <div className="el-row">
        
      </div>
    )
  }
}

export default Layout