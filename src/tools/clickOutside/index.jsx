import React from 'react'
import './index.scss'

function ClickOutside (Component) {
  // return Component
  class ClickOutside extends React.Component {
    constructor(props) {
      super(props)
      // this.componentRef = React.createRef()
    }
    setWrapperRef = (node) => {
      this.componentRef = node;
    }

    componentDidMount () {

      console.log(this.props)
      window.addEventListener('click', (e) => {
        if (this.componentRef && !this.componentRef.contains(e.target)) {
          console.log('You clicked outside of me!');
        }
      })
    }
    componentWillUnmount () {
      window.removeEventListener('click')
    }
    render () {
      return (
        <div className="outside-wrapper" ref={this.setWrapperRef}>
          <Component {...this.props} />
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