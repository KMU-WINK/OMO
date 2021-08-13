const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const exUser = await User.findOne({ // 이메일 중복 체크
            where: {
                email: req.body.email,
            }
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

module.exports = router;