const router = require('express').Router();

const shoes = [
    {
        name: 'Red Wing',
        cost: 250
    },
    {
        name: 'Puma Soliel V2',
        cost: 40
    },
    {
        name: 'Space Boots',
        cost: 10
    },
    {
        name: 'clown shoes',
        cost: 5
    }
];

router.post('/', (req, res) => {
    console.log('bark');
    const shoeToAdd = req.body;
    console.log(shoeToAdd);
    shoes.push(shoeToAdd);
    console.log(shoes);
    res.send(shoes);
})

router.get('/', (req, res) => {
    console.log('meow');
    res.send(shoes);
});

module.exports = router;