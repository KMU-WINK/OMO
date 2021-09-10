const express = require('express');
const multer = require('multer');
const path = require('path');

const { Post, Image, Hashtag } = require('../models');
// const { isLoggedIn } = require('./middlewares');

const router = express.Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext);
            done(null, basename + '_' + new Date().getTime() + ext);
        },
    }),
    limits: { fileSize: 20 * 1024 * 1024 },
});

router.post('/', upload.single('image'), async (req, res, next) => {
    try {
        console.log(req);
        const hashtags = req.body.content.match(/#[^\s#]+/g);
        const post = await Post.create({
            content: req.body.content,
        });
        if (hashtags) {
            const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
                where: { name: tag.slice(1).toLowerCase() },
            })));
            await post.addHashtags(result.map((v) => v[0]));
        }
        if (req.body.image) {
            if (Array.isArray(req.body.image)) {
                console.log('어레이 돌아가니?');
                const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })));
                await post.addImages(images);
            } else {
                console.log('그냥이 돌아가니?');
                const image = await Image.create({ src: req.body.image });
                await post.addImages(image);
            }
        }
        res.status(201).json({ message : "ok" });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/images', upload.array('image'),async (req, res, next) => {
    console.log(req.files);
    res.json(req.files.map((v) => v.filename))
});

router.delete('/:postId', async (req, res, next) => {
    try {
        await Post.destroy({
           where: {
               id: req.params.postId,
           }
        });
        res.json({ PostId: parseInt(req.params.postId, 10) });
    } catch(error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
