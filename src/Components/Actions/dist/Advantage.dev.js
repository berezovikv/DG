"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectAdvantage = void 0;

var selectAdvantage = function selectAdvantage(text) {
  return {
    type: "MODEL_ADVANTAGE",
    payload: text
  };
};

exports.selectAdvantage = selectAdvantage;