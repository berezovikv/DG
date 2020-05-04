"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectModel = void 0;

var selectModel = function selectModel(model) {
  return {
    type: "MODEL_SELECTED",
    payload: model
  };
};

exports.selectModel = selectModel;