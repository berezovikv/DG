"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _model = _interopRequireDefault(require("./model"));

var _modelActive = _interopRequireDefault(require("./model-active"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var allReducers = (0, _redux.combineReducers)({
  models: _model["default"],
  active: _modelActive["default"]
});
var _default = allReducers;
exports["default"] = _default;