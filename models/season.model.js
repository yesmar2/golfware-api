const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeasonSchema = Schema({
    year: {
        type: Number
    },
    teams: [{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }],
    events: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }]
});

module.exports = mongoose.model('Season', SeasonSchema);