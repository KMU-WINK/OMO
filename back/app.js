const express = require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const app = express();

db.sequelize.sync()
    .then(() => {
        console.log('db connect')
    })
    .catch(console.error)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('OMO');
});

app.use('/user', userRouter);


app.listen(3065, () => {
    console.log('running server');
});