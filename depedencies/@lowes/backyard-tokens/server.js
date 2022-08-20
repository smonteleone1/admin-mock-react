const path = require('path');
const hapi = require('hapi');
const inert = require('inert');

const server = hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
        files: {
            relativeTo: path.join(__dirname, 'styleguide')
        }
    }
});

const init = async () => {
    await server.register(inert);

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                index: ['index.html']
            }
        }
    });

    await server.start();

    console.log('Server running at:', server.info.uri); // eslint-disable-line no-console
};

process.on('unhandledRejection', (err) => {
    console.log(err); // eslint-disable-line no-console
    process.exit(1);
});

init();
