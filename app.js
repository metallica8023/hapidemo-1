'use strict';
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
// Create a server with a host and port
const server = Hapi.server({ 
    host: '0.0.0.0', 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path:'/', 
    config:{

        handler: function (request, h) {
            return 'hello world';
        },
        tags:["api"]
    }
   
});
server.route({
    method: 'GET',
    path: '/{name}',
    config: {
        handler: function (request, reply) {
            console.dir(reply);
            return 'hello' + encodeURIComponent(request.params.name) + '!';
        },
        tags:["api"]
    }
    
});
const options = {
    info: {
            'title': '大龙api',
            'version': Pack.version,
        }
    };
const provision = async () => {
    await server.register(Inert);
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: options
        }
    ]);
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