const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');

const UserSchema2 = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    game: {
        type: String,
        required: true
    },
    player_profile_name: {
        type: String,
        required: true
    },
    player2_profile_name: {
        type: String,
        required: true
    },
    team_name: {
        type: String,
        required: true
    }
});


const Player_registration_CS = mongoose.model('player_registration_CS', UserSchema2);

module.exports = Player_registration_CS;