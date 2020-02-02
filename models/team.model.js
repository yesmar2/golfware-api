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
    }
});

module.exports = mongoose.model('Team', TeamSchema);