"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Icon = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Icon, _React$Component);

  function Icon(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleClick = function (e) {
      var onClick = _this.props.onClick;
      onClick && onClick(e);
    };

    _this.state = {
      typeMap: {
        search: 'icon-LC_icon_search_line',
        clear: 'icon-clear',
        user: 'icon-user',
        'open-eye': 'icon-eye1',
        'hide-eye': 'icon-eye',
        up: 'icon-up',
        down: 'icon-down',
        warning: 'icon-warning',
        success: 'icon-success',
        error: 'icon-error_3',
        info: 'icon-info',
        close: 'icon-close',
        left: 'icon-left_3',
        right: 'icon-552cc1babd9aa',
        doubleRight: 'icon-youfanyeyouhua',
        doubleLeft: 'icon-zuofanyezuohua',
        more: 'icon-gengduo'
      }
    };
    return _this;
  }

  var _proto = Icon.prototype;

  _proto.render = function render() {
    var typeMap = this.state.typeMap;
    var _this$props = this.props,
        type = _this$props.class,
        style = _this$props.style;
    return /*#__PURE__*/_react.default.createElement("i", {
      style: style,
      className: ['iconfont', typeMap[type]].join(' ').trim(),
      onClick: this.handleClick
    });
  };

  return Icon;
}(_react.default.Component);

exports.default = Icon;