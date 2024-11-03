const mongoose = require('mongoose');

const climbSchema = new mongoose.Schema({
    name: { type: String },
    grade: { type: String, required: true },
    type: { type: String, enum: ['crimpy', 'compression', 'overhung', 'slab', 'soft', 'hard', 'slopey', 'pinchy', 'banger'] },
    location: { type: String },
    dateClimbed: { type: Date, default: Date.now },
    color: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    attempts: { type: Number, default: 1 },
    sent: { type: Boolean, default: False }
});

module.exports = mongoose.model('Climb', climbSchema);
