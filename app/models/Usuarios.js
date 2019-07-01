const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({ //Schema del usuario 
    name: {
        type: String,
        required: true

    },
    longitude: {
        type: Number,
        required: true,
        default: 0

    },
    latitude: {
        type: String,
        required: true,
        default: 0
    },
    state: {
        type: String,
        required: true,
        enum: ['Panic', 'Save'],
        default: 'Save'
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;