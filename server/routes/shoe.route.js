const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const newShoe = req.body;
    pool.query(`INSERT INTO "shoes" ("name", "cost") 
                VALUES ($1, $2); `, [newShoe.name, newShoe.cost])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('problem with POST to database', error);
            res.sendStatus(500);
        });
});

router.get('/', (req, res) => {
    pool.query(`SELECT "id", "name", "cost" FROM "shoes";`)
        .then((results) => {
            res.send(results.rows);
            // res.send(results);
        })
        .catch((error) => {
            console.log('problem with GET from database', error);
        });
});

router.delete('/', (req, res) => {
    const shoe = req.query;
    console.log(shoe.id);
    pool.query(`DELETE FROM "shoes"
                WHERE "id" = ($1);`, [shoe.id])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('problemo with DELETE from database', error);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    const shoe = req.body;
    console.log(shoe.id);
    pool.query(`UPDATE "shoes"
    SET "name" = ($1), "cost" = ($2)
    WHERE "id" = ($3);`, [shoe.name, shoe.cost, shoe.id])

        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('problemo with DELETE from database', error);
            res.sendStatus(500);
        });
});

module.exports = router;