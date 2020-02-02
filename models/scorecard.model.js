const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScorecardSchema = Schema({
    playerOne: {
        type: Schema.Types.ObjectId,
        ref: 'Score'
    },
    playerTwo: {
        type: Schema.Types.ObjectId,
        ref: 'Score'
    },
    playerThree: {
        type: Schema.Types.ObjectId,
        ref: 'Score'
    },
    playerFour: {
        type: Schema.Types.ObjectId,
        ref: 'Score'
    }
});

module.exports = mongoose.model('Scorecard', ScorecardSchema);