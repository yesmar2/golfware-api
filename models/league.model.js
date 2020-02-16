const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeagueSchema = Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('League', LeagueSchema);