import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/* eslint-disable @typescript-eslint/no-use-before-define */

/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable func-names */

/* eslint-disable no-var */

/* eslint-disable no-multi-assign */

/* eslint-disable no-param-reassign */

/* eslint-disable no-bitwise */
var _require = require('lodash'),
    get = _require.get,
    slice = _require.slice,
    orderBy = _require.orderBy,
    filter = _require.filter,
    some = _require.some,
    every = _require.every,
    keys = _require.keys,
    values = _require.values,
    entries = _require.entries,
    includes = _require.includes,
    reduce = _require.reduce,
    toLower = _require.toLower;

var random = mulberry32(12345);

var pure_dataset = require('./dataset.json');

var dataset = Array(99990).fill(null).map(function (data, index) {
  return {
    id: index + 1,
    title: pure_dataset[rand(0, 4999)].title,
    genre: pure_dataset[rand(0, 4999)].genre,
    producer: pure_dataset[rand(0, 4999)].producer,
    studio: pure_dataset[rand(0, 4999)].studio,
    revenue: pure_dataset[rand(0, 4999)].revenue,
    release: pure_dataset[rand(0, 4999)].release,
    synopsis: pure_dataset[rand(0, 4999)].synopsis
  };
});

function rand(min, max) {
  return Math.floor(random() * (max - min + 1) + min);
}

function mulberry32(a) {
  return function () {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

module.exports = {
  method: "GET",
  path: // If we are on GCP (in Docker container),
  process.env.NODE_ENV === 'production' // Use docker container listener path
  ? "/bds/documentation/api/components/datatable/example" // Else, use localhost listener path
  : "/api/components/datatable/example",
  handler: function handler(request, h) {
    var query = request.query;
    var params = {
      page: Number(get(query, 'page', '1')),
      items: Number(get(query, 'items', '10')),
      globalFilter: get(query, 'globalFilter', null),
      filters: reduce(query, function (filters, value, key) {
        var k = key.match(/^filters\[([a-zA-Z0-9]+)\]$/);

        if (Array.isArray(k) && k[1]) {
          filters[k[1]] = value;
        }

        return filters;
      }, {}),
      sorts: reduce(query, function (filters, value, key) {
        var k = key.match(/^sorts\[([a-zA-Z0-9]+)\]$/);

        if (Array.isArray(k) && k[1]) {
          filters[k[1]] = value;
        }

        return filters;
      }, {})
    };
    var mods = {
      start: (params.page - 1) * params.items,
      end: (params.page - 1) * params.items + params.items
    };

    var applyGlobalFilter = function applyGlobalFilter(data, globalFilter) {
      return globalFilter ? filter(data, function (row) {
        return some(values(row), function (cell) {
          return includes(toLower(cell), toLower(globalFilter));
        });
      }) : data;
    };

    var applyFilters = function applyFilters(data, filters) {
      return keys(filters).length > 0 ? filter(data, function (row) {
        return every(entries(filters), function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return includes(toLower(row[key]), toLower(value));
        });
      }) : data;
    };

    var applySorts = function applySorts(data, sorts) {
      return keys(sorts).length > 0 ? orderBy.apply(void 0, [data].concat(_toConsumableArray(reduce(entries(sorts), function (sorts, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        sorts[0].push(key);
        sorts[1].push(value);
        return sorts;
      }, [[], []])))) : data;
    };

    var rows = applySorts(applyFilters(applyGlobalFilter(dataset, params.globalFilter), params.filters), params.sorts);
    var table = slice(rows, mods.start, mods.end);
    var info = {
      count: rows.length,
      pages: Math.ceil(rows.length / params.items)
    };
    return h.response({
      params: params,
      info: info,
      table: table
    }).code(200);
  }
};