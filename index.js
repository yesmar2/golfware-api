const Hapi = require("hapi");
const Mongoose = require("mongoose");
const adminRoutes = require('./routes/admin.routes');
const leagueRoutes = require('./routes/league.routes');
const seasonRoutes = require('./routes/season.routes');
const eventRoutes = require('./routes/event.routes');
const teamRoutes = require('./routes/team.routes');
const playerRoutes = require('./routes/player.routes');
const scorecardRoutes = require('./routes/scorecard.routes');
const scoreRoutes = require('./routes/score.routes');

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

server.route(adminRoutes);
server.route(leagueRoutes);
server.route(seasonRoutes);
server.route(eventRoutes);
server.route(teamRoutes);
server.route(playerRoutes);
server.route(scorecardRoutes);
server.route(scoreRoutes);

server.start();