const Hapi = require("hapi");
const Mongoose = require("mongoose");
const playerRoutes = require('./routes/player.routes');
const teamRoutes = require('./routes/team.routes');
const eventRoutes = require('./routes/event.routes');

const server = new Hapi.Server({ "host": "localhost", "port": 3001 });

Mongoose.connect("mongodb://localhost/golfware",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

server.route({
    path: '/',
    method: 'GET',
    handler(request, h) {
        return "Welcome to the golfware api!"
    }
});

server.route(playerRoutes);
server.route(teamRoutes);
server.route(eventRoutes);

server.start();