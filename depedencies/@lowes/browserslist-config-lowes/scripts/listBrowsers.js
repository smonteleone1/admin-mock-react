const browserlist = require('browserslist'); // eslint-disable-line import/no-extraneous-dependencies
const config = require('../lib');

// eslint-disable-next-line no-console
console.log(JSON.stringify(browserlist(config), null, 2)); // NOSONAR
