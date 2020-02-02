const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = Schema({
    player: {
        type: Schema.Types.ObjectId,
        ref: 'Player'
    },
    scores: [{
        holeNumber: {
            type: Number
        },
        score: {
            type: Number
        }
    }]
});

module.exports = mongoose.model('Score', ScoreSchema);