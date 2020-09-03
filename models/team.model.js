const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = Schema({
    number: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        requred: true
    },
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
    }]
});

module.exports = mongoose.model('Team', TeamSchema);
