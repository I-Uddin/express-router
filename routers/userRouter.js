const express = require("express");
const router = express.Router();
const {check, validationResult} = require("express-validator");

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

// routes
router.get('/', (req, res) => {
    res.json(users);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const findUser = users[id - 1];
    res.json(findUser);
})

// POST users route
router.post('/', [check("name").not().isEmpty().trim()], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({error: errors.array()})
    } else {
        const newUser = req.body;
        users.push(newUser);
        res.json(users);
    }
})

// PUT users route
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const index = id - 1;
    res.json(users);
})

// DELETE users route
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = id - 1;
    users.splice(index, 1);
    res.json(users);
})


module.exports = router;
