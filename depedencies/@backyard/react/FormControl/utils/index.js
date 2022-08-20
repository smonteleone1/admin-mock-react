"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clean = clean;

/* eslint-disable no-underscore-dangle */

/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable import/prefer-default-export */
function clean(context) {
  return Object.keys(context).reduce(function (acc, key) {
    var _acc = acc;

    if (context[key] !== undefined) {
      _acc[key] = context[key];
    }

    return _acc;
  }, {});
}