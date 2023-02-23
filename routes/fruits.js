const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

// List of Fruits
let fruits = [
  {
    name: "Apple",
    color: "Red",
  },
  {
    name: "Banana",
    color: "Yellow",
  },
  {
    name: "Kiwi",
    color: "Green",
  },
  {
    name: "Grape",
    color: "Purple",
  },
];

router.get("/", (req, res) => {
  res.json(fruits);
});

router.get("/:id", (req, res) => {
  res.json(fruits[req.params.id - 1]);
});

router.post("/", [check("color").not().isEmpty().trim()], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.json({ error: errors.array() });
  } else {
      fruits.push(req.body);
      res.json("Post Success!");
  }
});

router.put("/:id", (req, res) => {
  fruits.splice(req.params.id - 1, 1, req.body);
  res.json("Put Success!");
});

router.delete("/:id", (req, res) => {
  fruits.splice(req.params.id - 1, 1);
  res.json("Delete Success!");
});

module.exports = router;
