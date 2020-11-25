const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mentorSchema = new Schema({
    name: { type: String, required: true},
},{
    timestamps: true
});

const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;