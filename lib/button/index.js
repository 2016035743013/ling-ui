"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.scss");

var _common = require("../common/common.js");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Button = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Button, _React$Component);

  function Button() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      _this.props.onClick && _this.props.onClick(e);
    };

    _this.setBtnClass = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          shape = _this$props.shape,
          disabled = _this$props.disabled,
          size = _this$props.size,
          ghost = _this$props.ghost;
      var buttonType = _common.prefix;

      switch (type) {
        case 'primary':
          buttonType += 'primary';
          break;

        case 'dashed':
          buttonType += 'dashed';
          break;

        case 'danger':
          buttonType += 'danger';
          break;

        case 'link':
          buttonType += 'link';
          break;

        case 'text':
          buttonType += 'text';
          break;

        default:
          buttonType += 'default';
          break;
      }

      return [disabled ? '' : buttonType, shape ? _common.prefix + shape : '', disabled ? 'ling-disabled' : '', size ? _common.prefix + size : '', ghost ? 'ling-ghost' : ''].join(' ').trim();
    };

    return _this;
  }

  var _proto = Button.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        icon = _this$props2.icon,
        loading = _this$props2.loading,
        target = _this$props2.target;
    return target ? /*#__PURE__*/_react.default.createElement("a", {
      href: target,
      className: this.setBtnClass(),
      onClick: this.handleClick
    }, loading ? /*#__PURE__*/_react.default.createElement("span", {
      className: "ling-loading"
    }, " ", /*#__PURE__*/_react.default.createElement("i", {
      className: "iconfont"
    }, "\uE6CD"), " ") : '', icon, children) : /*#__PURE__*/_react.default.createElement("div", {
      className: this.setBtnClass(),
      onClick: this.handleClick
    }, loading ? /*#__PURE__*/_react.default.createElement("span", {
      className: "ling-loading"
    }, " ", /*#__PURE__*/_react.default.createElement("i", {
      className: "iconfont"
    }, "\uE6CD"), " ") : '', icon, children);
  };

  return Button;
}(_react.default.Component);

Button.propTypes = {
  text: _propTypes.default.string,
  block: _propTypes.default.bool,
  danger: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  ghost: _propTypes.default.bool,
  href: _propTypes.default.string,
  htmlType: _propTypes.default.string,
  icon: _propTypes.default.node,
  loading: _propTypes.default.bool,
  shape: _propTypes.default.string,
  size: _propTypes.default.string,
  target: _propTypes.default.string,
  type: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Button;
exports.default = _default;