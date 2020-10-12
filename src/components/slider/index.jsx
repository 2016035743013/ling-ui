import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
export default class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      left: 0,
      isMove: false
    }
    this.container = React.createRef()
  }
  handleMouseDown = (e) => {
    e.persist()
    let containerWidth = this.container.current.offsetWidth
    const { min, max, step } = this.props
    const minValue = min / 100 * containerWidth
    const maxValue = (max / 100 > 1 ? 1 : max / 100) * containerWidth
    let handlemousemove = (e) => {
      let left = e.clientX - this.container.current.offsetLeft
      console.log(e.clientX || e.pageX, this.container.current.offsetLeft, left)
      if (left <= -6) {
        left = -6
      } else if (left >= containerWidth - 6) {
        left = containerWidth - 6
      }
      this.setState({
        left,
        isMove: true
      })
    }
    document.addEventListener('mousemove', handlemousemove)
    document.addEventListener('mouseup', (e) => {
      document.removeEventListener('mousemove', handlemousemove)
      this.setState({
        isMove: false
      })
    })
  }
  render () {
    const { left, isMove } = this.state
    const { min, max, step } = this.props
    return (
      <div className='ling-slider-wrapper' ref={this.container}>
        <div className='ling-slider-dot' style={isMove ? { left: left + 'px', transform: 'scale(1.5)' } : { left: left + 'px' }} onMouseDown={(e) => { this.handleMouseDown(e) }}></div>
        <div className='ling-slider-bar' style={{ width: left + 6 + 'px' }}></div>
        {
          (max - min) / 200 * left + 6
        }
      </div>
    )
  }
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  step: PropTypes.number
}
Slider.defaultProps = {
  min: -10,
  max: 500,
  step: 1
}