function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React from 'react';
import './index.scss';
import { prefix } from '../common/common.js';
import PropTypes from 'prop-types';

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
      var buttonType = prefix;

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

      return [disabled ? '' : buttonType, shape ? prefix + shape : '', disabled ? 'ling-disabled' : '', size ? prefix + size : '', ghost ? 'ling-ghost' : ''].join(' ').trim();
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
    return target ? /*#__PURE__*/React.createElement("a", {
      href: target,
      className: this.setBtnClass(),
      onClick: this.handleClick
    }, loading ? /*#__PURE__*/React.createElement("span", {
      className: "ling-loading"
    }, " ", /*#__PURE__*/React.createElement("i", {
      className: "iconfont"
    }, "\uE6CD"), " ") : '', icon, children) : /*#__PURE__*/React.createElement("div", {
      className: this.setBtnClass(),
      onClick: this.handleClick
    }, loading ? /*#__PURE__*/React.createElement("span", {
      className: "ling-loading"
    }, " ", /*#__PURE__*/React.createElement("i", {
      className: "iconfont"
    }, "\uE6CD"), " ") : '', icon, children);
  };

  return Button;
}(React.Component);

Button.propTypes = {
  text: PropTypes.string,
  block: PropTypes.bool,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  ghost: PropTypes.bool,
  href: PropTypes.string,
  htmlType: PropTypes.string,
  icon: PropTypes.node,
  loading: PropTypes.bool,
  shape: PropTypes.string,
  size: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};
export default Button;