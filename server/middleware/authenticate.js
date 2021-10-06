const express = require('express');
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const app = express();

require('dotenv').config({ path: 'ayanokoji_server/test.env' });
require('dotenv/config');

const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!rootUser) {
            throw new Error("User not found");
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;
        next();
    }
    catch (err) {
        res.status(401).send("unauthorised token");
        console.log(err);
    }
}

module.exports = Authenticate;