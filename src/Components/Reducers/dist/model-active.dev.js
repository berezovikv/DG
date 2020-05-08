"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _model = _interopRequireDefault(require("./model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _model["default"])()[0];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MODEL_SELECTED":
      return action.payload;
      break;

    default:
      return state;
  }
}