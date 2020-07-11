const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchupSchema = Schema({
    number: {
        type: Number,
        required: true
    },
    teamOneNumber: {
        type: Number,
        required: true
    },
    teamTwoNumber: {
        type: Number,
        required: true
    },
    scorecards: [{
        type: Schema.Types.ObjectId,
        ref: 'Scorecard'
    }]
});

const EventSchema = Schema({
    number: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        requred: true
    },
    description: {
        type: String,
        required: true
    }, 
    matchups: [ MatchupSchema ],
    seasonId: {
        type: Schema.Types.ObjectId,
        ref: 'Season'
    }
});

module.exports = mongoose.model('Event', EventSchema);