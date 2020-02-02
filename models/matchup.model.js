const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchupSchema = Schema({
    number: {
        type: Number,
        required: true
    },
    teamOne: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    teamTwo: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    scorecardOne: {
        type: Schema.Types.ObjectId,
        ref: 'Scorecard'
    },
    scorecardTwo: {
        type: Schema.Types.ObjectId,
        ref: 'Scorecard'
    }
});

module.exports = mongoose.model('Matchup', MatchupSchema);