const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    handicap: {
        type: Number
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }
});

module.exports = mongoose.model('Player', PlayerSchema);