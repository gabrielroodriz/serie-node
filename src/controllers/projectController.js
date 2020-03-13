const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
    res.send({
        Ok: true,
        user: req.userId
    })
})

module.exports = app => app.use('/projects', router)