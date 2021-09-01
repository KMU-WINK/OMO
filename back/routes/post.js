const express = require('express');

const { Post, Image, User } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/', isLoggedIn, async (req, res, next) => {
    try {
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id,
        });
        const fullPost = await Post.findOne({
            where: { id: post.id },
            include: [{
                model: Image,
            }, {
                model: User,
            }]
        });

        res.status(201).json(fullPost);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/:postId', isLoggedIn, async (req, res, next) => {
    try {
        await Post.destroy({
           where: {
               id: req.params.postId,
               UserId: req.user.id,
           }
        });
        res.json({ PostId: parseInt(req.params.postId, 10) });
    } catch(error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
