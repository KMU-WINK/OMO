const express = require('express');
const {User, Post, Image} = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const posts = await Post.findAll({
            limit: 10,
            order: [['createdAt', 'DESC']],
            include: [{
                model: User,
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt'],
                },
            }, {
                model: Image,
            }],
        });

        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;