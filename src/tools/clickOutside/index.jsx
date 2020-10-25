import React from 'react'
import './index.scss'

function ClickOutside (Component) {
  // return Component
  class ClickOutside extends React.Component {
    constructor(props) {
      super(props)
    }
    setWrapperRef = (node) => {
      this.componentRef = node;
    }
    getChildComponent = (node) => {
      this.wrapComponent = node
    }
    componentDidMount () {
      window.addEventListener('click', (e) => {
        if (this.componentRef && !this.componentRef.contains(e.target)) {
          // console.log(this.wrapComponent)
          this.wrapComponent.handleClickOutside()
        }
      })
    }
    componentWillUnmount () {
      window.removeEventListener('click')
    }
    render () {
      return (
        <div className="outside-wrapper" ref={this.setWrapperRef}>
          <Component {...this.props} ref={this.getChildComponent} />
        </div>
      )
    }
  }
  return React.forwardRef((props, ref) => {
    return <ClickOutside {...props} forwardedRef={ref} />;
  });
}

export {
  ClickOutside
}