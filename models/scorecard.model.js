const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScorecardSchema = Schema({
    scores: [{
        type: Schema.Types.ObjectId,
        ref: 'Score'
    }],
});

module.exports = mongoose.model('Scorecard', ScorecardSchema);