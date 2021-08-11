const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

router.get('/', async (req, res) => {
    try {
        const users = await Users.find()
        res.json(users)
    } catch (err) {
        res.json({ err })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const users = await Users.findById(
            req.params.id,
            { email: req.params.id },
            { $set: { email: req.body.email } })
        res.json(users)
    } catch (err) {
        res.json({ error: err })
    }
});

router.post('/', async (req, res) => {
    const users = new Users({
        _id: req.body.email,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const saveUsers = await users.save();
        res.json(saveUsers)
    } catch (err) {
        res.json({ err })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const editUsers = await Users.updateOne(
            { _id: req.params.id },
            { $set: { password: req.body.password } })
        res.json(editUsers)
    } catch (err) {
        res.json({ err })
    }
});

module.exports = router
