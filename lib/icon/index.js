"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Icon = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Icon, _React$Component);

  function Icon() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Icon.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/_react.default.createElement("div", null, "this is a icon");
  };

  return Icon;
}(_react.default.Component);

exports.default = Icon;