"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeData;

var _namor = _interopRequireDefault(require("namor"));

var range = function range(len) {
  var arr = [];

  for (var i = 0; i < len; i += 1) {
    arr.push(i);
  }

  return arr;
};

var newPerson = function newPerson() {
  var statusChance = Math.random();
  return {
    firstName: typeof _namor["default"].generate === 'function' ? _namor["default"].generate({
      words: 1,
      numbers: 0,
      saltLength: 0,
      subset: 'manly'
    }) : 'First',
    lastName: typeof _namor["default"].generate === 'function' ? _namor["default"].generate({
      words: 1,
      numbers: 0,
      saltLength: 0,
      subset: 'manly'
    }) : 'Last',
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single'
  };
};

function makeData() {
  for (var _len = arguments.length, lens = new Array(_len), _key = 0; _key < _len; _key++) {
    lens[_key] = arguments[_key];
  }

  var makeDataLevel = function makeDataLevel() {
    var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var len = lens[depth];
    return range(len).map(function () {
      return newPerson();
    });
  };

  return makeDataLevel();
}