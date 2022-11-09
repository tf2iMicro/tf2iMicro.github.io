const { Schema, model } = require('mongoose');

const users = new Schema({
    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number,
        required: true,
        default: new Date()
    }
});

const name = 'users';
module.exports = users[name] || model(name, users);
