'use strict'

const path = require('path');
const fastify = require('fastify')({ logger: false });

// Set fastify-static to serve everything in the test folder.
fastify.register(require('fastify-static'), { root: path.resolve(__dirname) });

// Set the home page to serve the index.html file.
fastify.get('/', function (req, reply) {
    return reply.sendFile('index.html');
});

// Have the server listen on port 3000.
fastify.listen(3000, (err, address) => {
    if (err) throw err;
    console.log(`Listening on port 3000`);
});