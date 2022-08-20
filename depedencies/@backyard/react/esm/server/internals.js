var HapiInert = require('@hapi/inert');

var _require = require('@lowes/hapi-manifest'),
    createManifest = _require.createManifest;

var _require2 = require("path"),
    join = _require2.join;

var root = join(__dirname, "..", "..");
module.exports = {
  initialize: function initialize(port, host) {
    return {
      manifest: createManifest({
        server: {
          host: [host, process.env.NODE_HOST, "0.0.0.0"].find(function (v) {
            return v;
          }),
          port: [port, process.env.NODE_PORT, 8081].find(function (v) {
            return v;
          }),
          routes: {
            cors: {
              origin: ['*']
            },
            files: {
              relativeTo: join(root, "client")
            }
          }
        },
        register: {
          plugins: [HapiInert]
        }
      }),
      defaults: {
        env: {}
      }
    };
  }
};