const router = express.Router();

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

// routes
router.get('/', (req, res) => {
    res.json(fruits);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const getFruit = fruits[id - 1];
    res.json(getFruit);
})