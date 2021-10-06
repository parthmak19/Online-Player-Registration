const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');

const UserSchema1 = new mongoose.Schema({
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


const Player_registration_cod = mongoose.model('player_registration_cod', UserSchema1);

module.exports = Player_registration_cod;