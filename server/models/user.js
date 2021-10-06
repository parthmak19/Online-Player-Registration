const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
require('dotenv').config({ path: '/home/dhairya/DHAIRYA/AYANOKOJI/ayanokoji_server/test.env' });
require('dotenv').config();

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    password2: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]

});

UserSchema.methods.generateAuthToken = async function () {
    try {
        // console.log(process.env.SECRET_KEY)
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    }
    catch (err) {
        console.log(err)
    }
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
