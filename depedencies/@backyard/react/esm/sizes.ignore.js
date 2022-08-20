import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";

/**
 * @jest-environment node
 */
import { join } from 'path';
import { readFile, writeFile, exists } from 'fs-extra';
import { assignWith, reduce } from 'lodash';
import chalk from 'chalk';
import getSizeSnapshot from '../scripts/sizeSnapshot/get'; // 100 bytes difference

var SIZE_DELTA_LIMIT = 100;
describe('Backyard React', function () {
  test('Size Snapshot', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var sizes, snapshotPath, oldSizes, newSizes, orderedSizes;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            snapshotPath = join(__dirname, '..', 'sizes.json');
            _context.next = 4;
            return exists(snapshotPath);

          case 4:
            if (!_context.sent) {
              _context.next = 12;
              break;
            }

            _context.t1 = JSON;
            _context.next = 8;
            return readFile(snapshotPath);

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
            return getSizeSnapshot();

          case 16:
            newSizes = _context.sent;

            if (Object.keys(oldSizes).length > 0) {
              // Reduce sizes that are not in newSizes
              sizes = reduce(oldSizes, function (sizes, size, key) {
                if (newSizes[key]) {
                  return _extends({}, sizes, _defineProperty({}, key, size));
                } else {
                  return sizes;
                }
              }, {});
            } else {
              // There was no old size
              sizes = newSizes;
            } // Top level merge with existing sizes if the change is large enough


            assignWith(sizes, newSizes, function (oldSize, newSize, key) {
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
            return writeFile(snapshotPath, JSON.stringify(orderedSizes, null, 2));

          case 24:
            _context.t3 = expect;
            _context.t4 = JSON;
            _context.next = 28;
            return readFile(snapshotPath);

          case 28:
            _context.t5 = _context.sent;
            _context.t6 = _context.t4.parse.call(_context.t4, _context.t5);
            (0, _context.t3)(_context.t6).toEqual(orderedSizes);
            console.info(chalk.blue('Size Snapshot Updated'));
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