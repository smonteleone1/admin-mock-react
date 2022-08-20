"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = require("path");

var _fsExtra = require("fs-extra");

var _lodash = require("lodash");

var _chalk = _interopRequireDefault(require("chalk"));

var _get = _interopRequireDefault(require("../scripts/sizeSnapshot/get"));

/**
 * @jest-environment node
 */
// 100 bytes difference
var SIZE_DELTA_LIMIT = 100;
describe('Backyard React', function () {
  test('Size Snapshot', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var sizes, snapshotPath, oldSizes, newSizes, orderedSizes;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            snapshotPath = (0, _path.join)(__dirname, '..', 'sizes.json');
            _context.next = 4;
            return (0, _fsExtra.exists)(snapshotPath);

          case 4:
            if (!_context.sent) {
              _context.next = 12;
              break;
            }

            _context.t1 = JSON;
            _context.next = 8;
            return (0, _fsExtra.readFile)(snapshotPath);

          case 8:
            _context.t2 = _context.sent;
            _context.t0 = _context.t1.parse.call(_context.t1, _context.t2);
            _context.next = 13;
            break;

          case 12:
            _context.t0 = {};

          case 13:
            oldSizes = _context.t0;
            _context.next = 16;
            return (0, _get["default"])();

          case 16:
            newSizes = _context.sent;

            if (Object.keys(oldSizes).length > 0) {
              // Reduce sizes that are not in newSizes
              sizes = (0, _lodash.reduce)(oldSizes, function (sizes, size, key) {
                if (newSizes[key]) {
                  return (0, _extends3["default"])({}, sizes, (0, _defineProperty2["default"])({}, key, size));
                } else {
                  return sizes;
                }
              }, {});
            } else {
              // There was no old size
              sizes = newSizes;
            } // Top level merge with existing sizes if the change is large enough


            (0, _lodash.assignWith)(sizes, newSizes, function (oldSize, newSize, key) {
              if (!oldSize || Math.abs(newSize.gzip - oldSize.gzip) >= SIZE_DELTA_LIMIT) {
                return newSize;
              } else {
                return oldSize;
              }
            }); // Updating snapshots

            if (!(process.env.SNAPSHOT_UPDATE || process.argv.includes('-u'))) {
              _context.next = 34;
              break;
            }

            orderedSizes = {};
            Object.keys(sizes).sort().forEach(function (key) {
              orderedSizes[key] = sizes[key];
            });
            _context.next = 24;
            return (0, _fsExtra.writeFile)(snapshotPath, JSON.stringify(orderedSizes, null, 2));

          case 24:
            _context.t3 = expect;
            _context.t4 = JSON;
            _context.next = 28;
            return (0, _fsExtra.readFile)(snapshotPath);

          case 28:
            _context.t5 = _context.sent;
            _context.t6 = _context.t4.parse.call(_context.t4, _context.t5);
            (0, _context.t3)(_context.t6).toEqual(orderedSizes);
            console.info(_chalk["default"].blue('Size Snapshot Updated'));
            _context.next = 35;
            break;

          case 34:
            // Expect size snapshot to not have changed more than limit
            expect(sizes).toEqual(oldSizes);

          case 35:
            return _context.abrupt("return", true);

          case 38:
            _context.prev = 38;
            _context.t7 = _context["catch"](0);
            throw _context.t7;

          case 41:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 38]]);
  })));
});