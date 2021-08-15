const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');
const passport = require("passport");
const dotenv = require('dotenv');

const app = express();

db.sequelize.sync()
    .then(() => {
        console.log('db connect')
    })
    .catch(console.error)

passportConfig();
dotenv.config();

app.use(cors({
    // 보안상의 이유로 추후 바꿔줘야함.
    origin: '*',
    credential: false,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('winkSecretKey'));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('OMO');
});

app.use('/user', userRouter);


app.listen(3065, () => {
    console.log('running server');
});