const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeasonSchema = Schema({
    year: {
        type: Number,
    },
    league: {
        type: Schema.Types.ObjectId,
        ref: 'League',
    },
    teams: [{
        type: Schema.Types.ObjectId,
        ref: 'Team',
    }],
    events: [{
        type: Schema.Types.ObjectId,
        ref: 'Event',
    }],
    golfCourses: [{
        type: String,
    }],
    numberOfHoles: {
        type: Number,
        min: 1,
        max: 18,
        default: 9,
    },
});

module.exports = mongoose.model('Season', SeasonSchema);
