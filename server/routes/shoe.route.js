const router = require('express').Router();
const pg = require('pg');
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


// ---- Move this connection to a module --- //

// remember that the capital startchar means this is a constructor
// this is a pool of connections options (to the database)
// mongoose defined these things for us. PG allows/forces us to do it
const Pool = pg.Pool;
const pool = new Pool({
    database: 'shoe_store', // name of the datbase
    host: 'localhost', // where is your database?
    port: 5432, // the port here is the one that the database is running on.
    // Postgress defaults to 5432

    max: 10, // how many possible simultaneous connections (i.e. queries) 
    // heroku allows 10 connections for its cost-free service

    // this is the timeout time
    idleTieoutMillis: 30000
});

// Set up success/error messages
pool.on('connect', () => {
    console.log('Postgresql connected');
});
pool.on('error', (error) => {
    console.log('error with Postgres pool', error);
});

// ^^ Move this to a connection module ^^ //

router.post('/', (req, res) => {
    const newShoe = req.body;
    pool.query(`INSERT INTO "shoes" ("name", "cost") 
                VALUES ($1, $2); `, [newShoe.name, newShoe.cost])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('problem with post to database', error);
            res.sendStatus(500);
        });
});

router.get('/', (req, res) => {
    res.send(shoes);
});

module.exports = router;