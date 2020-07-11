const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = Schema({
    firebaseUID: {
        type: String,
        required: true
    },
    leagues: [{
        type: Schema.Types.ObjectId,
        ref: 'League'
    }]
});

module.exports = mongoose.model('Admin', AdminSchema);