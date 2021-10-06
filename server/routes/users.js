const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/user");
const Player_registration_cod = require("../models/user1");
const Player_registration_CS = require("../models/user2");
const Regards = require("../models/user3");
require('dotenv').config({ path: 'ayanokoji_server/test.env' });
require('dotenv/config');
const authenticate = require("../middleware/authenticate");

//const bcrypt = require('bcrypt');

router.post('/', (req, res) => {
    res.send("API");
});

router.post('/signup', async (req, res) => {
    const { name, email, password, password2 } = req.body

    //console.log(' Name ' + name+ ' email :' + email+ ' pass:' + password);

    if (!name || !email || !password || !password2) {
        return res.status(422).json({ error: "fill properly" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "already exist" });
        }
        else if (password !== password2) {
            return res.status(422).json({ error: "password not matching" });
        }
        else {
            const user = new User({ name, email, password, password2 });
            //const token = await user.generateAuthToken();
            //console.log(token)
            await user.save()
            res.status(201).json({ error: "already registered successfully" });
        }
    }
    catch (err) {
        console.log(err);
    }
});

router.post('/login', async (req, res) => {

    const { email, password } = req.body
    try {

        if (!email || !password) {
            return res.status(400).json({ error: "please filled the data" })
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {

            if (password === userLogin.password) {
                //console.log("yes")
                const token = await userLogin.generateAuthToken();
                // console.log(token)
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });

                return res.status(200).json({ error: "user signin successfully" })
            }
            else {
                //console.log("no")
                return res.status(400).json({ message: "INVALID" })
            }
        }

        else {
            return res.status(400).json({ error: "invalid credentials" })
        }


    }
    catch (err) {

    }

});

router.get('/registration_cod', authenticate, (req, res) => {
    //console.log("aaaa");
    res.send(req.rootUser);
})

router.post('/registration_cod', async (req, res) => {
    const { name, email, game, player_profile_name, player2_profile_name, team_name } = req.body
    // console.log(name,email,game,tournament);

    if (!name || !email || !game || !player_profile_name || !player2_profile_name || !team_name) {
        return res.status(422).json({ error: "fill properly" });
    }
    else {

        const player_registered = await Player_registration_CS.findOne({ email: email });

        if (player_registered) {
            //   console.log("hi")
            return await res.status(422).json({ error: "already filled up" });
        }
        else {
            const user1 = new Player_registration_cod({ name, email, game, player_profile_name, player2_profile_name, team_name });
            await user1.save()
            return res.status(200).json({ msg: "ok" });
        }       // console.log(name,email,game,tournament);
    }

});

router.get('/registration_cs', authenticate, (req, res) => {
    //console.log("aaaa");
    res.send(req.rootUser);
})

router.post('/registration_cs', async (req, res) => {
    const { name, email, game, player_profile_name, player2_profile_name, team_name } = req.body
    // console.log(name,email,game,tournament);

    if (!name || !email || !game || !player_profile_name || !player2_profile_name || !team_name) {
        return res.status(422).json({ error: "fill properly" });
    }
    else {
        //console.log("hi")
        const player_registered = await Player_registration_CS.findOne({ email: email });

        if (player_registered) {
            //   console.log("hi")
            return await res.status(422).json({ error: "already filled up" });
        }
        else {
            // console.log("hi")
            const user1 = new Player_registration_CS({ name, email, game, player_profile_name, player2_profile_name, team_name });
            await user1.save()
            return await res.status(200).json({ msg: "ok" });
        }       // console.log(name,email,game,tournament);
    }

});

router.get('/contactus', authenticate, (req, res) => {
    //console.log("aaaa");
    res.send(req.rootUser);
})

router.post('/contactus', async (req, res) => {
    const { name, email, regards } = req.body
    // console.log(name,email,game,tournament);

    if (!name || !email || !regards) {
        return res.status(422).json({ error: "fill properly" });
    }
    else {

        // console.log("hi")
        const user1 = new Regards({ name, email, regards });
        await user1.save()
        return await res.status(200).json({ msg: "ok" });
    }

});

router.get('/logout', (req, res) => {
    //console.log("aaaa");
    res.clearCookie("jwtoken")
    res.status(200).send("cleared");
})

module.exports = router;