"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _useFormControl = require("./useFormControl");

Object.keys(_useFormControl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useFormControl[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useFormControl[key];
    }
  });
});