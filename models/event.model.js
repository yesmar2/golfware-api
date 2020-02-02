const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = Schema({
    number: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        requred: true
    },
    matchups: [{
        type: Schema.Types.ObjectId,
        ref: 'Matchup'
    }]
});

module.exports = mongoose.model('Event', EventSchema);