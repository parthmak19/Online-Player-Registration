const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const router = express.Router();
const app = express();
require('dotenv').config({ path: 'ayanokoji_server/test.env' });
require('dotenv/config');
const cookieparser = require('cookie-parser')
app.use(cookieparser())

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb+srv://DHAIRYA:Dhairya1221@cluster0.umruy.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected'))
    .catch((err) => console.log(err));


app.use('/users', require('./routes/users'));
app.listen(3010);