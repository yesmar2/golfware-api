const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeagueSchema = Schema({
    name: {
        type: String,
        required: true
    },
    admins: [{
        type: String,
        required: true
    }],
    seasons: [{
        type: Schema.Types.ObjectId,
        ref: 'Season'
    }],
    activeSeasonId: {
        type: Schema.Types.ObjectId,
        ref: 'Season'
    }
});

module.exports = mongoose.model('League', LeagueSchema);