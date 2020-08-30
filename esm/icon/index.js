function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React from 'react';
import './index.scss';

var Icon = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Icon, _React$Component);

  function Icon() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Icon.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("div", null, "this is a icon");
  };

  return Icon;
}(React.Component);

export { Icon as default };