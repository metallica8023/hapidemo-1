'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
// Create a server with a host and port
const server = Hapi.server({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, h) {

        return 'hello world';
    }
});
server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        console.dir(reply);
        return 'hello' + encodeURIComponent(request.params.name) + '!';
    }
});
const provision = async () => {
 
    await server.register(Inert);
 
    server.route({
        method: 'GET',
        path: '/files/{param*}',
        handler: {
            directory: {
                path: './public',
                redirectToSlash: true,
                index: true,
            }
        }
    });
 
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
 
    console.log('Server running at:', server.info.uri);
};
provision();