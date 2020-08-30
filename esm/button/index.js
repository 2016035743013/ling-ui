function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

var Button = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Button, _React$Component);

  function Button() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Button.prototype;

  _proto.render = function render() {
    var text = this.props.text;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", null, text));
  };

  return Button;
}(React.Component);

Button.propTypes = {
  text: PropTypes.string
};
export default Button;