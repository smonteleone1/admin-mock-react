"use strict";

var app = require('./app');

var mock = require('./api/v1/mock');

var datatable = require('./api/components/datatable/example');

module.exports = [app, mock, datatable];