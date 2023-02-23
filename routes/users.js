const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

// List of Users
let users = [
  {
    name: "User 1",
    age: 30,
  },
  {
    name: "User 2",
    age: 45,
  },
  {
    name: "User 3",
    age: 27,
  },
  {
    name: "User 4",
    age: 22,
  },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  res.json(users[req.params.id - 1]);
});

router.post(
  "/",
  [check("name").not().isEmpty().trim()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.array() });
    } else {
        users.push(req.body);
        res.json(users);
    }
  }
);

router.put("/:id", (req, res) => {
  users.splice(req.params.id - 1, 1, req.body);
  res.json("Put ID Success!");
});

router.delete("/:id", (req, res) => {
  users.splice(req.params.id - 1, 1);
  res.json("Delete ID Success!");
});

module.exports = router;
