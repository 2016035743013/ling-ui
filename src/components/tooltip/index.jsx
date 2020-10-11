import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      borderColorMapMap: {
        top: 'borderTopColor',
        right: 'borderRightColor',
        bottom: 'borderBottomColor',
        left: 'borderLeftColor',
      }
    }
  }
  showTip = () => {
    this.setState({
      visible: true
    })
  }
  hideTip = () => {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.setState({
        visible: false
      })
    }, 100);
  }
  render() {  
    const { visible, borderColorMap } = this.state
    const { color, children, content, placement } = this.props
    const borderMap = {
      top: {'borderTopColor': color},
      right: {'borderRightColor': color},
      bottom: {'borderBottomColor': color},
      left: {'borderLeftColor': color},
    }
    return (
      <div  className="ling-tooltip-wrapper" onMouseEnter={this.showTip} onMouseLeave={this.hideTip}>
        <div className="ling-tooltip-children">
          { children }
        </div>  
        {
          visible && 
          <div className={['ling-tooltip-container', 'ling-tooltip-' + placement].join(' ').trim()} style={{background: color}}>
            {content}
            <div className="ling-tooltip-arrow" style={borderMap[placement]}></div>
            {/* <div className="ling-tooltip-arrow" style={{'borderBottomColor': color}}></div> */}
          </div>
        }
      </div>
    )
  }
}

Tooltip.propTypes = {
  color: PropTypes.string,
  placement: PropTypes.string
}
Tooltip.defaultProps = {
  color: '#000',
  placement: 'top'
}