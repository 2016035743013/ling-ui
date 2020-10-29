import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
export default class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      left: 0,
      dotLeft: 0,
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
        left = this.state.left - Math.floor( (this.state.left - left ) / moveStep ) * moveStep
      } else if (this.state.left < left) {
        left = this.state.left + Math.floor( (left - this.state.left ) / moveStep ) * moveStep
      }

      if (left <= -6) {
        left = -6
      } else if (left >= containerWidth - 6) {
        left = containerWidth - 6
      }
      this.setState({
        left,
        dotLeft: left + ( this.state.left > left ? 4 : -4),
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
    const { left, isMove, stops, dotLeft } = this.state
    const { min, max, step, disabled } = this.props
    return (
      <div className='ling-slider-wrapper' ref={this.container}>
        <div className='ling-slider-dot' style={isMove && !disabled ? { left: dotLeft+ 'px', transform: 'scale(1.5)' } : { left: dotLeft + 'px' }} onMouseDown={(e) => { this.handleMouseDown(e) }}></div>
        <div className='ling-slider-bar' style={{ width: left + 6 + 'px' }}></div>
        {
          Math.floor((max - min) / 200 * (left))
        }
        {
          stops.map((item, index) => {
            return (
              <div className="ling-slider-stop" style={item} key={index}></div>
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
  step: 50,
  disabled: false
}