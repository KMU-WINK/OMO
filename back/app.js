const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');
const passport = require("passport");
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const app = express();

db.sequelize.sync()
    .then(() => {
        console.log('db connect')
    })
    .catch(console.error)

app.use(morgan('dev'));
dotenv.config();

app.use(cors({
    origin: 'http://localhost:3060',
    credential: true,
}));

app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('winkSecretKey'));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));

app.get('/', (req, res) => {
    res.send('OMO');
});

// app.use('/user', userRouter);
app.use('/post', postRouter)
app.use('/posts', postsRouter)


app.listen(3065, () => {
    console.log('running server');
});