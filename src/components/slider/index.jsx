import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
export default class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      left: 0,
      isMove: false,
      stops: []
    }
    this.container = React.createRef()
  }
  componentDidMount() {
    this.createStops()
  }
  handleMouseDown = (e) => {
    e.persist()
    let containerWidth = this.container.current.offsetWidth
    const { step, disabled, max, min } = this.props
    if (disabled) {
      return
    }
    let handlemousemove = (e) => {
      let left = e.clientX - this.container.current.offsetLeft
      let moveStep = step / ( max - min ) * containerWidth
      if (this.state.left > left) {
        left = this.state.left - Math.floor( (this.state.left - left) / moveStep ) * moveStep
      } else if (this.state.left < left) {
        left = this.state.left + Math.floor( (left - this.state.left) / moveStep ) * moveStep
      }

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
  createStops = () => {
    const { max, min, step } = this.props
    let containerWidth = this.container.current.offsetWidth
    let stopCount = (max - min) / step
    let moveStep = step / ( max - min ) * containerWidth
    let stops = []
    console.log(stopCount)
    for(let i = 1 ; i <= stopCount - 1; i++) {
      stops.push({
        left: i * moveStep
      })
    }
    this.setState({
      stops
    })
  }
  render () {
    const { left, isMove, stops } = this.state
    const { min, max, step, disabled } = this.props
    return (
      <div className='ling-slider-wrapper' ref={this.container}>
        <div className='ling-slider-dot' style={isMove && !disabled ? { left: left + 'px', transform: 'scale(1.5)' } : { left: left + 'px' }} onMouseDown={(e) => { this.handleMouseDown(e) }}></div>
        <div className='ling-slider-bar' style={{ width: left + 6 + 'px' }}></div>
        {
          Math.floor((max - min) / 200 * (left + 6))
        }
        {
          stops.map((item) => {
            return (
              <div className="ling-slider-stop" style={item}></div>
            )
          })
        }
      </div>
    )
  }
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  step: PropTypes.number,
  disabled: PropTypes.bool
}
Slider.defaultProps = {
  min: 0,
  max: 500,
  step: 22,
  disabled: false
}