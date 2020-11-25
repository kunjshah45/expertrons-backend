const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    assigned_date: { type: Date, required: true},
    name: { type: String, required: true},
    assigned_to: { type: String, required: true},
    deadline: { type: Date, required: true},
    description: { type: String},
},{
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;