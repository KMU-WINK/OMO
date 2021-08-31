const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User, Post } = require('../models');
const { isLoggedIn, isNotLoggendIn } = require('./middlewares');
const router = express.Router();

router.post('/login', isNotLoggendIn, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }

        if (info) {
            return res.status(401).send(info.reason);
        }

        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }

            const fullUserWithoutPassword = await User.findOne({
               where: { id: user.id },
                attributes: {
                   exclude: ['password']
                },
                include: [{
                   model: Post,
                }, {
                   model: User,
                   as: 'Followings',
                }, {
                   model: User,
                   as: 'Followers',
                }]
            });

            return res.status(200).json(fullUserWithoutPassword);
        });
    })(req, res, next);
});

router.post('/', isNotLoggendIn, async (req, res, next) => {
    try {
        const exUser = await User.findOne({ // 이메일 중복 체크
            where: { email: req.body.email }
        });
        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10); // 비밀번호 암호화
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        res.status(201).send('good');
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.status(200).send('logout ok');
});

module.exports = router;